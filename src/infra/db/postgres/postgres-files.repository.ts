import { FilesRepositoryInterface } from '../../../domain/contracts/files.contract';
import { PrismaClient } from '@prisma/client';

export class PostgresFilesRepository implements FilesRepositoryInterface {
    async findOne(): Promise<void> {}

    async save(): Promise<void> {
        const prisma = new PrismaClient();
        prisma.file.create({
            data: {
                name: 'test',
            },
        });
    }
}
