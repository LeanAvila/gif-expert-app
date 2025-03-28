import { Container, ImageList} from "@mui/material";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

type Props = {
    search: string;
}

/** 
 * useEffect(setup, dependencies?)
 * 
 * ? DEPENDENCIAS OPCIONALES:
 * La lista de todos los valores reactivos referenciados dentro 
 * del código de configuración. Los valores reactivos incluyen props, estados, y todas 
 * las variables y funciones declaradas directamente dentro del cuerpo de tu componente.
*/

export const GifGrid = ({ search }: Props) => {

    const { images, isLoading } = useFetchGifs( search );

    return (
        <>
            <Container>
                <h2>{ search }</h2>
                {isLoading && <h4>Cargando...</h4>}
            </Container>
            <Container>
                <ImageList 
                    variant="standard" 
                    sx={{
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        justifyContent: 'center'
                    }}
                >
                    {images.map((image) => (
                        <GifItem {...image} key={image.id}/>
                    ))}
                </ImageList>
            </Container>
        </>
    )
}