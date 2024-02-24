import { ChangeEvent, useState } from 'react';

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

    // const clickHandler = () => {

    // }

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
                        console.log(e.target.value);
                    }}
                >
                    Search
                </button>
            </div>
        </>
    );
}

export default App;
