const API_KEY = "a8f9ae35741b1d0dc467e2bb1cab41d5";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export async function getHomeList() {
  return [
    {
      slug: "originals",
      title: "Netflix Originals",
      items: await basicFetch(
        `/discover/tv?with_network=213&api_key=${API_KEY}`
      ),
    },
    {
      slug: "trending",
      title: "Recommended for you",
      items: await basicFetch(`/trending/all/week?api_key=${API_KEY}`),
    },
    {
      slug: "toprated",
      title: "Top-Rated",
      items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}`),
    },
    {
      slug: "action",
      title: "Action",
      items: await basicFetch(
        `/discover/movie?with_genres=28&api_key=${API_KEY}`
      ),
    },
    {
      slug: "comedy",
      title: "Comedy",
      items: await basicFetch(
        `/discover/movie?with_genres=35&api_key=${API_KEY}`
      ),
    },
    {
      slug: "horror",
      title: "Horror",
      items: await basicFetch(
        `/discover/movie?with_genres=27&api_key=${API_KEY}`
      ),
    },
    {
      slug: "romance",
      title: "Romance",
      items: await basicFetch(
        `/discover/movie?with_genres=10749&api_key=${API_KEY}`
      ),
    },
    {
      slug: "documentary",
      title: "Documentary",
      items: await basicFetch(
        `/discover/movie?with_genres=99&api_key=${API_KEY}`
      ),
    },
  ];
}
export async function getMovieInfo(movieId, type) {
  let info = {};

  if (movieId) {
    if (type === "movie") {
    }
    switch (type) {
      case "movie":
        info = await basicFetch(`/movie/${movieId}?api_key=${API_KEY}`);
        return info;
      case "tv":
        info = await basicFetch(`/tv/${movieId}?api_key=${API_KEY}`);
        return info;
      default:
        info = null;
        return info;
    }
  }
}
