import styled from 'styled-components';

export const FinalValueContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }

    span {
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }

    strong {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 130%;
      color: ${(props) => props.theme['subtitle']};
    }
  }
`;

export const ButtonSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 7.313rem;
  border: 0;

  background: #dbac2c;
  border-radius: 6px;
  font-stretch: 100;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;
  background: ${(props) => props.theme['yellow']};
  color: ${(props) => props.theme['white']};
  transition: 0.4s;
  cursor: pointer;
  margin-top: 0.75rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`;
