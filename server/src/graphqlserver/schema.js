const {gql} = require('apollo-server');


const typeDefs = gql`
    
    type Query{
        getSearchSongs(q: String!): [Song] 
        getAllArtists: [Artist!]!
        getArtist(id: ID!): Artist
        getSong(id: ID!): Song
        getSongLyrics(id: ID!): String
    }

    type Song {
        id: ID!
        title: String!
        artist: Artist!
        photo: String
        lyrics: String!
    }

    type Album {
        title: String
        songs: [Song!]!
    }
    
    
    type Artist {
        id: ID!
        name: String!
        songs: [Song!]
        photo: String
        description: String
    }
`;
//TODO check the API and finish the Lyrics part ip there - should I create separate object for lyrics because it is redundant or not?
module.exports = typeDefs;