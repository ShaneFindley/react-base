import { Grid, MenuItem, MenuList, Skeleton } from "@mui/material";
import { Suspense } from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";

import AxiosPage from "../axios";
import Error404Page from '../error-404-page/error-404-page';
import FormikForm from "../formik";
import HomePage from "../home-page";
import JestPage from "../jest";
import MaterialUIPage from "../material-ui";
import PrismJs from "../prismjs";
import ReactRouter from ".";

export default function Root() {

    return <HashRouter>
        <Grid container>
            <Grid item xs={2}>
                <MenuList>
                    <MenuItem>
                        <Link to={AxiosPage.path}>Axios</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={FormikForm.path}>Formik</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={JestPage.path}>Jest</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={MaterialUIPage.path}>Material UI</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={PrismJs.path}>Prism.js</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={ReactRouter.path}>React Router</Link>
                    </MenuItem>
                </MenuList>
            </Grid>
            <Grid item xs={10}>
                <Suspense fallback={<Skeleton />}>
                    <Routes>
                        <Route
                            path={AxiosPage.path}
                            element={<AxiosPage.LazyRender />}
                        />
                        <Route
                            path={FormikForm.path}
                            element={<FormikForm.LazyRender />}
                        />
                        <Route
                            path={JestPage.path}
                            element={<JestPage.LazyRender />}
                        />
                        <Route
                            path={MaterialUIPage.path}
                            element={<MaterialUIPage.LazyRender />}
                        />
                        <Route
                            path={HomePage.path}
                            element={<HomePage.LazyRender />}
                        />
                        <Route
                            path={PrismJs.path}
                            element={<PrismJs.LazyRender />}
                        />
                        <Route
                            path={ReactRouter.path}
                            element={<ReactRouter.LazyRender />}
                        />
                        <Route element={<Error404Page />} />
                    </Routes>
                </Suspense>
            </Grid>
        </Grid>
    </HashRouter>;
}