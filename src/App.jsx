//todo import components:start
import Favorites from "./components/Favorites";
import Modal from "./components/Modal";
import Meals from "./components/Meals";
import Search from "./components/Search";
//todo import components:end

function App() {
    return ( 
        <main>
            <h1>App</h1>📲
            <Meals />🍕
            {/* <Search />🔎
            <Favorites />🌟
            <Modal />📦 */}
        </main>
    );
}

export default App;
