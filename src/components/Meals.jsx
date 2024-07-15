//todo import components:start
import { useGlobalContext } from "../Context.jsx";
import { BsHandThumbsUp } from "react-icons/bs";
import InProcess from "./InProcess.jsx";
//todo import components:end

export default () => {
    const { meals, loading, selectMeal, addToFavorites,favorites } =
        useGlobalContext();
    if (!meals) {
        return <InProcess text="No Meals With This Name" />;
    }
    return loading === true ? (
        <InProcess text="LOADING..." />
    ) : (
        <section className="section-center">
            {meals.map((singleMeal) => {
                const {
                    idMeal,
                    strMealThumb: image,
                    strMeal: title,
                } = singleMeal;
                //! console.log(singleMeal);
                return (
                    <article key={idMeal} className="single-meal">
                        <img
                            src={image}
                            alt={title}
                            className="image"
                            onClick={() => selectMeal(idMeal,false)}
                        />
                        <footer>
                            <h5>{title}</h5>
                            <button
                                className="like-btn"
                                onClick={() => addToFavorites(idMeal)}
                            >
                                <BsHandThumbsUp />
                            </button>
                        </footer>
                    </article>
                );
            })}
        </section>
    );
};
