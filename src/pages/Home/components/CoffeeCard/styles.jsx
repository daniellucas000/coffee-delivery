import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  display: flex;
  padding: 0px 1.25rem 1.25rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  max-width: 16rem;
  width: 100%;

  @media (max-width: 576px) {
    max-width: 20rem;
  }

  img {
    margin-top: -1.25rem;
  }

  h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    display: flex;
    align-items: flex-end;
    text-align: center;
    color: ${(props) => props.theme['base-subtitle']};
    margin: 16px 0 8px 0;
  }

  p {
    font-family: 'Roboto';
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
    margin-bottom: 33px;
  }
`;

export const Tags = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 4px;

  span {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;
    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 100px;
    padding: 4px 8px;
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 3px;

    span {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.875rem;
      line-height: 130%;
      line-height: 0.75rem;
    }

    strong {
      color: ${(props) => props.theme['base-text']};
      font-size: 1.5rem;
      font-family: 'Baloo 2';
      line-height: 130%;
      font-weight: 800;
    }
  }
`;

export const AddCart = styled.div`
  width: 7.5rem;
  display: flex;
  gap: 8px;

  > button:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    background: ${(props) => props.theme['purple-dark']};
    border-radius: 6px;
    border: 0;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme['white']};
    }
  }
`;

export const InputAmmount = styled.div`
  flex: 1 1 0%;
  background: rgb(230, 229, 229);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;
  padding: 0.5rem;

  button {
    height: 0.875rem;
    border: none;
    background: none;
    color: rgb(128, 71, 248);
    transition: all 0.4s ease 0s;

    &:disabled {
      opacity: 0.4;
    }
  }

  input[type='number'] {
    width: 100%;
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: rgb(39, 34, 33);
  }
`;
