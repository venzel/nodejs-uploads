import { saveFileControllerAdapter, findOneFileControllerAdapter } from '../adapters/files';
import { MakeFilesController } from '../factories/files/files-controller.factory';

const base = '/files/upload';

export default async (app): Promise<void> => {
    const filesController = await MakeFilesController();

    app.post(base, saveFileControllerAdapter(filesController));
    app.get(base + '/:id', findOneFileControllerAdapter(filesController));
};
