/** @template {{data:{draft?:boolean}}} T @param {T[]} entries @returns {T[]} */
export function published(entries){return entries.filter(entry=>!entry.data.draft)}
/** @template {{data:{date:Date}}} T @param {T[]} entries @returns {T[]} */
export function newest(entries){return [...entries].sort((a,b)=>b.data.date.getTime()-a.data.date.getTime())}
/** @param {string} path @param {string} base */
export function sitePath(path,base='/'){const prefix=`/${base.split('/').filter(Boolean).join('/')}`;const normalized=`/${path.replace(/^\/+/, '')}`;return prefix==='/'?normalized:(normalized===prefix||normalized.startsWith(prefix+'/')?normalized:prefix+normalized)}
