import { FilesContainerUseCaseInterface } from '../../domain/contracts/files.contract';

export class FindOneFileUseCase {
    constructor(private readonly container: FilesContainerUseCaseInterface) {}

    async execute() {
        this.container.repository.files.findOne();
    }
}
