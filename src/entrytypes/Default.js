import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Default(props) {
    const title = props.entry.title === '' ? '' : <h1 className="Default__title">{props.entry.title}</h1>;

    return (
        <section className="Default entry">
            {title}
            <div className="Default__content">
                <ReactMarkdown source={props.entry.content} />
            </div>
        </section>
    );
}