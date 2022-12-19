import React from 'react';
import { Navigate } from 'react-router-dom';

const ReloadToHome = (): JSX.Element => {
    return <Navigate to="/" replace />;
};

export default ReloadToHome;
