import { createBrowserRouter } from "react-router";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../layouts/MainLayout";
import ToDoListPage from "../pages/ToDoListPage";
import ProtectRoute from "../router/ProtectRoute"
import { getAllList } from "../api/toDoListApi";


const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {   index: true, 
                Component: LoginPage
            },
            {
                Component: ProtectRoute,
                children: [
                    {
                        path: '/ToDoList',
                        Component: ToDoListPage,
                        loader: getAllList
                    }
                ]
            }
        ]
    }
])

export default router