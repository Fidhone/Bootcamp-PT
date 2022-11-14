const getEpisodes = async () => {
    const data = await fetch("https://api.sampleapis.com/simpsons/episodes");
    const episodes = await data.json();


    mapEpisodes(episodes);
};

const mapEpisodes = (episodesList) => {
    const mappedEpisodes = episodesList.map((episode) => ({
        season: episode.season,
        episode: episode.episode,
        name: episode.name,
        img: episode.thumbnailUrl,
    }));
    printEpisodes(mappedEpisodes);
};

const printEpisodes = (episodes) => {
    const container = document.querySelector("#episodes-container");
    for (const episode of episodes) {
        const figure = document.createElement("figure");
        figure.innerHTML= `
            <div>
            <h2>${episode.season} - ${episode.episode} - ${episode.name}</h2>
            <img src=${episode.img}/>
            </div>
        `;
        container.appendChild(figure);
    }
};

getEpisodes();

