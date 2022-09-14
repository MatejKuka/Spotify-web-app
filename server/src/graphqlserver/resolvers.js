const resolvers = {
    Query: {
        getSearchSongs: async (_, {stringSearch, responseAmount, pageNum}, {dataSources}) => {
            return dataSources.songAPI.getSearchSongs(stringSearch, responseAmount, pageNum);
        },
        getSong: async (_, {idSong}, {dataSources}) => {
            return dataSources.songAPI.getSong(idSong);
        },
        getArtist: async (_, {idArtist}, {dataSources}) => {
            return dataSources.songAPI.getArtist(idArtist);
        }

    }
}

module.exports = resolvers;