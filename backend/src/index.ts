import { ApolloServer } from "apollo-server";

// Import schemas & resolvers
import typeDefs from "./schemes";
import resolvers from "./resolvers";

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: (request) => {
    return {
      ...request,
    };
	}
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
