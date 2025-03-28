import { ImageListItem, ImageListItemBar } from "@mui/material"

type Props = {
    // id: string;
    title: string;
    url: string;
}

export const GifItem = ({ url, title}: Props) => {
  return (
    <>
        <ImageListItem sx={{ height: 200, width: 200}}>
            <img
                src={url}
                alt={title}
                loading="lazy"
            />
            <ImageListItemBar
                title={title}
            />
        </ImageListItem>
    </>
  )
}
