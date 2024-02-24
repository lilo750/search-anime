interface PropsTypes {
    anime: string;
    id: number;
}

export default function Anime({ anime, id }) {
    return (
        <img key={id} src={anime.images.jpg.image_url} alt={`Image ${id}`} />
    );
}
