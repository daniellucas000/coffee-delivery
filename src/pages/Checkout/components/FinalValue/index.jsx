import { FinalValueContent, ButtonSubmit } from './styles';
import { useCart } from '../../../../hooks/useCart';
import { priceFormatter } from '../../../../utils/formatter';

const deliveryPrice = 3.5;

export function FinalValue() {
  const { cartQuantity, cartItemsTotal } = useCart();
  const cartTotal = deliveryPrice + cartItemsTotal;

  return (
    <FinalValueContent>
      <div>
        <p>Total de itens</p>
        <span>{priceFormatter.format(cartItemsTotal)}</span>
      </div>
      <div>
        <p>Entrega</p>
        <span>{priceFormatter.format(deliveryPrice)}</span>
      </div>
      <div>
        <strong>Total</strong>
        <strong>{priceFormatter.format(cartTotal)}</strong>
      </div>

      <ButtonSubmit disabled={cartQuantity <= 0} type="submit">
        Confirmar Pedido
      </ButtonSubmit>
    </FinalValueContent>
  );
}
