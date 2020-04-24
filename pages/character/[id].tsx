import React from 'react'
import Head from 'next/head';

import { MainTemplate, BackToMainButton, Container } from '../../ui';
import { CharacterInfo } from '../../features/character';
import { withApollo } from '../../lib';

const index = () => (
    <>
        <Head>
            <title>Rick and Morty App</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <MainTemplate
            header={
                <Container>
                    <BackToMainButton mt="32px" text="Character list" href="/" />
                </Container>
            }
        >
            <CharacterInfo />
        </MainTemplate>
    </>
)

export default withApollo({ ssr: true })(index)
