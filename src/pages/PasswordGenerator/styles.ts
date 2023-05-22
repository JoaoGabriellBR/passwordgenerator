import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 3rem;
  }
`;

export const DivText = styled.div`
  width: 40%;
  margin-left: 2rem;

  @media (max-width: 1000px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 2rem;
  }

  p {
    font-weight: 600;
    padding: 0;
    margin: 0;
    color: #fff;

    @media (max-width: 1000px) {
      text-align: center;
    }
  }

  h1 {
    font-weight: 600;
    font-size: 3rem;
    padding: 0;
    margin: 0;
    color: #fff;

    @media (max-width: 1000px) {
      text-align: center;
    }
  }
`;

export const DivGenerator = styled.div`
  width: 60%;
  margin-right: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const Generator = styled.div`
  width: 35rem;
  max-width: 90%;
  height: 22rem;
  border-radius: 0.5rem;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DivPassword = styled.div`
  width: 80%;
  max-width: 80%;
  height: 4rem;
  background-color: #eee;
  color: #242424;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  p {
    font-weight: 900;
    font-size: 1.2rem;
  }

  .div-copy {
    display: flex;
    flex-direction: row;
  }

  .password-power {
    font-size: 0.8rem;
    margin-right: 1rem;
  }
`;

export const DivCharacter = styled.div`
width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  width: 80%;
  max-width: 80%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 3rem;
  background-color: #584AD3;
  color: #fff;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
`;
