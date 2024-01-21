import fastify from 'fastify';
import pino from 'pino';

export const config = () => {
    const app = fastify({
        logger: pino(),
    });

    return app;
};
