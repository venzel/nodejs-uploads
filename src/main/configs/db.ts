import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

export const config = async () => {
    try {
        if (!prisma) {
            prisma = new PrismaClient();
        }

        await prisma.$connect();

        console.log('Db connected successfully');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

export default prisma;
