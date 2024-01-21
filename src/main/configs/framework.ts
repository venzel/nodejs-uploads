import express from 'express';

export const config = () => {
    const app = express();

    app.use(express.json());

    return app;
};
