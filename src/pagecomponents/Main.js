import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { normalize } from '../utils.js';
import Default from '../entrytypes/Default.js';

export default function Main(props) {
    if (props.categories) {
        const routes = props.categories.map((item, i) =>
            <Route exact={i === 0} path={'/' + (i === 0 ? '' : normalize(item.title))} key={i}>
                {item.title}
                {item.entries.map((entry, j) => {
                    switch(entry.__component) {
                        case 'entrytypes.default':
                            return (
                                <Default entry={entry} />
                            )
                    }
                })}
            </Route>
        );

        return (
            <main className="Main">
                <Switch>
                    {routes}
                </Switch>
            </main>
        );
    } else {
        return (
            <main className="Main">

            </main>
        );
    }


}