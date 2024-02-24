import { useState } from 'react';
import Anime from './Components/Anime';

function App() {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);
    console.log(input);

    const saveInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const getAnime = async () => {
        try {
            const response = await fetch(
                `https://api.jikan.moe/v4/anime?q=${input}`
            );
            const animeData = await response.json();
            setData(animeData.data); // set the data to my state
            console.log(animeData.data);
        } catch (err) {
            console.log('error while fetching the data');
        }
    };

    return (
        <>
            <h1>Anime Search</h1>
            <div className="container">
                <input
                    type="text"
                    onChange={saveInputHandler}
                    placeholder="write your favorite anime"
                />
                <button onClick={getAnime}>Search</button>
            </div>
            {data.length > 0 ? (
                data.map((anime, id) => <Anime anime={anime} id={id} />)
            ) : (
                <div>Data not found</div>
            )}
        </>
    );
}

export default App;
