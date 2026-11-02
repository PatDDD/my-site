import test from 'node:test';
import assert from 'node:assert/strict';
import {published, newest, sitePath} from '../src/lib/content.mjs';
test('drafts are excluded while public entries survive',()=>assert.deepEqual(published([{id:'a',data:{draft:true}},{id:'b',data:{draft:false}}]).map(x=>x.id),['b']));
test('posts sort newest first without mutating input',()=>{const a=[{data:{date:new Date('2024-01-01')}},{data:{date:new Date('2025-01-01')}}];assert.equal(newest(a)[0],a[1]);assert.equal(a[0].data.date.getFullYear(),2024)});
test('links preserve root and project base including already-prefixed paths',()=>{assert.equal(sitePath('/work/','/'),'/work/');assert.equal(sitePath('/work/','/my-site/'),'/my-site/work/');assert.equal(sitePath('/my-site/work/','/my-site/'),'/my-site/work/');assert.equal(sitePath('/','/my-site/'),'/my-site/')});
