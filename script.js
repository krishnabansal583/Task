

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://repo-tech2edge.github.io/tasks/sample.json')
        .then(response => response.json())
        .then(data => {
            const carouselInner = document.getElementById('carousel-inner');
            const episodes = data.episodes;
            const episodesPerSlide = 5; // Number of episodes to show per slide

            // Split episodes into groups for each slide
            for (let i = 0; i < episodes.length; i += episodesPerSlide) {
                const slideEpisodes = episodes.slice(i, i + episodesPerSlide);

                const carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                if (i === 0) carouselItem.classList.add('active'); // Activate the first slide

                const episodeRow = document.createElement('div');
                episodeRow.classList.add('d-flex', 'justify-content-start', 'w-100', 'flex-wrap');

                slideEpisodes.forEach(episode => {
                    const episodeCard = document.createElement('div');
                    episodeCard.classList.add('episode-card');
                    episodeCard.style.flex = `0 0 calc(100% / ${episodesPerSlide} - 10px)`;
                    episodeCard.innerHTML = `
                        <img src="${episode.img}" alt="${episode.title}">
                        <div class="play-icon"><i class="fas fa-play"></i></div>
                        <div class="episode-info">
                            <h5>${episode.title}</h5>
                            <p>Episode ${episode.id}</p>
                        </div>
                    `;
                    episodeRow.appendChild(episodeCard);
                });

                carouselItem.appendChild(episodeRow);
                carouselInner.appendChild(carouselItem);
            }
        });
});
