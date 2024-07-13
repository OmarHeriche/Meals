//todo import components:start
import { useGlobalContext } from "../Context.jsx";
//todo import components:end 

export default()=>{
    const context = useGlobalContext();
    console.log(context);
    return<h1>Meals</h1>
}