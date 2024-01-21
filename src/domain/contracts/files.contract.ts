import { HttpResponse } from './http';
import { CacheProviderInterface, LoggerProviderInterface } from './providers.contracts';

export interface InputFileDto {
    headers: {};
    body: {
        name: string;
    };
}

export interface OutputFileDto {
    id: string;
    name: string;
}

export interface FilesRepositoryInterface {
    save(data: any): Promise<any>;
    findOne(id: string): Promise<any>;
}

export interface FilesContainerInterface {
    repository: {
        files: FilesRepositoryInterface;
    };
    providers: {
        cache: CacheProviderInterface;
        logger: LoggerProviderInterface;
    };
}

export interface FilesUseCaseInterface {
    save: { execute(input: InputFileDto): Promise<void> };
    findOne: { execute(id: string): Promise<void> };
}

export interface FilesControllerInterface {
    save(input: InputFileDto): Promise<HttpResponse>;
    findOne(id: string): Promise<HttpResponse>;
}
