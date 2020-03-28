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
    margin-bottom: 2px;
`;

const Small2 = styled.div`
    max-width: 200px;
    font-size: 12px;
    color: #657865;
    text-align: left;
    margin-top: 160px;
    margin-bottom: 20px;
    margin-left: 30px;
`;

const Form = styled.div`
    width: 100%;
    display: flex;
`;

const Text = styled.p`
    font-size: 20px;
    color: #56585B;
    margin-top: 0;
`;

export const SignupPage = () => {
    return (
        <Form>
            <div className="col-left">
                <Title>Sign up</Title>
                <div className="control">
                    <label className="label" htmlFor="username">Username</label>
                    <input className="input-field" name="username" id="username" type="text" />
                </div>
                <div className="control">
                    <label className="label" htmlFor="password">Password</label>
                    <input className="input-field" name="password" id="password" type="password" />
                </div>
                <div className="control">
                    <label className="label" htmlFor="campus">Campus</label>
                    <input className="input-field" name="campus" id="campus" type="text" />
                </div>
                <div className="control">
                    <label className="label" htmlFor="course">Course</label>
                    <input className="input-field" name="course" id="course" type="text" />
                </div>
            </div>
            <div className="col-right">
                <Title2>Hello!!</Title2>
                <Text>Welcome to IronProfile!</Text>
                <div className="text-center">
                    <Small2>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data!</Small2>
                    <button className="btn btn--secondary" type="submit">Create the Account</button>
                </div>
            </div>
        </Form>
    )
}