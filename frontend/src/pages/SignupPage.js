import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';

// Service
import { signup } from '../service';

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

const Form = styled.form`
    width: 100%;
    display: flex;
`;

const Text = styled.p`
    font-size: 20px;
    color: #56585B;
    margin-top: 0;
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

export const SignupPage = withRouter(({ history }) => {

    const { handleSubmit, register, errors } = useForm();
    const [formSubmitError, setFormSubmitError] = useState('');

    const onFormSubmit = (data) => {
        signup(data)
            .then(() => history.push("/"))
            .catch(e => setFormSubmitError(e.response.data.status))
    }

    return (
        <Form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="col-left">
                <Title>Sign up</Title>
                <div className="control">
                    <label className="label" htmlFor="username">
                        <span>Username</span>
                        <Hint>{errors?.username && 'Field is required'}</Hint>
                    </label>
                    <input className={`input-field ${errors.username ? 'input-field--error' : ''}`} name="username" id="username" type="text" ref={register({ required: true })} />
                </div>
                <div className="control">
                    <label className="label" htmlFor="password">
                        <span>Password</span>
                        <Hint>{errors?.password && 'Field is required'}</Hint>
                    </label>
                    <input className={`input-field ${errors.password ? 'input-field--error' : ''}`} name="password" id="password" type="password" ref={register({ required: true })} />
                </div>
                <div className="control">
                    <label className="label" htmlFor="campus">
                        <span>Campus</span>
                        <Hint>{errors?.campus && 'Field is required'}</Hint>
                    </label>
                    <select className={`input-field ${errors.campus ? 'input-field--error' : ''}`} name="campus" id="campus" ref={register({ required: true })}>
                        <option value="">Select...</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Miami">Miami</option>
                        <option value="Paris">Paris</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Amsterdam">Amsterdam</option>
                        <option value="México">México</option>
                        <option value="Sao Paulo">Sao Paulo</option>
                        <option value="Lisbon">Lisbon</option>
                    </select>
                </div>
                <div className="control">
                    <label className="label" htmlFor="course">
                        <span>Course</span>
                        <Hint>{errors?.course && 'Field is required'}</Hint>
                    </label>
                    <select className={`input-field ${errors.course ? 'input-field--error' : ''}`} name="course" id="course" ref={register({ required: true })}>
                        <option value="">Select...</option>
                        <option value='WebDev'>WebDev</option>
                        <option value='UX/ UI'>UX/ UI</option>
                        <option value='Data Analytics'>Data Analytics</option>
                    </select>
                </div>
                {formSubmitError && <Errors>{formSubmitError}</Errors>}
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
})