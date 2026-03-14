import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/Fooditems";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  let foodItems = ["Dal", "Roti"];

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
