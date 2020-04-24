
import React from "react"
import styled from "styled-components"

interface CenterContentProps {
    children: React.ReactNode;
}

export const CenterContentTemplate: React.FC<CenterContentProps> = ({ children }) => (
    <CenterContent>
        {children}
    </CenterContent>
)

const CenterContent = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    flex-direction: column;
    width: 100%;
`
