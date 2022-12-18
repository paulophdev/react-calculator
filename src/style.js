import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 400px;
  width: 100%;
  height: 400px;
`;

export const Calculator = styled.div`
  border: 1px solid;

  .head {
    height: 80px;
    border-bottom: 1px solid;
    padding: 0 10px;
    display: flex;
    flex-direction: column;

    .input-min,
    .input-max {
      border: none;
      outline: 0;
      background-color: transparent;
    }

    .input-min {
      height: 40%;
      font-size: 0.7em;
      color: #666;
    }

    .input-max {
      height: 60%;
      font-size: 2em;
    }
  }

  .body {
    height: 320px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const Button = styled.div`
  width: 95px;
  height: 75px;
  border: 1px solid;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  :active {
    animation: clickEffect 3s linear;
  }

  @keyframes clickEffect {
    0% {
      background-color: #efefef;
    }
    100% {
      background-color: #fff;
    }
  }
`;
