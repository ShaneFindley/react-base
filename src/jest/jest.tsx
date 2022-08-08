import { Button, Container, Typography } from "@mui/material";
import Heading from "../common/heading/heading";

import image from './logo.png';

export default function Jest() {
    return <Container style={{ paddingTop: 10 }}>
        <Heading
            imgUrl={image}
            title='Jest'
            links={
                <>
                    <Button color='primary' variant='contained' href='https://jestjs.io/' target='_blank'>Jest</Button>
                </>
            }
        >
            <Typography variant="body2" color="text.secondary">
                Jest is a delightful JavaScript Testing Framework with a focus on simplicity. 
                It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!
            </Typography>
        </Heading>
    </Container>;
}