import { cache, logger } from '../../../infra/providers';
import { MakeFilesRepository } from '../../factories/files-repository.factory';

const filesRepository = MakeFilesRepository();

const cacheProvider = new cache.IoRedisCacheProvider();
const loggerProvider = new logger.WinstonLoggerProvider();

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
