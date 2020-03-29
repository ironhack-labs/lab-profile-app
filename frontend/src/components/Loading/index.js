import React from 'react';
import styled from 'styled-components';
import loader from '../../assets/images/loding.svg'

const Spinner = styled.div`
    background: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 9999;
`;

export const Loading = () => (
    <Spinner>
        <img src={loader} width="100" alt="Spinner" />
    </Spinner>
);
