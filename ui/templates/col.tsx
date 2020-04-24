import styled, { css } from "styled-components"

interface ColProps {
    gap?: string | number;
}

export const Col = styled.div<ColProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    ${p => p.gap && css`
        & > :not(:first-child) {
            margin-top: ${p.gap};
        }
    `}
`
