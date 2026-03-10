import { useState } from "react";
import styles from "./QuantitySelector.module.css";

interface QuantitySelectorProps {
  initial?: number;
  onChange: (quantity: number) => void;
}

function QuantitySelector({ initial = 1, onChange }: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState<number>(initial);

  const increment = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      onChange(newQuantity);
      return newQuantity;
    });
  };

  const decrement = () => {
    setQuantity((prev) => {
      const newQuantity = prev > 1 ? prev - 1 : 1;
      onChange(newQuantity);
      return newQuantity;
    });
  };

  return (
    <div className={styles.quantity}>
      <button onClick={increment}>-</button>
      <span>{quantity}</span>
      <button onClick={decrement}>+</button>
    </div>
  );
}

export default QuantitySelector;
