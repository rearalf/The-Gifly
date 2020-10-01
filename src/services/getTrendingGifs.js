import { API_URL, API_KEY } from 'services/settings';

const fromApiResponseToGifs = apiRes => {
    const { data } = apiRes;
    if (Array.isArray(data)) {
        const gifs = data.map(res => {
            const { images, title, id } = res;
            const { url } = images.original;
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

export default async function getTrendingGifs(){
    return await fetch(`${API_URL}/gifs/trending?api_key=${API_KEY}&limit=25`)
        .then(res => res.json())
        .then(fromApiResponseToGifs);
}
