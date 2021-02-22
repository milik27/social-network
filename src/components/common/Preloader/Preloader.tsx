import React, { FC, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Spinner from '@src/assets/spinner.svg'

export type PreloaderProps = {
  loading?: boolean
  center?: boolean
  height?: string
}

const Overlay = styled.div<PreloaderProps>`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 10;
  height: ${({ height }) => height};
  ${({ center }) =>
    center &&
    css`
      align-items: center;
    `}

  svg {
    stroke: ${({ theme }) => theme.palette.primary.medium};
  }
`

export const Preloader: FC<PreloaderProps> = ({ loading, children, center, height }) => {
  const [innerLoading, setInnerLoading] = useState(true)
  const bothLoading = loading || innerLoading

  useEffect(() => {
    setTimeout(() => {
      setInnerLoading(false)
    }, 200)
  }, [])

  if (bothLoading) {
    return (
      <Overlay height={height} center={center}>
        <Spinner height="70px" wight="70px" />
      </Overlay>
    )
  }

  return <>{children}</>
}
