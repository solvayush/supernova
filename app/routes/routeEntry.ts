import type { IApplicatioRoutes } from "@/types/routes";
import authRoutes from "./auth";
const applicationRoutes: IApplicatioRoutes[] = [
    ...authRoutes
];

export default applicationRoutes