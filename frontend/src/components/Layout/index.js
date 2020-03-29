import React from 'react';
import styled from 'styled-components';
import bg from '../../assets/images/oval-bg.png'

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Main = styled.main`
    background: url(${bg}) no-repeat;
    background-size: cover;
    display: flex;
    width: 717px;
    height: 458px;
    padding: 50px 40px;
`;

export const Layout = ({ children }) => {
    return (
        <Wrapper>
            <Main>
                {children}
            </Main>
        </Wrapper>
    )
}