import React, { createRef } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from 'layout';
import { ReloadToHome, Landing, Tools, CMUseCase } from 'pages';

const routes = [
    {
        path: '/',
        element: <Landing />,
        nodeRef: createRef<HTMLDivElement>(),
    },
    {
        path: '/tools',
        element: <Tools />,
        nodeRef: createRef<HTMLDivElement>(),
    },
    {
        path: '/cosmos-millions',
        element: <CMUseCase />,
        nodeRef: createRef<HTMLDivElement>(),
    },
    {
        path: '/*',
        element: <ReloadToHome />,
        nodeRef: createRef<HTMLDivElement>(),
    },
];

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: routes.map((route) => ({
            index: route.path === '/',
            path: route.path === '/' ? undefined : route.path,
            element: route.element,
        })),
    },
]);

const RootNavigator = (): JSX.Element => {
    return <RouterProvider router={router} />;
};

export { routes };
export default RootNavigator;
