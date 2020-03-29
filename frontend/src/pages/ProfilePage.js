import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

// Service
import { logout } from '../service';

const Title = styled.h1`
    font-size: 29px;
    color: #517052;
    margin-top: 0;
`;

const ImgWrapper = styled.div`
    background: #DADADA;
    width: 180px;
    height: 180px;
    margin: auto;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 20px;
`;

const Small = styled.div`
    max-width: 200px;
    font-size: 12px;
    color: #657865;
    text-align: left;
    margin-top: 60px;
`;

const Text = styled.p`
    font-size: 20px;
    color: #56585B;
`;

export const ProfilePage = withRouter(({ history }) => {

    const handleLogOut = () => {
        logout().then(() => history.push('/'))
    }

    return (
        <>
            <div className="col-left">
                <Title>Profile</Title>
                <dl>
                    <dt>Username</dt>
                    <dd>Harry Potter</dd>
                    <dt>Campus</dt>
                    <dd>Sao Paulo</dd>
                    <dt>Course</dt>
                    <dd>Web Development</dd>
                </dl>
                <div className="text-center">
                    <button onClick={handleLogOut} className="btn-logout">Logout</button>
                </div>
            </div>
            <div className="col-right text-center">
                <ImgWrapper></ImgWrapper>
                <button className="btn btn--secondary">Edit Photo</button>
                <Small>The user is able to upload a new profile photo, using NodeJS and Multer uploader.</Small>
            </div>
        </>
    )
});