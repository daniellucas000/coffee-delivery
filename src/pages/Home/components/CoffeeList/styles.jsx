import styled from 'styled-components';

export const CoffeeListContainer = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  margin-bottom: 9.8rem;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;
