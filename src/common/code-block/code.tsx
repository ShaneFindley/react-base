import { Typography } from "@mui/material";
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
            { title && <Typography variant='h5' >{title}</Typography> }
            <pre>
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>
    );
}