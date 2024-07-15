//todo import components:start
import { useGlobalContext } from "../Context.jsx";
//todo import components:end

export default () => {
    const { favorites, removeFromFavorites, selectMeal } = useGlobalContext();
    return (
        <div className="favorites">
            <h4>Favorites</h4>
            <div className="favorites-content">
                {favorites.map((meal) => {
                    const { idMeal, strMealThumb: image } = meal;
                    return (
                        <article key={idMeal} className="single-fav-meal">
                            <img
                                src={image}
                                className="image"
                                onClick={() => selectMeal(idMeal,true)}
                            />
                            <footer>
                                <button
                                    onClick={() => removeFromFavorites(idMeal)}
                                >
                                    Remove
                                </button>
                            </footer>
                        </article>
                    );
                })}
            </div>
        </div>
    );
};
