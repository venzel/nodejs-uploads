import { z } from 'zod';
import 'dotenv/config';

const schema = z.object({
    api: z.object({
        port: z.string().default('3000'),
        host: z.string().default('localhost'),
    }),
});

const defaultEnvs = {
    api: {
        port: process.env.API_PORT,
        host: process.env.API_HOST,
    },
};

export const envs = schema.parse(defaultEnvs);
