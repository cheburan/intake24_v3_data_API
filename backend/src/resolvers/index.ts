// Merging resolvers
import * as path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';

// Load all resolvers files with naming as `*.resolvers.*`
const resolvers = loadFilesSync(path.join(__dirname, "./**/*.resolvers.*"), {
  recursive: true,
});

export default resolvers;
