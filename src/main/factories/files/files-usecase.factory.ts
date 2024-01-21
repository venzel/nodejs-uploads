import { FilesUseCaseInterface } from '../../../domain/contracts/files.contract';
import { FindOneFileUseCase, SaveFileUseCase } from '../../../usecases/files';
import { MakeFindOneFileUseCaseContainer, MakeSaveFileUseCaseContainer } from './files-usecase.container';

export const MakeFilesUseCase = async (): Promise<FilesUseCaseInterface> => {
    return {
        save: new SaveFileUseCase(MakeSaveFileUseCaseContainer()),
        findOne: new FindOneFileUseCase(MakeFindOneFileUseCaseContainer()),
    };
};
