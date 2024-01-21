import { MainBuild } from './main/main.build';

const main = new MainBuild();

main.setBanner()
    .setDB()
    .then((resDb) => resDb.setMiddlewares().setRoutes().build())
    .catch((errDb) => errDb.message);
