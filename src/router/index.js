import React from "react"
import { Navigate } from "react-router-dom"

//页面的配置，懒加载模式
const DBinstance = React.lazy(() => import("@/view/db/db-instance"))
// const Detail = React.lazy(() => import("@/views/detail"))
// const More = React.lazy(() => import("@/views/more"))

const routes = [
    {
        path: "/",
        element: <Navigate to={"/db/instance"}/>
    },
    {
        path: "/db/instance",
        element: <DBinstance/>
    }
]

export default routes