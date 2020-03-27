import styled from "styled-components";
import img from "../../image/oval-bg.png";

const Buttons = styled.div`
  background-image: url(${img});
  border-radius: 7px;
  box-shadow: 2px 5px #9e9e9e;
  box-sizing: border-box;
  color: #628165;
  font-family: Arial, Helvetica, sans-serif;
  height: 450px;
  padding: 40px;
  width: 711px;
  display: inline-block;
  margin-top: 5rem;

  .button {
    background: #dbebda;
    border-radius: 5px;
    color: #333;
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
      background: #838486;
      color: #fff;
    }
  }
  h2 {
    font-size: 2rem;
    width: 6rem;
    margin-bottom: 3rem;
    margin-top: 2rem;
  }

  h4 {
    font-size: 1.3rem;
    width: 20rem;
    margin-bottom: 3rem;
    text-align: left;
    color: #838486;
  }
`;

export default Buttons;
