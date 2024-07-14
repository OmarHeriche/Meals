import { useState } from "react";
import { useGlobalContext } from "../Context.jsx";

export default () => {
    const { setSearchTerm,fetchRandomMeal} = useGlobalContext();
    const [text, setText] = useState("");
    const handleChange = (event) => {
        setText(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault(); //!don't load for every subbmit=>the post req is forbidden my son 😃.
        if (text) {
            setSearchTerm(text);
            setText("");
        }
    };
    const handleRandomMeal=()=>{
        setSearchTerm("");
        setText("");
        fetchRandomMeal();
    }
    return (
        <header className="search-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for meals..."
                    value={text}
                    onChange={handleChange}
                />
                <button className="btn" type="submit">
                    Search
                </button>
                <button className="random-btn" type="button" 
                onClick={handleRandomMeal}
                >
                    Surprise me!
                </button>
            </form>
        </header>
    );
};
