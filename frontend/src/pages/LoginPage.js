import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h1`
    font-size: 29px;
    color: #517052;
    margin-top: 0;
`;

const Title2 = styled.h2`
    font-size: 22px;
    color: #517052;
    margin-top: 0;
`;

const Small = styled.div`
    max-width: 200px;
    font-size: 12px;
    color: #657865;
    text-align: left;
    margin-top: 60px;
    margin-bottom: 10px;
`;

const Small2 = styled.div`
    max-width: 200px;
    font-size: 12px;
    color: #657865;
    text-align: left;
    margin-top: 160px;
    margin-bottom: 10px;
    margin-left: 30px;
`;

const Form = styled.div`
    width: 100%;
    display: flex;
`;

const Text = styled.p`
    font-size: 20px;
    color: #56585B;
`;

export const LoginPage = () => {
    return (
        <Form>
            <div className="col-left">
                <Title>Profile</Title>

                <div className="control">
                    <label className="label" htmlFor="username">Username</label>
                    <input className="input-field" name="username" id="username" type="text" />
                </div>
                <div className="control">
                    <label className="label" htmlFor="password">Password</label>
                    <input className="input-field" name="password" id="password" type="password" />
                </div>
                <Small>If you don't have an account yet, you can create your account <Link to="/signup">here</Link></Small>
            </div>
            <div className="col-right">
                <Title2>Hello!!</Title2>
                <Text>Awesome to have at IronProfile again!</Text>
                <div className="text-center">
                    <Small2>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data!</Small2>
                    <button className="btn btn--secondary" type="submit">Log in</button>
                </div>
            </div>
        </Form>
    )
}