import React from 'react';
import Head from 'next/head';

import { withApollo } from '../lib'
import { MainTemplate } from '../ui';
import { SearchBar, SearchResult } from '../features/search';

const IndexPage = () => (
    <> 
        <Head> 
            <title>Rick and Morty App</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <MainTemplate
            header={
                <SearchBar />
            }
        >
            <SearchResult />
        </MainTemplate>
    </>
)
    
export default withApollo({ ssr: true })(IndexPage)
