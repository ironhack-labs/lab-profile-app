import React from 'react';
import { useUser, useUserIsLoading } from '../../context/user';
import { Redirect } from 'react-router-dom';

export const withProtected = (Component, { redirect = true, redirectTo = '/login' } = {}) => props => {
    const user = useUser();
    const isUserLoading = useUserIsLoading();

    if (user) {
        return <Component />;
    } else {
        if (isUserLoading) return <></>;
        else {
            if (redirect) {
                return <Redirect to={redirectTo} />;
            } else {
                return <></>;
            }
        }
    }
};
