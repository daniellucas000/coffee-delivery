import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['base-background']};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;

  > span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    max-width: 70rem;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 576px) {
      padding: 1.1rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 12px;

    button {
      display: flex;
      align-items: center;
      gap: 7px;
      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};
      border-radius: 6px;
      padding: 8px;
      border: 0;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;

      svg {
        color: ${(props) => props.theme['purple']};
      }
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 9px 10px;
      background: ${(props) => props.theme['yellow-light']};
      border-radius: 6px;
      position: relative;

      span {
        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        top: calc(-1.25rem / 2);
        right: calc(-1.25rem / 2);
        color: ${(props) => props.theme['white']};

        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: 700;
        background: ${(props) => props.theme['yellow-dark']};
      }

      svg {
        color: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`;
