import React from 'react';
import QueryResult from "../functional/QueryResult";
import {gql, useQuery} from "@apollo/client";
import {MOCK_DATA} from "../../mockData/mockData";
import SongItem from "./SongItem";
import "../../styles/songList.scss";
import SearchForm from "./SearchForm";

const GET_SEARCH_SONGS = gql`
    query getSongs($phrase: String!) {
        getSearchSongs(q: $phrase) {
            id
        }
    }
`;

const helepel = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '233d9b84dbmshe7088df3ed4a8ccp1b88c5jsnf4086b07e66a',
            'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
    };

    await fetch('https://genius-song-lyrics1.p.rapidapi.com/artists/456537?text_format=dom', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}


function SongList() {
    //const { loading, error, data } = useQuery(GET_SEARCH_SONGS);
    helepel();
    const loading = false;
    const error = undefined;
    const data = MOCK_DATA;
    console.log(data)

    function searchFormHandler() {

    }

    return (
        <div>
            <SearchForm onAddedInput={searchFormHandler}/>
            <QueryResult dataQuery={data} error={error} loading={loading}>
                <div className={"grid_items"}>
                    {MOCK_DATA.map((item) => (
                        <SongItem
                            key={item.id}
                            song={item}
                        />))}
                </div>
            </QueryResult>
        </div>
    );
}

export default SongList;


/*
query getSong($id: ID!) {
        getSong(id: $id) {
            title
            id
            artist {
                name
            }
        }
    }
 */