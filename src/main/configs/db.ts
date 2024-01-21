import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

const seed = async () => {
    try {
        await prisma.file.deleteMany();

        const data = [
            { name: 'file_1.xlsx' },
            { name: 'file_2.xlsx' },
            { name: 'file_3.xlsx' },
            { name: 'file_4.xlsx' },
        ];

        for (const item of data) {
            await prisma.file.create({ data: item });
        }
    } catch (err) {
        console.error(err);
    }
};

export const config = async () => {
    try {
        if (!prisma) {
            prisma = new PrismaClient();
        }

        await prisma.$connect();

        await seed();

        console.log('Db connected successfully');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

export { prisma };
