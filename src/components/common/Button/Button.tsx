import React, { FC } from 'react'
import styled from 'styled-components'
import { lighten, darken } from 'polished'
import Spinner from '@src/assets/spinner.svg'

export const Btn = styled.button<ButtonProps>`
  border: 2px solid ${({ theme }) => theme.palette.primary.medium};
  background-color: ${({ theme, outline }) => (outline ? 'transparent' : theme.palette.primary.medium)};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme, outline }) => (outline ? theme.palette.primary.medium : theme.palette.common.white)};
  cursor: pointer;
  font-size: inherit;
  transition-duration: 0.3s;
  position: relative;
  padding: ${({ size }) => {
    switch (size) {
      case 'small':
        return '5px 20px'
      case 'medium':
        return '10px 40px'
      case 'large':
        return '15px 60px'
      default:
        return '10px 40px'
    }
  }};

  &:hover {
    border: 2px solid ${({ theme, outline }) => darken(outline ? 0 : 0.1, theme.palette.primary.medium)};
    background-color: ${({ theme, outline }) => darken(outline ? 0 : 0.1, theme.palette.primary.medium)};
    color: ${({ theme }) => theme.palette.common.white};
  }

  &:disabled {
    border: 2px solid ${({ theme }) => lighten(0.2, theme.palette.primary.medium)};
    background-color: ${({ theme, outline }) => (outline ? 'transparent' : lighten(0.2, theme.palette.primary.medium))};
    color: ${({ theme, outline }) =>
      outline ? lighten(0.2, theme.palette.primary.medium) : theme.palette.common.white};
    cursor: not-allowed;
  }
`

const RollingContainer = styled(Spinner)<ButtonProps>`
  width: 1.5em;
  height: 1.5em;
  position: absolute;
  top: calc(50% - 12px);
  left: calc(50% - 12px);
  stroke: ${({ outline, theme }) => (outline ? theme.palette.primary.medium : theme.palette.common.white)};
`

export type ButtonProps = {
  outline?: boolean
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ children, loading, disabled, outline, size, ...props }) => {
  return (
    <Btn outline={outline} size={size} disabled={disabled || loading} {...props} type="button">
      {loading && <RollingContainer outline={outline} />}
      {children}
    </Btn>
  )
}
