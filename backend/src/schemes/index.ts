// Merging schemas
import * as path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';

// Load all type definition files (including .ts, .js, .gql, .graphql, .graphqls)
const typesArray = loadFilesSync(path.join(__dirname, "."), {
  recursive: true,
	extensions: ['graphql']
});
const typesMerged = mergeTypeDefs(typesArray);

export default typesMerged;
