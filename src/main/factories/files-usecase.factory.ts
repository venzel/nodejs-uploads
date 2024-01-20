import { FilesUseCaseInterface } from '../../domain/contracts/files.contract';
import { FindOneFileUseCase, SaveFileUseCase } from '../../usecases';
import {
    MakeFindOneFileUseCaseContainer,
    MakeSaveFileUseCaseContainer,
} from '../containers/usecase/files-usecases.container';

export const MakeFilesUseCase = async (): Promise<FilesUseCaseInterface> => {
    const saveFileUseCaseContainer = MakeSaveFileUseCaseContainer();
    const findOneFileUseCaseContainer = MakeFindOneFileUseCaseContainer();

    return {
        save: new SaveFileUseCase(saveFileUseCaseContainer),
        findOne: new FindOneFileUseCase(findOneFileUseCaseContainer),
    };
};
