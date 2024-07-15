//todo import components:start
import Favorites from "./components/Favorites";
import Modal from "./components/Modal";
import Meals from "./components/Meals";
import Search from "./components/Search";
import { useGlobalContext } from "./Context";
//todo import components:end

//todo import external libraries:start
import "bootstrap/dist/css/bootstrap.min.css";
//todo import external libraries:end

function App() {
    const { showModal, favorites } = useGlobalContext();
    return (
        <main>
            <Search />
            {favorites.length>0&&<Favorites />}
            <Meals />
            {showModal && <Modal />}
        </main>
    );
}

export default App;
