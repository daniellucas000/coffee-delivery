import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import { HeaderContainer } from './styles';
import logoimg from '../../assets/Logo.svg';

import {useCart} from '../../hooks/useCart';
export function Header() {
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <span>
        <NavLink to="/">
          <img src={logoimg} alt="" />
        </NavLink>

        <div>
          <button>
            <MapPin size={22} /> Jequié, BA
          </button>

          <NavLink to="/checkout">
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <ShoppingCart size={20} weight="fill" />
          </NavLink>
        </div>
      </span>
    </HeaderContainer>
  );
}
