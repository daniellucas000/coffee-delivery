import { QuantityContainer, ButtonWrapper } from './styles';
import { Minus, Plus } from 'phosphor-react';

export function InputQuantity({ onDecrement, onIncrement, quantity }) {
  return (
    <QuantityContainer>
      <ButtonWrapper onClick={onDecrement} disabled={quantity <= 1}>
        <Minus size={14} weight="fill" />
      </ButtonWrapper>
      <input type="number" readOnly value={quantity} />
      <ButtonWrapper onClick={onIncrement}>
        <Plus size={14} weight="fill" />
      </ButtonWrapper>
    </QuantityContainer>
  );
}
