import styled from 'styled-components';

export const SuccessContainer = styled.section`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 576px) {
    padding: 1rem;
  }

  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
    margin-bottom: 4px;
  }

  p {
    font-family: 'Roboto';
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img:last-child {
      width: 100%;
    }

    @media (max-width: 576px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

export const OrderInfo = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 32px;
  max-width: 32.875rem;
  width: 100%;
  height: 270px;
  border-radius: 6px 36px;
  position: relative;
  background: ${(props) => props.theme['white']};

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px;
    background: linear-gradient(
      102.89deg,
      rgb(219, 172, 44) 2.61%,
      rgb(128, 71, 248) 98.76%
    );
  }

  span {
    display: flex;
    gap: 12px;

    strong {
      font-weight: 700;
      font-size: 1rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-text']};
    }

    div p {
      font-family: 'Roboto';
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }
`;
