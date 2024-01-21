import { cache, logger } from '../../../infra/providers';
import { MakeFilesRepository } from './files-repository.factory';

const filesRepository = MakeFilesRepository();

const cacheProvider = cache.IoRdedisCacheProvider;
const loggerProvider = logger.WinstonLoggerProvider;

export const MakeSaveFileUseCaseContainer = () => {
    return {
        repository: {
            files: filesRepository,
        },
        providers: {
            cache: cacheProvider,
            logger: loggerProvider,
        },
    };
};

export const MakeFindOneFileUseCaseContainer = () => {
    return {
        repository: {
            files: filesRepository,
        },
        providers: {
            cache: cacheProvider,
            logger: loggerProvider,
        },
    };
};
