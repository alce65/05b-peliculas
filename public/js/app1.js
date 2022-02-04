function app() {
    console.log('App loaded');
    const URL_SERIES = 'http://localhost:3000/series';
    initiateSeries().then((data) => {
        showData(data);
    });

    function initiateSeries() {
        return fetch(URL_SERIES).then((resp) => resp.json());
    }

    function showData(data) {
        console.log(data);
    }
}

document.addEventListener('DOMContentLoaded', app);
