import type { FC } from "react";

interface IApplicatioRoutes {
    path: string | string[],
    component: FC,
    guard?: FC,
    children?: IApplicatioRoutes[]
}

export type {
    IApplicatioRoutes
}