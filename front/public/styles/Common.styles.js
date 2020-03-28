import styled from "styled-components";
import banner from "../images/oval-bg.png";

export const Container = styled.div`
  align-items: center;
  background: #dbebda;
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const Content = styled.div`
  background: #fff url(${banner}) no-repeat center;
  border-radius: 7px;
  box-shadow: 2px 2px 7px 5px #9e9e9e;
  box-sizing: border-box;
  color: #628165;
  font-family: Arial, Helvetica, sans-serif;
  height: 450px;
  padding: 40px;
  width: 711px;
  h1 {
    font-size: 34px;
    font-weight: 400;
    line-height: 1;
    margin: 0 0 20px;
    padding: 0;
  }
  p {
    display: inline-block;
    font-size: 22px;
    line-height: 1.6;
    margin: 0;
    padding: 0 0 10px;
    font-weight: 100;
    width: 50%;
    strong {
      font-weight: 700;
    }
  }
  .button {
    background: #dbebda;
    border-radius: 5px;
    color: #333;
    cursor: pointer;
    display: block;
    font-size: 16px;
    line-height: 1;
    margin-top: 20px;
    max-width: 160px;
    text-align: center;
    padding: 10px 20px;
    text-decoration: none;
    transition: all ease 2000;
    &:hover {
      transition: all ease 2000;
      background: #628165;
      color: #fff;
    }
  }
`;

export const Col2 = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  > div {
    width: 40%;
    &.right p {
      padding: 25px 0 0px;
    }
    h2 {
      color: #000;
      font-size: 20px;
      line-height: 1.6;
      margin: 0;
      span {
        display: block;
        color: #628165;
      }
    }
    p {
      width: 100%;
      font-size: 15px;
      line-height: 1.4;
    }
    .box-img {
      border-radius: 50%;
      display: block;
      max-width: 100%;
      overflow: hidden;
      width: 100%;
      img {
        display: block;
        max-width: 100%;
        width: 100%;
      }
    }
    .box-input {
      position: relative;
      width: 100%;
    }
  }
`;
