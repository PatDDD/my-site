import {defineCollection} from 'astro:content';
import {z} from 'astro/zod';
import {glob} from 'astro/loaders';
const common={title:z.string(),summary:z.string(),tags:z.array(z.string()),draft:z.boolean().default(true)};
export const collections={work:defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/work'}),schema:z.object({...common,featured:z.boolean().default(false)})}),thoughts:defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/thoughts'}),schema:z.object({...common,date:z.coerce.date()})})};
