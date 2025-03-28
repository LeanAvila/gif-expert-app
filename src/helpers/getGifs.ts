import { GiphyData } from "./GiphyData";

export interface GifData {
    id: string;
    url: string;
    title: string;
}

export const getGifs = async(search: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=cvNXCkb8Ul9LSF5iePbXRfyIoTfwiejr&limit=10&q=${search}`    
    const resp = await fetch(url);
    const data: GiphyData = await resp.json();
    
    const gifs: GifData[] = data.data.map( gif => ({
        id: gif.id,
        url: gif.images.downsized_medium.url,
        title: gif.title,
    }))

    return gifs;
}