interface PropsTypes {
    anime: string;
    id: number;
}

export default function Anime({ anime, id }: PropsTypes) {
    return (
        <img key={id} src={anime.images.jpg.image_url} alt={`Image ${id}`} />
    );
}
