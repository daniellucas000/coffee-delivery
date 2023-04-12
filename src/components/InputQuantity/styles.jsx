import styled from 'styled-components';

export const QuantityContainer = styled.div`
  flex: 1;
  background: ${(props) => props.theme['base-button']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;
  padding: 0.5rem;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${(props) => props.theme['base-title']};

    &:focus {
      outline: none;
    }
  }
`;

export const ButtonWrapper = styled.button.attrs({
  type: 'button',
})`
    width: 0.875rem;
    height: 0.875rem;
    border: none;
    background: none;
    color: ${props => props.theme['purple']};
    transition: 0.3s;
    cursor: pointer;

    &:disabled {
        opacity: 0.4;
        cursor: initial;
    }

    &:not(:disabled):hover {
        color: ${props => props.theme['purple-dark']};
    }
`;
