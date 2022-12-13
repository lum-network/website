import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from 'layout';
import { DfractUseCase, ReloadToHome, Landing, SkrUseCase, Tools } from 'pages';

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
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
            {
                path: '/*',
                element: <ReloadToHome />,
            },
        ],
    },
]);

const RootNavigator = (): JSX.Element => {
    return <RouterProvider router={router} />;
};

export default RootNavigator;
