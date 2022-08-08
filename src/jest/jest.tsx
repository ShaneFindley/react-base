import { Button, Container, Paper, Typography } from "@mui/material";
import Heading from "../common/heading/heading";

import image from '../axios/logo.svg';

export default function Jest() {
    return <Container style={{ paddingTop: 10 }}>
        <Heading
            imgUrl={image}
            title='Jest'
            links={
                <>
                    <Button color='primary' variant='contained' href='https://axios-http.com/' target='_blank'>Axios</Button>
                </>
            }
        >
            <Typography variant="body2" color="text.secondary">
                Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to 
                use library in a small package with a very extensible interface.
            </Typography>
        </Heading>

        <br />
        <br />

        <Paper>
            <div />
        </Paper>
    </Container>;
}