import { HttpResponse } from '@/domain/contracts/http';
import {
    FilesControllerInterface,
    FilesUseCaseInterface,
    InputFileDto,
} from '../domain/contracts/files.contract';
import { ok, create } from './helpers';

export class FilesController implements FilesControllerInterface {
    constructor(private readonly useCase: FilesUseCaseInterface) {}

    async save(input: InputFileDto): Promise<HttpResponse> {
        await this.useCase.save.execute(input);
        return create();
    }

    async findOne(id: string): Promise<HttpResponse> {
        const response = await this.useCase.findOne.execute(id);
        return ok(response);
    }
}
