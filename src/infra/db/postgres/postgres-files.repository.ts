import { FilesRepositoryInterface } from '../../../domain/contracts/files.contract';
import { prisma } from '../../../main/configs/db';

export class PostgresFilesRepository implements FilesRepositoryInterface {
    async findOne(id: string): Promise<any> {
        try {
            const file = await prisma?.file.findUnique({
                where: { id },
            });

            return file;
        } catch (err) {
            console.error(err);
        }
    }

    async save(): Promise<any> {
        try {
            const newFile = prisma?.file.create({
                data: {
                    name: 'test',
                },
            });

            return newFile;
        } catch (err) {
            console.error(err);
        }
    }
}
