import morgan from 'morgan';

export const config = (app) => {
    app.register(morgan('dev'));
    return app;
};
