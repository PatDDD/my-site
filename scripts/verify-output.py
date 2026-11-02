from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import os
root=Path("dist").resolve()
base=os.environ.get("BASE_PATH","/")
origin=os.environ.get("SITE_URL","http://localhost:4321")
class Page(HTMLParser):
 def __init__(self): super().__init__(); self.urls=[]; self.ids=set(); self.canonical=None
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if "id" in a: self.ids.add(a["id"])
  if a.get("rel")=="canonical": self.canonical=a["href"]
  for key in ("href","src"):
   if key in a: self.urls.append(a[key])
pages={}
for path in root.rglob("*.html"):
 text=path.read_text(); assert "writing-template" not in text, path
 parser=Page(); parser.feed(text); pages[path]=parser
for required in ("index.html","about/index.html","work/index.html","thoughts/index.html","404.html","work/payment-risk/index.html","work/verification-data/index.html","work/partner-insights/index.html"):
 assert (root/required) in pages, required
count=0
for path,page in pages.items():
 assert page.canonical.startswith(origin.rstrip("/")+base), (path,page.canonical)
 for link in page.urls:
  u=urlsplit(link)
  if u.scheme or u.netloc: continue
  if u.path.startswith("/"):
   assert u.path.startswith(base), (path,link)
   dest=root/unquote(u.path[len(base):])
  else: dest=path.parent/unquote(u.path) if u.path else path
  if dest.is_dir(): dest=dest/"index.html"
  dest=dest.resolve(); assert dest.exists(), (path,link)
  if u.fragment and dest in pages: assert unquote(u.fragment) in pages[dest].ids,(path,link)
  count+=1
sitemap=(root/"sitemap.xml").read_text()
assert "writing-template" not in sitemap
assert "404.html" not in sitemap
assert origin.rstrip("/")+base+"work/payment-risk/" in sitemap
print(f"Verified {len(pages)} pages and {count} internal references at base {base}; draft excluded.")
