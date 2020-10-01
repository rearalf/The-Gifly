import { API_KEY, API_URL } from './settings';

const fromApiResponseToGifs = apiResponse => {
    const { data = [] } = apiResponse;
    return data;
};

export default async function getTrendingTerms(){
    return await fetch(`${API_URL}/trending/searches?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(fromApiResponseToGifs);
}
