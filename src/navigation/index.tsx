import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from 'layout';
import { DfractUseCase, SkrUseCase, Tools } from 'pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/tools',
                element: <Tools />,
            },
            {
                path: '/skeepers-rewards',
                element: <SkrUseCase />,
            },
            {
                path: '/dfract',
                element: <DfractUseCase />,
            },
        ],
    },
]);

const RootNavigator = (): JSX.Element => {
    return <RouterProvider router={router} />;
};

export default RootNavigator;
