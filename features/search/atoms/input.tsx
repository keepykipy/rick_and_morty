import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { InputBasicProps } from '../../../ui';

export const SearchInput = forwardRef(({
    autoComplete,
    disabled,
    label,
    name,
    onBlur,
    onChange,
    placeholder,
    type,
    value
}: InputBasicProps, ref: React.Ref<any>) => (
        <InputWrap>
            <Input
                ref={ref}
                autoComplete={autoComplete}
                disabled={disabled}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                value={value}
                required
            />
            {label && <InputLabel>{label}</InputLabel>}
        </InputWrap>
    ))


const Input = styled.input<InputBasicProps>`
    font-family: ${p => p.theme.fonts.reg};
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.08px;
    color: rgba(255, 255, 255, .8);
    width: 100%;
    min-height: 56px;
    max-height: 56px;
    height: 56px;
    padding-left: 24px;
    padding-right: 44px;
    padding-top: 30px;
    padding-bottom: 10px;
    border-radius: 4px;
    border: none;
    background-color: rgba(255, 255, 255, .4);
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
`;

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
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.08px;
    color: #ffffff;
    opacity: .6;
    transition: all .2s ease-in-out;
    transform-origin: 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const InputWrap = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
