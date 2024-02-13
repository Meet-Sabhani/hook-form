import styled from "styled-components";

export const FormStyle = styled.div`
  display: flex;
  height: 100vh;
  background-color: #000;
  color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 10px;
    label {
      font-size: 2rem;
    }
    button {
      background-color: green;
      padding: 10px 15px;
      border: none;
      border-radius: 10px;

      &:active {
        scale: 0.93;
      }
    }
  }
`;
