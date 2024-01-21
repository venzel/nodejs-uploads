import { FilesRepositoryInterface } from '../../../domain/contracts/files.contract';
import prisma from '../../../main/configs/db';

export class PostgresFilesRepository implements FilesRepositoryInterface {
    async findOne(): Promise<void> {}

    async save(): Promise<void> {
        try {
            prisma.file.create({
                data: {
                    name: 'test',
                },
            });
        } catch (err) {
            console.error(err);
        }
    }
}
