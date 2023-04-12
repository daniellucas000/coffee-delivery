import { InputQuantity } from '../../../../components/InputQuantity';

import { priceFormatter } from '../../../../utils/formatter';
import {
  CoffeeCardCartContainer,
  CoffeeName,
  ActionsContainer,
} from './styles';

import { Trash } from 'phosphor-react';

import { useCart } from '../../../../hooks/useCart';

export function CoffeeCardCart({ coffee }) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleDecrement() {
    changeCartItemQuantity(coffee.id, 'decrement');
  }

  function handleIncrement() {
    changeCartItemQuantity(coffee.id, 'increment');
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  const coffeeTotal = coffee.price * coffee.quantity;

  return (
    <CoffeeCardCartContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <div>
          <div>
            <CoffeeName>{coffee.name}</CoffeeName>
            <ActionsContainer>
              <InputQuantity
                onDecrement={handleDecrement}
                onIncrement={handleIncrement}
                quantity={coffee.quantity}
              />

              <button onClick={handleRemove}>
                <Trash size={16} />
                remover
              </button>
            </ActionsContainer>
          </div>
        </div>
      </div>
      <p>{priceFormatter.format(coffeeTotal)}</p>
    </CoffeeCardCartContainer>
  );
}
