const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphqlserver/schema');
const resolvers = require('./graphqlserver/resolvers');
const SongAPI = require('./datasources/song-api');


const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            songAPI: new SongAPI(),
        };
    },
});

server.listen().then(() => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
  `);
});