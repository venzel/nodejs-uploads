import { CacheProviderInterface, LoggerProviderInterface } from './providers.contracts';

export type HttpResponse<T = any> = {
    statusCode: number;
    body: T;
};

export interface FilesRepositoryInterface {
    save(): Promise<void>;
    findOne(): Promise<void>;
}

export interface FilesContainerUseCaseInterface {
    repository: {
        files: FilesRepositoryInterface;
    };
    providers: {
        cache: CacheProviderInterface;
        logger: LoggerProviderInterface;
    };
}

export interface FilesUseCaseInterface {
    save: { execute(): Promise<void> };
    findOne: { execute(): Promise<void> };
}

export interface FilesControllerInterface {
    save(): Promise<HttpResponse>;
    findOne(): Promise<HttpResponse>;
}
