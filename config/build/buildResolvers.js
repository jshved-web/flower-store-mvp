import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

export function buildResolvers(options) {
  return {
    extensions: ['.jsx', '.js'],
    preferAbsolute: true,
    // root: [path.resolve('./src')],
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      "@src":  path.resolve(__dirname, '../../src/'),
    }
  };
}
