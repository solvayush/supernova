import type { FC, LazyExoticComponent } from "react";
interface IApplicatioRoutes {
    path: string | string[],
    component: FC | LazyExoticComponent<FC>,
    guard?: FC,
    children?: IApplicatioRoutes[]
}

export type {
    IApplicatioRoutes
}