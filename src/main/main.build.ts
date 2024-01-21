import { banner, db, framework, middlewares, routes, server } from './configs';

const app = framework.config();

export class MainBuild {
    setBanner() {
        banner.config();
        return this;
    }

    async setDB() {
        await db.config();
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
