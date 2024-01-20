import { z } from 'zod';
import 'dotenv/config';

const schema = z.object({
    api: z.object({
        port: z.number().default(3000),
        host: z.string().default('localhost'),
    }),
});

export const envs = schema.parse(process.env);
