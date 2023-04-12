import {
  CoffeeCardContainer,
  Tags,
  CardFooter,
  AddCart,
  InputAmmount,
} from './styles';

import { ShoppingCart } from 'phosphor-react';
import { InputQuantity } from '../../../../components/InputQuantity';

import { useCart } from '../../../../hooks/useCart';
import { useState } from 'react';

export function CoffeeCard({ coffee }) {
  const [quantity, setQuantity] = useState(1);
  const { addCoffeeToCart } = useCart();

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };
    addCoffeeToCart(coffeeToAdd);
  }

  function handleDecrement() {
    setQuantity((state) => state - 1);
  }

  function handleIncrement() {
    setQuantity((state) => state + 1);
  }

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>

      <CardFooter>
        <div>
          <span>R$</span>
          <strong>9,90</strong>
        </div>

        <AddCart>
          <InputQuantity
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCart>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
