import { ChangeEvent, useState } from 'react';

function App() {
    // api link: https://api.jikan.moe/v4/anime?q=naruto

    /*
      program logic :
      1 - take the input and save it in a state
      2 - when clicking on the button (onClick)
          call the api (spared function)
          show the imgs
     */

    const [input, setInput] = useState<ChangeEvent>();
    console.log(input);

    return (
        <>
            <h1>Anime Search</h1>
            <div className="container">
                <input
                    type="text"
                    onChange={(event) => {
                        setInput(event);
                    }}
                    placeholder="write your favorite anime"
                />
                <button>Search</button>
            </div>
        </>
    );
}

export default App;
