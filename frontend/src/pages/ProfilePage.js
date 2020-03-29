import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

// HOC
import { withProtected } from '../components/withProtectedHOC';

// Context
import { useUser, useUserSetter } from "../context/user";

// Service
import { edit, logout } from '../service';

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

export const ProfilePage = withProtected(() => {

    const [avatar, setAvatar] = useState({});

    const user = useUser();
    const setUser = useUserSetter();

    const handleLogOut = () => {
        logout();
        setUser('');
    }

    const onFileChangeHandler = e => {
        setAvatar(e.target.files[0]);
    }

    const formSubmitHandler = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('avatar', avatar);
        edit(formData);
    }

    return (
        user ?
            <>
                <div className="col-left">
                    <Title>Profile</Title>
                    <dl>
                        <dt>Username</dt>
                        <dd>{user.username}</dd>
                        <dt>Campus</dt>
                        <dd>{user.campus}</dd>
                        <dt>Course</dt>
                        <dd>{user.course}</dd>
                    </dl>
                    <div className="text-center">
                        <button onClick={handleLogOut} className="btn-logout">Logout</button>
                    </div>
                </div>
                <div className="col-right text-center">
                    <form onSubmit={formSubmitHandler}>
                        <label>
                            <ImgWrapper>
                                {/* {user.image && <img src={`http://localhost:3008/${user.image?.path}.jpg`} alt="" />} */}
                            </ImgWrapper>
                            <input className="hidden" type="file" name="file" onChange={onFileChangeHandler} />
                        </label>
                        <button className="btn btn--secondary" type="submit">Edit Photo</button>
                    </form>
                    <Small>The user is able to upload a new profile photo, using NodeJS and Multer uploader.</Small>
                </div>
            </> :
            <Redirect to='/' />
    )
});