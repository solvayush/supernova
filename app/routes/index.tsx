import { BrowserRouter, Route, Routes } from "react-router";
import { Fragment, Suspense } from "react";
import applicationRoutes from "./routeEntry";
import type { IApplicatioRoutes } from "@/types/routes";

const getApplicationRoutes = (routes: IApplicatioRoutes[]) => {
    if (!routes || routes.length === 0) return null;

    return routes.map((route) => {
        const { path, component: Component, guard, children } = route;
        const Gaurd = guard || Fragment;

        const isPathArray = Array.isArray(path);
        if (isPathArray && path.length > 0) {
            return path.map((p: string) => {
                return <Route
                    key={p}
                    path={p}
                    element={
                        <Suspense>
                            <Gaurd>
                                <Component />
                            </Gaurd>
                        </Suspense>
                    }
                >
                    {children && children.length > 0 && getApplicationRoutes(children)}

                </Route>
            })
        }
        return (
            <Route
                key={path as string}
                path={path as string}
                element={
                    <Suspense>
                        <Gaurd>
                            <Component />
                        </Gaurd>
                    </Suspense>
                }
            >
                {children && children.length > 0 && getApplicationRoutes(children)}
            </Route>
        )
    })
}

export default function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {getApplicationRoutes(applicationRoutes)}
            </Routes>
        </BrowserRouter>
    )
}
