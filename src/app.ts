import { MainBuild } from './main/main.build';

const main = new MainBuild();

main.setBanner().setMiddlewares().setRoutes().build();
