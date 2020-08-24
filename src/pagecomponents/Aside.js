import React from 'react';
import {api} from '../config.js';

export default function Aside(props) {
    if (props.bio) {
        return (
            <aside className="Aside">
                <div className="Aside__imgWrapper">
                    <img alt="Portrait" src={api + props.bio.portrait.formats.medium.url} />
                </div>
                <div className="Aside__fullName">{props.bio.fullname}</div>
                <div className="Aside__profession">{props.bio.profession}</div>
                <div className="Aside__link">{props.bio.location}</div>
                <div className="Aside__link">{props.bio.school}</div>
            </aside>
        );
    } else {
        return (
            <aside className="Aside">

            </aside>
        );
    }


}