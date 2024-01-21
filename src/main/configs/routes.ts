import { readdirSync } from 'fs';
import { join } from 'path';

export const config = async (app): Promise<void> => {
    try {
        console.log('Carregando rotas...');

        const filePath = join(__dirname, '../routes');

        for (const fileName of readdirSync(filePath)) {
            await (await import(`../routes/${fileName}`)).default(app);
        }
    } catch (err) {
        throw err;
    }
};
