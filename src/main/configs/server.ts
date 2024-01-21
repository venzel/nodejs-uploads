import { envs } from './envs';

export const config = (app) => {
    app.listen(
        {
            port: envs.api.port,
            host: envs.api.host,
        },
        (err, _port) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }

            console.log(`Server listening at ${envs.api.port}`);
        },
    );
};
