import { FilesContainerInterface } from '../../domain/contracts/files.contract';

export class FindOneFileUseCase {
    constructor(private readonly container: FilesContainerInterface) {}

    async execute(id: string) {
        const existsFile = await this.container.repository.files.findOne(id);
        console.log(existsFile);
    }
}
