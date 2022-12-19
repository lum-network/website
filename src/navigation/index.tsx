import React, { createRef } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from 'layout';
import { DfractUseCase, ReloadToHome, Landing, SkrUseCase, Tools } from 'pages';

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
        path: '/skeepers-rewards',
        element: <SkrUseCase />,
        nodeRef: createRef<HTMLDivElement>(),
    },
    {
        path: '/dfract',
        element: <DfractUseCase />,
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
