import {
    FilesControllerInterface,
    FilesUseCaseInterface,
    HttpResponse,
} from '../domain/contracts/files.contract';

export class FilesController implements FilesControllerInterface {
    constructor(private readonly filesUseCase: FilesUseCaseInterface) {}

    async save(): Promise<HttpResponse> {
        throw new Error('Method not implemented.');
    }

    async findOne(): Promise<HttpResponse> {
        throw new Error('Method not implemented.');
    }
}
