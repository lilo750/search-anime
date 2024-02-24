import { useEffect, useState } from 'react';

function App() {
    // api link: https://api.jikan.moe/v4/anime?q=naruto

    /*
      program logic :
      1 - take the input and save it in a state // done
      2 - when clicking on the button (onClick)
          call the api (spared function)
          show the imgs
     */

    const [input, setInput] = useState<string>('');
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
            {data.map((img, id) => (
                <img src=`${img}/images/jpg/image_url` />;
            ))}
        </>
    );
}

export default App;
