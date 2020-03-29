import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link, withRouter } from 'react-router-dom';

// Service
import { login } from '../service';

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

const Form = styled.form`
    width: 100%;
    display: flex;
`;

const Text = styled.p`
    font-size: 20px;
    color: #56585B;
`;

const Hint = styled.span`
    font-size: 10px;
    color: #CB1331;
    margin-top: 4px;
    float: right;
`;

const Errors = styled.div`
    font-size: 12px;
    color: #CB1331;
`;


export const LoginPage = withRouter(({ history }) => {

    const { handleSubmit, register, errors } = useForm();
    const [formSubmitError, setFormSubmitError] = useState('');

    const onFormSubmit = (data) => {
        login(data)
            .then(() => history.push("/profile"))
            .catch(() => {
                setFormSubmitError('Wrong Username or Password. Please, verify and try again.')
            })
    }

    return (
        <Form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="col-left">
                <Title>Profile</Title>
                <div className="control">
                    <label className="label" htmlFor="username">
                        <span>Username</span>
                        <Hint>{errors?.username && 'Field is required'}</Hint>
                    </label>
                    <input className="input-field" name="username" id="username" type="text" ref={register({ required: true })} />
                </div>
                <div className="control">
                    <label className="label" htmlFor="password">
                        <span>Password</span>
                        <Hint>{errors?.password && 'Field is required'}</Hint>
                    </label>
                    <input className="input-field" name="password" id="password" type="password" ref={register({ required: true })} />
                </div>
                {formSubmitError && <Errors>{formSubmitError}</Errors>}
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
})