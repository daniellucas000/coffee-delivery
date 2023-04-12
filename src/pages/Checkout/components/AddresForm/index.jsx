import {
  AddresContainer,
  AddresContent,
  AddresHeader,
  AddresFormContainer,
  InputWrapper,
  PaymentForm,
  PaymentFormHeader,
  PaymentOptionsMethod,
  PaymentOptionsButton,
} from './styles';

import { MapPinLine } from 'phosphor-react';

import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react';

import { useFormContext } from 'react-hook-form';

export function AddresForm() {
  const { register } = useFormContext();

  return (
    <AddresContainer>
      <h3>Complete seu pedido</h3>
      <AddresContent>
        <AddresHeader>
          <MapPinLine size={22} />
          <div>
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </AddresHeader>

        <AddresFormContainer>
          <InputWrapper>
            <input type="text" placeholder="CEP" {...register('cep')} />
          </InputWrapper>

          <InputWrapper>
            <input type="text" placeholder="Rua" {...register('street')} />
          </InputWrapper>

          <div>
            <InputWrapper>
              <input type="text" placeholder="Número" {...register('number')} />
            </InputWrapper>

            <InputWrapper>
              <input
                type="text"
                placeholder="Complemento"
                {...register('complement')}
              />
            </InputWrapper>
          </div>

          <div>
            <InputWrapper>
              <input
                type="text"
                placeholder="Bairro"
                {...register('district')}
              />
            </InputWrapper>

            <InputWrapper>
              <input type="text" placeholder="Cidade" {...register('city')} />
            </InputWrapper>

            <InputWrapper>
              <input type="text" placeholder="UF" {...register('uf')} />
            </InputWrapper>
          </div>
        </AddresFormContainer>

        <PaymentForm>
          <PaymentFormHeader>
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentFormHeader>

          <PaymentOptionsMethod>
            <PaymentOptionsButton
              value="credito"
              {...register('paymentMethod')}
            >
              <CreditCard size={16} />
              Cartão de crédito
            </PaymentOptionsButton>

            <PaymentOptionsButton value="debito">
              <Bank size={16} />
              cartão de débito
            </PaymentOptionsButton>

            <PaymentOptionsButton value="dinheiro">
              <Money size={16} />
              dinheiro
            </PaymentOptionsButton>
          </PaymentOptionsMethod>
        </PaymentForm>
      </AddresContent>
    </AddresContainer>
  );
}
