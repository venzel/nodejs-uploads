import {
    FilesContainerUseCaseInterface,
    FilesRepositoryInterface,
} from '../../domain/contracts/files.contract';

export class SaveFileUseCase {
    constructor(private readonly container: FilesContainerUseCaseInterface) {}

    async execute() {
        this.container.repository.files.save();
    }
}
