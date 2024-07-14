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
    const fetchRandomMeal = ()=>{
        fetchMeals(randomMealUrl);
    }
    useEffect(() => {
        fetchMeals(allMealsUrl);
    }, []);
    useEffect(() => {
        if (!searchTerm) {
            return;
        }
        fetchMeals(`${allMealsUrl}${searchTerm}`);
    }, [searchTerm]);
    return (
        <AppContext.Provider value={{ meals, loading,setSearchTerm,fetchRandomMeal }}>
            {children}
        </AppContext.Provider>
    );
};
const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
