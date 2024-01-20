import { FilesControllerInterface } from '../../domain/contracts/files.contract';

export const saceFilesFetifyControllerAdapter = (controller: FilesControllerInterface) => {
    return async (_req, res) => {
        const httpResponse = await controller.save();

        return res.status(httpResponse.statusCode).send(httpResponse.body);
    };
};
