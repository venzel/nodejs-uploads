import { FilesController } from '@/controllers/files.controller';
import { FilesControllerInterface } from '@/domain/contracts/files.contract';
import { MakeFilesUseCase } from './files-usecase.factory';

export const MakeFilesController = (): FilesControllerInterface => {
    const filesUseCase = MakeFilesUseCase();

    return new FilesController(filesUseCase);
};
