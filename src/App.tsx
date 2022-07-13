import React, { useEffect, useState } from 'react';
import useAppVisible from './hooks/useAppVisible';
import styled, { createGlobalStyle } from 'styled-components';
// Import the Slate editor factory.
import { createEditor } from 'slate';

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';
// TypeScript users only add this code
import type { BaseEditor, Descendant } from 'slate';
import type { ReactEditor } from 'slate-react';

import '@logseq/libs';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: white;
        font-family: Helvetica, sans-serif;
    }
`;

const Header = styled.header`
    padding: 3rem 2rem 2rem;
    background-color: #ccc;
`;

const Main = styled.main`
    padding: 2rem;
    flex: 1 0 auto;
`;

const Footer = styled.footer`
    padding: 2rem;
    background-color: #ccc;
`;

const PageHeading = styled.h1`
    color: rebeccapurple;
`;

const Button = styled.button`
    background-color: rebeccapurple;
    color: white;
    padding: 0.7rem 1rem;
    border-radius: 8px;
    border: none;
`;

const Pre = styled.pre`
    height: 300px;
    max-height: 300px;
    overflow: auto;
    border: 1px solid #808080;
`;

type CustomElement = { type: 'paragraph'; children: CustomText[] };
type CustomText = { text: string };

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}

const Code = styled.code``;

export function App() {
    const visible = useAppVisible();
    const editor = useState(() => withReact(createEditor()));

    const handleCloseClick = () => {
        window.logseq.hideMainUI();
    };

    const [allPagesMeta, setAllPagesMeta] = useState<any>();

    const getPageMeta = async () => {
        const meta = await logseq.Editor.getAllPages();
        setAllPagesMeta(meta);
    };

    useEffect(() => {
        getPageMeta();
    }, []);

    if (!visible) {
        return null;
    }

    return (
        <>
            <GlobalStyle />
            <Header>Text Style Plugin for Logseq</Header>
            <Main>
                <PageHeading>Welcome to [[Logseq]] Plugins!</PageHeading>
                <p>Logseq ID: {logseq.baseInfo.id}</p>
                <p>
                    Connection status:{' '}
                    {logseq.connected ? 'Connected' : 'Disconnected'}
                </p>
                {allPagesMeta && (
                    <>
                        <p>All pages meta:</p>
                        <Pre>
                            <Code>{JSON.stringify(allPagesMeta, null, 4)}</Code>
                        </Pre>
                    </>
                )}
                <Button onClick={handleCloseClick}>Close</Button>
            </Main>
            <Footer>Foooter</Footer>
        </>
    );
}
