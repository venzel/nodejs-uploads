import { FilesContainerInterface } from '@/domain/contracts/files.contract';
import { cache, logger } from '@/infra/providers';
import { MakeFilesRepository } from './files-repository.factory';

export const MakeFilesContainer = (): FilesContainerInterface => {
    const filesRepository = MakeFilesRepository();

    return {
        repository: {
            files: filesRepository,
        },
        providers: {
            cache: cache.IoRdedisCacheProvider,
            logger: logger.WinstonLoggerProvider,
        },
    };
};
