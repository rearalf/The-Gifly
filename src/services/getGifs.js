const apiKey = 'vqoRUuKQZTxecNdUTSoime1HDB7mTqQB';

const fromApiResponseToGifs = apiResponse => {
    const { data = [] } = apiResponse;
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

export default async function getGifs({ keyword = 'panda' } = {}){
    return await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`,
    )
        .then(res => res.json())
        .then(fromApiResponseToGifs);
}
