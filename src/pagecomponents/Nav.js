import React from 'react';
import { Link } from 'react-router-dom';
import { normalize } from '../utils.js';
import './Nav.scss';

export default function Nav(props) {
    if (props.categories) {
        const links = props.categories.map((item, i) =>
            <li key={i}>
                <Link to={'/' + normalize(item.title)}>{item.title}</Link>
            </li>
        );

        return (
            <nav className="Nav">
                <ul>
                    {links}
                </ul>
            </nav>
        );
    } else {
        return (
            <nav className="Nav">

            </nav>
        );
    }
}