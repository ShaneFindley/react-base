
import { Button, Container, Typography } from "@mui/material";
import Code from "../common/code-block/code";
import Heading from "../common/heading/heading";

import image from './logo.svg';
export default function PrismJsPage() {

    return <Container style={{ paddingTop: 10 }}>
        <Heading
            imgUrl={image}
            title='Prism.js'
            links={
                <>
                    <Button color='primary' variant='contained' href='https://prismjs.com/' target='_blank'>Prismjs</Button>
                </>
            }
        >
            <Typography variant="body2" color="text.secondary">
                Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind.
                It&rsquo;s used in millions of websites, including some of those you visit daily.
            </Typography>
        </Heading>

        <br />
        <br />

        <Code title={'Example of Prismjs output'} code={`import { Typography } from "@mui/material";
import { useEffect } from "react";
import Prism from "prismjs";

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';

import 'prismjs/themes/prism-okaidia.min.css';

export default function Code({ code, language, title }: { code: string, language: string, title?: string }) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <div className="Code">
            { title && <Typography variant='h2' >{title}</Typography> }
            <pre>
                <code className={\`language-\${language}\`}>{code}</code>
            </pre>
        </div>
    );
}`} language="tsx" />
    </Container>
}