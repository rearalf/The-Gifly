import { API_KEY, API_URL } from './settings';

const fromApiResponseToGifs = apiResponse => {
    const { data } = apiResponse;
    if (Array.isArray(data)) {
        const gifs = data.map(res => {
            const { images, title, id } = res;
            const { url } = images.downsized_medium;
            return {
                title,
                id,
                url,
            };
        });
        return gifs;
    }
    return [];
};

export default async function getGifs(
    { keyword = 'panda', limit = 15, rating = 'g', page = 0 } = {},
){
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page *
        limit}&rating=${rating}&lang=en`;

    return await fetch(apiURL).then(res => res.json()).then(fromApiResponseToGifs);
}
