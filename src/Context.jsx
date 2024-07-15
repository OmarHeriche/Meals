//todo import react elements:start
import React, { useContext, useEffect, useState } from "react";
//todo import react elements:end

//todo intialize my variables:start
import axios from "axios";
const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
//todo intialize my variables:end

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [favorites, setFavorites] = useState(
        localStorage.getItem("favorites")
            ? JSON.parse(localStorage.getItem("favorites"))
            : []
    );

    const selectMeal = (idMeal, favoriteMeal) => {
        let meal;
        if (favoriteMeal) {
            meal = favorites.find((item) => item.idMeal === idMeal);
        }else{
            meal = meals.find((item) => item.idMeal === idMeal);
        }
        setSelectedMeal(meal);
        setShowModal(true);
    };

    const fetchMeals = async (url) => {
        try {
            let { data } = await axios.get(url);
            setMeals(data.meals);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const fetchRandomMeal = () => {
        fetchMeals(randomMealUrl);
    };

    const addToFavorites = (idMeal) => {
        const alreadyFavorite = favorites.find(
            (item) => item.idMeal === idMeal
        );
        if (alreadyFavorite) return;
        const meal = meals.find((item) => item.idMeal === idMeal);
        setFavorites([...favorites, meal]);
        console.log(favorites);
    };
    const removeFromFavorites = (idMeal) => {
        const newFavorites = favorites.filter((item) => item.idMeal !== idMeal);
        setFavorites(newFavorites);
    };

    //! use effects:start
    useEffect(() => {
        fetchMeals(allMealsUrl);
    }, []);

    useEffect(() => {
        if (!searchTerm) {
            return;
        }
        fetchMeals(`${allMealsUrl}${searchTerm}`);
    }, [searchTerm]);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);
    //! use effects:end

    return (
        <AppContext.Provider
            value={{
                meals,
                loading,
                setSearchTerm,
                fetchRandomMeal,
                showModal,
                selectMeal,
                selectedMeal,
                setShowModal,
                addToFavorites,
                removeFromFavorites,
                favorites,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
