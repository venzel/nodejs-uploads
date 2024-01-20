import { name, version } from '../../../package.json';

export const config = () => {
    console.log('----------------------------------------');
    console.log(`${name.toUpperCase()}\nv${version}`);
    console.log('----------------------------------------');
};

export const cf = () => {
    return null;
};
