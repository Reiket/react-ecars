import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
    resolve: {
        alias: {
            '@shared': path.resolve(__dirname, 'src/shared')
        }
    }
};

export default config;