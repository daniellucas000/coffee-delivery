import { createContext, useState, useEffect } from 'react';
import { produce } from 'immer';

const COFFEE_ITEMS_STORAGE_KEY = 'coffeeDelivery:cartItems';

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((total, itemAtual) => {
    return total + itemAtual.price * itemAtual.quantity;
  }, 0);

  function addCoffeeToCart(coffee) {
    const coffeExistInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeExistInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeExistInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  function changeCartItemQuantity(cartItemId, type) {
    const newCart = produce(cartItems, (draft) => {
      const coffeExistInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );
      if (coffeExistInCart >= 0) {
        const item = draft[coffeExistInCart];
        draft[coffeExistInCart].quantity =
          type === 'increment' ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  function removeCartItem(cartItemId) {
    const newCart = produce(cartItems, (draft) => {
      const coffeExistInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (coffeExistInCart >= 0) {
        draft.splice(coffeExistInCart, 1);
      }
    });

    setCartItems(newCart);
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
