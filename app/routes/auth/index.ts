import AuthLayout from "@/layout/auth";
import AuthPage from "@/pages/auth";
import type { IApplicatioRoutes } from "@/types/routes";

const authRoutes: IApplicatioRoutes[] = [
    {
        path: "/auth",
        component: AuthLayout,
        children: [
            {
                path: "login",
                component: AuthPage
            }
        ]
    }
]

export default authRoutes;