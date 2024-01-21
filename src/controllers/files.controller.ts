import { HttpResponse } from '@/domain/contracts/http';
import {
    FilesControllerInterface,
    FilesUseCaseInterface,
    InputFileDto,
} from '../domain/contracts/files.contract';
import { ok, create } from './helpers';

export class FilesController implements FilesControllerInterface {
    constructor(private readonly filesUseCase: FilesUseCaseInterface) {}

    async save(input: InputFileDto): Promise<HttpResponse> {
        await this.filesUseCase.save.execute(input);

        return create();
    }

    async findOne(id: string): Promise<HttpResponse> {
        const response = await this.filesUseCase.findOne.execute(id);

        return ok(response);
    }
}
