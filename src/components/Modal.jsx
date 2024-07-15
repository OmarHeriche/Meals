import { useGlobalContext } from "../Context";

export default () => {
    const { selectedMeal, setShowModal } = useGlobalContext();
    const {
        strMealThumb: image,
        strMeal: title,
        strInstructions: text,
        strSource: source,
    } = selectedMeal;
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <img src={image} alt={title} />
                <div className="infos">
                    <h1>{title}</h1>
                    <p>Cooking Instructions</p>
                    <p>{text}</p>
                    <a href={source} target="_blank">
                        see original
                    </a>
                    <button
                        onClick={() => {
                            setShowModal(false);
                        }}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
