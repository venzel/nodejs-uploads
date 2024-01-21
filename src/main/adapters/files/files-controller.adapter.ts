import { FilesControllerInterface } from '../../../domain/contracts/files.contract';

export const saveFileControllerAdapter = (filesController: FilesControllerInterface) => {
    return async (req, res) => {
        const input = {
            headers: req.headers,
            body: req.body,
        };

        const httpResponse = await filesController.save(input);

        return res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const findOneFileControllerAdapter = (filesController: FilesControllerInterface) => {
    return async (req, res) => {
        const { id } = req.params;

        const httpResponse = await filesController.findOne(id);

        return res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};
