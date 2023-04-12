import styled from 'styled-components';


export const CheckoutContainer = styled.form`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 576px) {
      flex-direction: column;
      padding: 1rem;
    }
`;
