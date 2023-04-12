import styled from 'styled-components';

export const CoffeeCardCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${(props) => props.theme['base-input']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;

  > div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    align-self: flex-start;
    font-weight: 700;
  }
`;

export const CoffeeName = styled.p`
  font-family: 'Roboto';
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 8px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 8px;

  > div {
    width: 72px;
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
    gap: 4px;
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    border: 0;
    cursor: pointer;

    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};

    svg {
      color: ${(props) => props.theme['purple']};
    }
  }
`;
