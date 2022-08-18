
import { Button, Container, Typography } from "@mui/material";
import Code from "../common/code-block/code";
import Heading from "../common/heading/heading";

import image from './logo.png';
export default function ReactRouterPage() {

    return <Container style={{ paddingTop: 10 }}>
        <Heading
            imgUrl={image}
            title='React Router'
            links={
                <>
                    <Button color='primary' variant='contained' href='https://reactrouter.com/' target='_blank'>React Router</Button>
                    <Button color='primary' variant='contained' href='https://reactrouter.com/docs/en/v6' target='_blank'>Documentation</Button>
                </>
            }
        >
            <Typography variant="body2" color="text.secondary">
                React Router is a fully-featured client and server-side routing library for React, a
                JavaScript library for building user interfaces. React Router runs anywhere React runs;
                on the web, on the server with node.js, and on React Native.
            </Typography>
        </Heading>

        <br />
        <br />

        <Code title={'Roots'} code={`<HashRouter>
    <Grid container>
        <Grid item xs={2}>
            <MenuList>
                <MenuItem>
                    <Link to={ReactRouter.path}>React Router</Link>
                </MenuItem>
            </MenuList>
        </Grid>
        <Grid item xs={10}>
            <Suspense fallback={<Skeleton />}>
                <Routes>
                    <Route
                        path={HomePage.path}
                        element={<HomePage.LazyRender />}
                    />
                    <Route
                        path={ReactRouter.path}
                        element={<ReactRouter.LazyRender />}
                    />
                    ...
                    <Route element={<Error404Page />} />
                </Routes>
            </Suspense>
        </Grid>
    </Grid>
</HashRouter>`} language="html" />
    </Container>
}