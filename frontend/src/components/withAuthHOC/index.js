import React, { useState, useEffect } from 'react';
import { UserContext } from '../../context/user';
import { Loading } from '../Loading';

// Service
import { whoami } from '../../service';

export const withAuth = Component => () => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        whoami()
            .then(res => setUser(res.data))
            .catch(e => console.error('No user logged in...'))
            .finally(() => setLoading(false));
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loading }}>
            {loading && <Loading />}
            <Component />
        </UserContext.Provider>
    );
};
