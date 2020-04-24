import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

export interface InputBasicProps {
    autoComplete?: string;
    disabled?: boolean;
    label?: string;
    name?: string;
    onBlur?: (e: any) => void;
    onChange?: (e: any) => void;
    placeholder?: string;
    type?: string;
    value?: string;
}

export interface InputProps extends InputBasicProps {
    error?: string;
}

export interface InputNativeProps extends InputBasicProps {
    error?: boolean;
}

export const Input: React.FC<InputProps> = forwardRef(({
    autoComplete,
    disabled,
    error,
    label,
    name,
    onBlur,
    onChange,
    placeholder,
    type,
    value
}, ref) => (
    <InputWrap>
        <InputNative
            ref={ref as any}
            autoComplete={autoComplete}
            disabled={disabled}
            error={Boolean(error)}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            value={value}
            required
        />
        { label && <InputLabel>{label}</InputLabel> }
        { error && <ErrorLabel>{ error }</ErrorLabel> }
    </InputWrap>
))


const InputNative = styled.input<InputNativeProps>`
    font-family: ${p => p.theme.fonts.reg};
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #10002b;
    width: 100%;
    min-height: 56px;
    max-height: 56px;
    height: 56px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 30px;
    padding-bottom: 10px;
    border-radius: 4px;
    border: none;
    box-shadow: inset 0 0 0px 1px #d8d8d8;
    background-color: #fbfbfb;
    transition: all .2s ease-in-out;
    cursor: pointer;

    &:focus, &:active, &:hover {
        outline: none;
    }

    &:focus, &:valid {
        & + label {
            transform: scale(.77777) translateY(-10%);
        }
    }

    ${p => !p.error && css`
        &:focus {
            box-shadow: inset 0 0 0 2px #00b2a9;
        }

        &:not(:focus) {
            &:hover {
                box-shadow: inset 0 0 0 1px #929292;
            }
        }
    `}

    ${p => p.error && css`
        box-shadow: 0 0 0 2px ${p => p.theme.colors.error};
    `}
`

const InputLabel = styled.label`
    font-family: ${p => p.theme.fonts.reg};
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    left: 24px;
    right: 0;
    pointer-events: none;
    line-height: 56px;
    font-size: 18px;
    color: #6c6c6c;
    transition: all .2s ease-in-out;
    transform-origin: 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const ErrorLabel = styled.label`
    font-family: ${p => p.theme.fonts.reg};
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: 0.07px;
    color: ${p => p.theme.colors.error}; 
    padding: 10px 24px;
`;

const InputWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
