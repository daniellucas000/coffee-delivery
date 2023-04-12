import { SuccessContainer, OrderInfo } from './styles';
import motoboy from '../../assets/motoboy.svg';

import location from '../../assets/location.svg';
import timer from '../../assets/timer.svg';
import money from '../../assets/money.svg';

import { useLocation } from 'react-router-dom';

export function Success() {
  const { state } = useLocation();
  console.log(state);
  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <OrderInfo>
          <span>
            <img src={location} alt="" />
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.district} - {state.city}, {state.uf}
              </p>
            </div>
          </span>

          <span>
            <img src={timer} alt="" />
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </span>

          <span>
            <img src={money} alt="" />
            <div>
              <p>Pagamento na entrega</p>
              <strong>cartão de credito</strong>
            </div>
          </span>
        </OrderInfo>

        <img src={motoboy} alt="" />
      </div>
    </SuccessContainer>
  );
}
