import { MainRoutes } from './routes';
import { CartContextProvider } from './contexts/CartContext';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CartContextProvider>
        <MainRoutes />
      </CartContextProvider>
    </ThemeProvider>
  );
}
