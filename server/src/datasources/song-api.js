const {URL_FOR_SONGS, RAPIDAPI_Host, RAPIDAPI_Key} = require("../database-config");
const {RESTDataSource} = require('apollo-datasource-rest');

const headerAPI = {
    headers: {
        'X-RapidAPI-Key': RAPIDAPI_Key,
        'X-RapidAPI-Host': RAPIDAPI_Host
    }
}
const paramsAPI = (stringSearch, responseAmount, pageNum) => {
    return {
        params: {
            q: stringSearch.toString(),
            per_page: responseAmount.toString(),
            page: pageNum.toString()
        }
    }
}

class SongAPI extends RESTDataSource {
    constructor() {
        super();
        //this.baseURL = URL_FOR_SONGS;
        this.baseURL = 'https://genius-song-lyrics1.p.rapidapi.com/';
    }

    getSearchSongs(stringSearch, responseAmount, pageNum) {
        return this.get(`search`,
            paramsAPI(
                stringSearch,
                responseAmount,
                pageNum
            ), headerAPI);
    }

    getSongLyrics(songId) {
        return this.get(`songs/${songId}/lyrics`, undefined, headerAPI)
    }

    getSong(songId) {
        return this.get(`songs/${songId}?text_format=dom`, undefined, headerAPI)
    }

    getArtist(artistID) {
        return this.get(`artists/${artistID}?text_format=dom`, undefined, headerAPI);
    }

}

module.exports = SongAPI;
