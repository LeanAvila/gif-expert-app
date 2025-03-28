import { useEffect, useState } from "react";
import { getGifs, GifData } from "../helpers/getGifs";

export const useFetchGifs = ( search: string) => {
    
    const [images, setImages] = useState<GifData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    useEffect( () => {

        const getImages = async () => {
            const gifs = await getGifs( search );
            setImages(gifs);
            setIsLoading(false);
        }

        getImages();

    }, [search]);

    return {
        images: images,
        isLoading: isLoading,
    }
}