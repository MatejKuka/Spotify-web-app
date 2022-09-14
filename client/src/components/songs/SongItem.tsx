import React from 'react';
import "../../styles/songItem.scss"
import * as url from "url";

const SongItem: React.FC<{ song: any }> = (props) => {
    const song = props.song;
    return (

    <div className="container" >
        <img className={"image_class"} src={song.photo} alt="song photo"/>
        <div className="container__profile">
            <img
                src={song.photo}
                alt="people"
            />
            <div  className={"container__overflow"}>
                <h2>{song.title}</h2>
                <p>by <b>{song.author}</b></p>
            </div>
        </div>
    </div>
    );
}

export default SongItem;


/*
<div className={"songItemClass"}>
            <div className={"imageContainerClass"}>
                <img src={song.photo} alt="song photo"/>
            </div>
            <h2>{song.title}</h2>
            <p>{song.author}</p>
        </div>
 */