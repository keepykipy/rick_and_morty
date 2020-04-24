import React from "react"
import styled from "styled-components"

interface MainTemplateProps {
    children: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
}

export const MainTemplate: React.FC<MainTemplateProps> = ({ header, footer, children }) => (
    <MainContainer>
        { header && <Header>{header}</Header> }
        { children }
        { footer && <Footer>{footer}</Footer> }
    </MainContainer>
)

const MainContainer = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "header" "." "footer";
    flex-grow: 1;
`

const Header = styled.header`
    grid-area: header;
    z-index: 1;
`

const Footer = styled.footer`
    grid-area: footer;
`
