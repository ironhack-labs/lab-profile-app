import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 29px;
    color: #517052;
    margin-top: 0;
`;

const Center = styled.div`
    text-align: center;
    margin-top: 100px;
`;

const Text = styled.p`
    font-size: 20px;
    color: #56585B;
`;

export const HomePage = () => {
    return (
        <div className="col-half">
            <Title>IronProfile</Title>
            <Text>Today we will create an app with authoritaton, adding some cool styles!</Text>
            <Center>
                <Link className="btn btn--primary" to="/signup">Sign up</Link>
                <Link className="btn btn--primary" to="/login">Log in</Link>
            </Center>
        </div>
    )
}