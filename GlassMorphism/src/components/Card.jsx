import { useState, useEffect } from "react";
import "./Card.css";
export default function Card({ title, description }) {
  const [flipped, setFlippled] = useState(false);
  useEffect(() => {
    console.log("card Flipped", flipped);
  }, [flipped]);

  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlippled(!flipped)}
    >
      <h2>{flipped ? "Flipped!" : title}</h2>
      <p>{flipped ? "Click to go back" : description}</p>
    </div>
  );
}
