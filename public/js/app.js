async function app() {
    console.log('App loaded');
    const URL_SERIES = 'http://localhost:3000/series';
    const data = await initiateSeries();
    showData(data);

    async function initiateSeries() {
        const resp = await fetch(URL_SERIES);
        return resp.json();
    }

    function showData(data) {
        console.log(data);
        let template = '';
        data.forEach((itemSeries) => {
            template += `
                <li class="serie">
                    <img
                        class="serie__poster"
                        src="${itemSeries.poster}"
                        alt="${itemSeries.name}"
                    />
                    <h4 class="serie__title">${itemSeries.name}</h4>
                    <p class="serie__info">${itemSeries.creator} (${
                itemSeries.year
            })</p>
                    <ul class="score">
                        <li class="score__star">
                            <i
                                class="icon--score fas fa-star"
                                title="${1}/5"
                            ></i>
                        </li>
                    </ul>
                    <i class="fas fa-times-circle icon--delete"></i>
                </li>`;
        });
        document
            .querySelector('.series-pending')
            .querySelector('.series-list').innerHTML = template;
    }
}

document.addEventListener('DOMContentLoaded', app);
