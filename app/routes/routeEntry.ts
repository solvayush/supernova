import type { IApplicatioRoutes } from "@/types/routes";
import authRoutes from "./auth";
import { lazy } from "react";
const notFound = lazy(() => import("@/pages/404"));

const applicationRoutes: IApplicatioRoutes[] = [
    ...authRoutes,
    {
        path: "*",
        component: notFound,
    }
];

export default applicationRoutes