import styled from 'styled-components';

export const Intro = styled.section`
  width: 100%;
  height: 34rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background: url(src/assets/intro-background.svg) center center / cover
      no-repeat,
    linear-gradient(
      0deg,
      rgb(255, 255, 255) 0%,
      rgba(250, 250, 250, 0.2) 50%,
      rgb(250, 250, 250) 100%
    );

  @media (max-width: 576px) {
    height: 54rem;
  }
`;

export const IntroContent = styled.div`
  display: flex;
  gap: 56px;
  max-width: 70rem;
  width: 100%;

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const IntroTitle = styled.div`
  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    max-width: 588px;
    margin-bottom: 16px;

    @media (max-width: 576px) {
      font-size: 2.7rem;
    }
  }

  p {
    font-family: 'Roboto';
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const IntroItens = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 0.75rem;
    width: 100%;

    p {
      font-family: 'Roboto';
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};

      @media (max-width: 576px) {
        font-size: 0.813rem;
      }
    }
  }
`;

export const CoffeContainer = styled.section`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 576px) {
    padding: 1rem;
  }

  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 34px;

    @media (max-width: 576px) {
      display: block;
      text-align: center;
    }
  }
`;
