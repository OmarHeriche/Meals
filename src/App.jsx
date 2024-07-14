//todo import components:start
import Favorites from "./components/Favorites";
import Modal from "./components/Modal";
import Meals from "./components/Meals";
import Search from "./components/Search";
//todo import components:end

//todo import external libraries:start
import "bootstrap/dist/css/bootstrap.min.css";
//todo import external libraries:end

function App() {
    return ( 
        <main>
            <Search />
            <Meals />
            {/* <Favorites />
            <Modal /> */}
        </main>
    );
}

export default App;
