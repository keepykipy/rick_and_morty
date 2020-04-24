import React from 'react'
import Head from 'next/head';

import { MainTemplate, Container, BackwardButton } from '../../ui';
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
                    <BackwardButton mt="32px" />
                </Container>
            }
        >
            JOPA
        </MainTemplate>
    </>
)

export default withApollo({ ssr: true })(index)
