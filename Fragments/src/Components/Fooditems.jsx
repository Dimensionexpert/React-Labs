import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((food) => (
        <Item key={food} foodItem={food}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
