import { CoffeeCardCart } from '../CoffeeCardCart';
import { FinalValue } from '../FinalValue';

import { SelectedCoffeesContainer, SelectedCoffeesContent } from './styled';

import { useCart } from '../../../../hooks/useCart';

export function SelectedCoffees() {
  const { cartItems } = useCart();

  return (
    <SelectedCoffeesContainer>
      <h3>Cafés selecionados</h3>

      <SelectedCoffeesContent>
        {cartItems.map((cartItem) => (
          <CoffeeCardCart key={cartItem.id} coffee={cartItem} />
        ))}
        <FinalValue />
      </SelectedCoffeesContent>
    </SelectedCoffeesContainer>
  );
}
