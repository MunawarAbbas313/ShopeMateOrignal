import Navbar from "../Compnents/Navbar";
import Shop from "./Shop";

function Trending(){
    return(
        <>
        
        <h2 className="text-4xl font-semibold text-center mt-4">
            Chose the product of  <span className="text-green-600"> Your Choice</span>
        </h2>
        <Shop/>
        
        </>
    )
}
export default Trending;