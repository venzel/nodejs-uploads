import { FilesUseCaseContainerInterface } from '../../domain/contracts/files.contract';

export class SaveFileUseCase {
    constructor(private readonly container: FilesUseCaseContainerInterface) {}

    async execute() {
        console.log('--------------------- ok execute');
        this.container.repository.files.save();
    }
}
