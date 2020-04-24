import styled, { css } from "styled-components"

interface RowProps {
    gap?: string;
    wrap?: string;
    mt?: string;
}

export const Row = styled.div<RowProps>`
    display: flex;
    flex-direction: row;

    ${p => p.mt && css`
        margin-top: calc(${p.mt} * 2);
    `}

    ${p => p.wrap && css`
        flex-wrap: ${p.wrap};
    `}

    ${p => p.gap && css`
        margin-left: -${p.gap};
        margin-right: -${p.gap};

        & > * {
            margin-left: ${p.gap};
            margin-right: ${p.gap};
            margin-bottom: calc(${p.gap} * 2);
        }
    `}
`
