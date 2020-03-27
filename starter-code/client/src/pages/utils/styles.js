import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  color: #f7fff7;
  padding: 10px;
`;

export const Right = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  background-color: #4ecdc4;
  border-radius: 10px;
  color: #f7fff7;
  padding: 10px;
`;

export const Form = styled.form`
  margin-top: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

export const LinkUpdated = styled(Link)`
  text-decoration: none;
  color: #f7fff7;
  width: 100%;
`;

export const LinkUpdated2 = styled(Link)`
  text-decoration: underline;
  color: #ffe66d;
  width: 100%;
  &:hover {
    color: #ee6055;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  align-self: center;
  margin: 20px 0 0 0;
`;

export const Button = styled.button`
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  align-self: center;
  margin: 10px 0;
  color: #f7fff7;
  border-color: #4ecdc4;
  background-color: #4ecdc4;
  border-style: solid;
`;

export const Button2 = styled.button`
  margin-top: 20px;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  align-self: center;
  color: #1a535c;
  border-color: #ffe66d;
  background-color: #ffe66d;
  border-style: solid;
  &:hover {
    color: #ffe66d;
    border-color: #4ecdc4;
    background-color: #1a535c;
  }
`;

export const Button3 = styled.button`
  margin-top: 20px;
  border-radius: 5px;
  padding: 5px;
  width: 100%;
  align-self: flex-start;
  color: #1a535c;
  border-color: #ee6055;
  background-color: #ee6055;
  border-style: solid;
  &:hover {
    color: #ee6055;
    border-color: #4ecdc4;
    background-color: #1a535c;
  }
`;

export const Title = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
  margin: 10px 0;
`;

export const SubTitle = styled.p`
  font-size: 2rem;
  font-weight: 400;
  margin: 5px 0;
`;

export const Text = styled.p`
  width: 80%;
  font-size: 1.5rem;
  margin: 20px 0;
  font-weight: 300;
`;

export const TextMinor = styled.p`
  width: 100%;
  font-size: 0.9rem;
  margin: 10px 0;
  font-weight: 300;
`;

export const TextContainer = styled.div`
  margin: 10px 0;
`;

export const ImageContainer = styled.div`
  width: 80%;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 50%;
`;
