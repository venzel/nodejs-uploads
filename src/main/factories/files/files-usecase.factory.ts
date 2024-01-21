import { SaveFileUseCase, FindOneFileUseCase } from '@/usecases/files';
import { MakeFilesContainer } from './files-container.factory';

export const MakeFilesUseCase = () => {
    const filesContainer = MakeFilesContainer();

    return {
        save: new SaveFileUseCase(filesContainer),
        findOne: new FindOneFileUseCase(filesContainer),
    };
};
