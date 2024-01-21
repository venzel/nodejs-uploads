import { FilesContainerInterface } from '../../domain/contracts/files.contract';

export class SaveFileUseCase {
    constructor(private readonly container: FilesContainerInterface) {}

    async execute() {
        this.container.repository.files.save({});
    }
}
