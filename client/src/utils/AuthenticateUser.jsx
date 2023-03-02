import { Navigate } from 'react-router-dom';
import LoggedInUser from './LoggedInUser';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

export function AuthenticateUser({ children, redirectPath = '/' }) {
    
    console.log('AUUUUTH');
    if (!LoggedInUser()) {
        return <Navigate to={redirectPath} replace />;
    } else {
        return <>{children}</>;
    }
}

export function AuthenticateAdmin({ children, redirectPath = '/' }) {
    const { user }  = useContext(UserContext)
    console.log('ADDDDMIN', user.role);
    if (user.role !== 'ADMIN' && user.role !== 'DEVELOPER') {
        console.log('BADADDDD');
        return <Navigate to={redirectPath} replace />;
    } else {
        return <>{children}</>;
    }
}

export function AuthenticateDeveloper({ children, redirectPath = '/' }) {
    const { user }  = useContext(UserContext)
    console.log('ADDDDMIN', user.role);
    if (user.role !== 'DEVELOPER') {
        console.log('BADADDDD');
        return <Navigate to={redirectPath} replace />;
    } else {
        return <>{children}</>;
    }
}