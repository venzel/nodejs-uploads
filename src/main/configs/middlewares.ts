import morgan from 'morgan';

export const config = (app) => {
    app.use(morgan('dev'));
};
