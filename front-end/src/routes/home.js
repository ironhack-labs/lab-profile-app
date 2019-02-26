import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="container">
        <Link to="/signup" style={{ textDecoration: "none" }}>
            <button>Signup</button>
        </Link>
    </div>
);