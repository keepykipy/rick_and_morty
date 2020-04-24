import React from "react"
import styled from "styled-components"

type SidebarProps = {
    children: React.ReactNode,
    sidebar?: React.ReactNode,
    footer?: React.ReactNode,
}

export const SidebarTemplate: React.FC<SidebarProps> = ({ sidebar, children, footer }) => (
    <SidebarContainer>
        <Sidebar>{sidebar}</Sidebar>
        <Main>
            {children}
        </Main>
        { footer && <ScrollableFooter>{footer}</ScrollableFooter> }
    </SidebarContainer>
)

const Sidebar = styled.aside`
    grid-area: sidebar;
`

const Main = styled.div`
    grid-area: main;
`

const SidebarContainer = styled.div`
    display: grid;
    grid-column-gap: 2rem;
    padding: 2rem 0;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "sidebar" "main" "footer";
        
    ${Sidebar} {
        margin-bottom: 2rem;
    }
`

const ScrollableFooter = styled.footer`
  grid-area: footer;
  margin-top: 4rem;
  display: block;
  height: 4rem;
`
