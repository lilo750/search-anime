import { ChangeEvent, useEffect, useState } from 'react';

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
    console.log(input);

    const saveInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    useEffect(() => {
        const getAnime = async () => {
            try {
                const response = await fetch(
                    `https://api.jikan.moe/v4/anime?q=${input}`
                );
                const animeImg = await response.json();
                console.log(animeImg);
            } catch (err) {
                console.log('error while fetching the data');
            }
        };
    }, [input]);

    return (
        <>
            <h1>Anime Search</h1>
            <div className="container">
                <input
                    type="text"
                    onChange={saveInputHandler}
                    placeholder="write your favorite anime"
                />
                <button
                    onClick={(e) => {
                        console.log(e.target);
                    }}
                >
                    Search
                </button>
            </div>
        </>
    );
}

export default App;
