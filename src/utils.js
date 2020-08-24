function normalize(name) {
    let uri = name.replace(/[/]/g, '');
    uri = uri.replace(/[ ]/g, '-');
    uri = uri.replace(/--/g, '-');
    uri = uri.toLowerCase();
    return uri;
}

export {normalize};