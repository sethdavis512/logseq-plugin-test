import { useEffect, useState } from 'react';
import useAppVisible from './hooks/useAppVisible';
import styled, { createGlobalStyle } from 'styled-components';
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

const Code = styled.code``;

export function App() {
    const visible = useAppVisible();

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
            <Header>Shaun's Logseq Plugin</Header>
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
