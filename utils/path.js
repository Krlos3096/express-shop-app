import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(path.join(__filename,'/..'));

// Use __dirname as the directory name of the current module
export default __dirname;