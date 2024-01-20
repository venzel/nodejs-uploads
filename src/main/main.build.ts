import { banner, framework, middlewares, routes, server } from './configs';

const app = framework.config();

export class MainBuild {
    setBanner() {
        banner.config();
        return this;
    }

    setMiddlewares() {
        middlewares.config(app);
        return this;
    }

    setRoutes() {
        routes.config(app);
        return this;
    }

    build() {
        server.config(app);
    }
}
