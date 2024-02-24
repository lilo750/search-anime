function App() {
    // api link

    return (
        <>
            <h1>Anime Search</h1>
            <div className="container">
                <input
                    type="text"
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                    placeholder="write your favorite anime"
                />
                <button>Search</button>
            </div>
        </>
    );
}

export default App;
