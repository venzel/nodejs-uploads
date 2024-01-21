import { FilesRepositoryInterface } from '../../../domain/contracts/files.contract';
import { PostgresFilesRepository } from '../../../infra/db/postgres/postgres-files.repository';

export const MakeFilesRepository = (): FilesRepositoryInterface => {
    return new PostgresFilesRepository();
};
