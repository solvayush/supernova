import { Outlet } from "react-router"

const AuthLayout = () => {
    return (
        <section>
            I am the auth layout
            <Outlet/>
         </section>
    )
}

export default AuthLayout