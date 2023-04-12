import styled from 'styled-components';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const AddresContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 640px;
  width: 100%;

  > h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    color: ${(props) => props.theme['sub-title']};
  }
`;

export const AddresContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`;

export const AddresHeader = styled.div`
  display: flex;
  gap: 8px;

  > svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`;

export const AddresFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > div:nth-child(1) {
    max-width: 12.5rem;
  }

  > div:nth-child(3) {
    display: flex;
    gap: 12px;

    > div:nth-child(1) {
      max-width: 12.5rem;
    }

    div {
      flex: 1;
    }
  }

  > div:nth-child(4) {
    display: flex;
    gap: 12px;

    > div:nth-child(1) {
      max-width: 12.5rem;
    }

    > div:nth-child(3) {
      max-width: 3.75rem;
    }

    div {
      flex: 1;
    }
  }
`;

export const InputWrapper = styled.div`
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  input {
    width: 100%;
    display: flex;
    padding: 12px;
    align-items: center;
    gap: 4px;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;

    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
  }
`;

export const PaymentForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  margin-top: 12px;
`;

export const PaymentFormHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  > svg {
    color: ${(props) => props.theme['purple']};
  }

  > div {
    span {
      font-family: 'Roboto';
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-size: 0.875rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }

    svg {
      color: ${(props) => props.theme['purple']};
    }
  }
`;

export const PaymentOptionsMethod = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }

  div {
    flex: 1;
    display: flex;
    align-items: center;
  }
`;

export const PaymentOptionsButton = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 12px;

  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: ${(props) => props.theme['hover']};
  }

  &[data-state='checked'] {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme['purple']};
  }

  svg {
    color: ${(props) => props.theme['purple']};
  }
`;
export const SelectedCoffees = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 24px;

  @media (max-width: 576px) {
    align-items: initial;
  }

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
`;
