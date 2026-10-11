import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  background: rgba(0, 0, 0, 0.75);
  z-index: 99999;
  font-family: 'Montserrat', sans-serif;

  & > div {
    background: rgba(10, 10, 10, 0.95);
    border: 1px solid rgba(230, 205, 0, 0.5);
    border-radius: 5px;
    padding: 2rem 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
    max-width: 420px;
    text-align: center;
  }

  p {
    font-size: 1.1rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: 'Montserrat', sans-serif;
  }

  span {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.4;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.8rem;
  width: 100%;
  justify-content: center;

  button {
    min-width: 110px;
    padding: 10px 18px;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    /* Accept (first) */
    &:first-child {
      background-color: #e6cd00;
      border: 1px solid #e6cd00;
      color: #111111;

      &:hover {
        background-color: #ffea1e;
        border-color: #ffea1e;
      }
    }

    /* Decline / Cancel (last) */
    &:last-child {
      background-color: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #ffffff;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.4);
      }
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;
