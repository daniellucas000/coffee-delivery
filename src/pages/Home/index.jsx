import { CoffeeList } from './components/CoffeeList';
import {
  Intro,
  IntroContent,
  IntroTitle,
  IntroItens,
  CoffeContainer,
} from './styles';

import coffeeImg from '../../assets/Imagem.svg';
import cart from '../../assets/cart.svg';
import box from '../../assets/box.svg';
import timer from '../../assets/timer.svg';
import coffee from '../../assets/coffee.svg';


export function Home() {
  return (
    <div>
      <Intro>
        <IntroContent>
          <div>
            <IntroTitle>
              <h2>Encontre o café perfeito para qualquer hora do dia</h2>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </IntroTitle>

            <IntroItens>
              <div>
                <img src={cart} alt="" />
                <p>Compra simples e segura</p>
              </div>

              <div>
                <img src={box} alt="" />
                <p>Embalagem mantém o café intacto</p>
              </div>

              <div>
                <img src={timer} alt="" />
                <p>Entrega rápida e rastreada</p>
              </div>

              <div>
                <img src={coffee} alt="" />
                <p>O café chega fresquinho até você</p>
              </div>
            </IntroItens>
          </div>

          <img src={coffeeImg} alt="" />
        </IntroContent>
      </Intro>

      <CoffeContainer>
        <h2>Nossos cafés</h2>

        <CoffeeList />
      </CoffeContainer>
    </div>
  );
}
