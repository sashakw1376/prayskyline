// src: https://docs.astro.build/en/guides/content-collections/

// Import utilities, loaders, Zod
import { defineCollection } from 'astro:content';

import { glob } from 'astro/loaders';

import { z } from 'astro/zod';

const intro = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/intro' }),
    schema: z.object({
        title: z.string(),
        order: z.number()
    })
})
const stops = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/stops' }),
    schema: z.object({
        title: z.string(),
        order: z.number().default(999)
    })
})

export const collections = { intro, stops };