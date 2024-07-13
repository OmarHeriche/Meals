//todo import react elements:start
import React, { useContext, useEffect } from "react";
//todo import react elements:end

//todo intialize my variables:start
import axios, { all } from "axios";
const AppContext = React.createContext();
const allMealsUrl =
    "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
const randomMealUrl =
    "https://www.themealdb.com/api/json/v1/1/random.php";
//todo intialize my variables:end

const AppProvider = ({ children }) => {
    const fetchMeals = async (url) => {
        try {
            let {data} = await axios.get(url);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchMeals(allMealsUrl);
    }, []);
    return (
        <AppContext.Provider value={{ name: "omar", age: "21", skill: "Js" }}>
            {children}
        </AppContext.Provider>
    );
};
const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
