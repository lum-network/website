import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from 'layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/tools',
                element: <div className="text-primary">Tools</div>,
            },
            {
                path: '/skeepers-rewards',
                element: <div>SKR</div>,
            },
            {
                path: '/dfract',
                element: <div>DFRACT</div>,
            },
        ],
    },
]);

const RootNavigator = (): JSX.Element => {
    return <RouterProvider router={router} />;
};

export default RootNavigator;
