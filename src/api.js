const API_KEY = "3ac9cf3432fa24a5d8a37ee5283869a2"

const categories = [
    {
        name: "trending",
        title: "Em Alta",
        path: `/trending/all/day?api_key=${API_KEY}&language=pt-BR`
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`
    },
    {
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`
    },
    {
        name: "comedy",
        title: "Comédias",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`
    },
    {
        name: "romances",
        title: "Romances",
        path: `/trending/all/day?api_key=${API_KEY}&with_genres=10749`
    },
    {
        name: "documentaries",
        title: "Documentarios",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`
    },
];

export const getMovies = async (path) => {
    try {
        let url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export default categories;