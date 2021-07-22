import React from "react";
import { Navigate } from "react-router";
import DashboardLayout from "./layout/DashboardLayout";
import MainLayout from "./layout/MainLayout";
import DashboardPage from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import ProjectsPage from "./pages/Projects";
import RegisterPage from "./pages/Register";
import UsersPage from "./pages/Users";

const routes = (isLoggedIn) => [
    {
        path: "app",
        element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
        children: [
            { path: "dashboard", element: <DashboardPage /> },
            { path: "projects", element: <ProjectsPage /> },
            { path: "experts", element: <ProjectsPage /> },
            { path: "employee", element: <ProjectsPage /> },
            { path: "users", element: <UsersPage /> },
        ]
    }, {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "login", element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },
        ]
    }
]

export default routes