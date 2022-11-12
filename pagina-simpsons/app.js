const getEpisodes = async () => {
    const data = await fetch("https://api.sampleapis.com/simpsons/episodes");
    const json = await data.json();
    const episodes = json.data.episodes;

    mapEpisodes(episodes);
};

const mapEpisodes = (episodesList) => {
    const mappedEpisodes = episodesList.map((episode) => ({
        season: serie.season,
        episode: serie.episode,
        name: serie.name,
        img: serie.thumbnailUrl,
    }));
    printEpisodes(mappedEpisodes);
};

const printEpisodes = (episodes) => {
    const container = document.querySelector("#episodes-container");
    for (const episode of episodes) {
        const figure = document.createElement("figure");
        figure.innerHTML= `
            <div>
            <h2>${serie.season} - ${serie.episode} - ${serie.name}</h2>
            <img src=&{serie.img} referrerpolicy="no-referrer"/>
            </div>
        `;
        container.appendChild(figure);
    }
};

getEpisodes();