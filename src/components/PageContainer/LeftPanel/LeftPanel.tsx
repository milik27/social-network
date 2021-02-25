import React, { useCallback, useEffect, useState, MouseEvent as MouseReactEvent } from 'react'
import styled from 'styled-components'
import { debounce } from 'lodash'
import { NavLink } from 'react-router-dom'
import HomeIco from '@src/assets/home.svg'
import UsersIco from '@src/assets/user.svg'
import MessageIco from '@src/assets/message.svg'

const menuWidth = 60
const fullMenuWidth = 140

type WrapperProps = {
  isFull: boolean
  widthMove: number
}

const Wrapper = styled.aside<WrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${({ isFull, widthMove }) => {
    if (widthMove) {
      return menuWidth + widthMove
    }
    if (isFull) {
      return menuWidth + fullMenuWidth
    }
    return menuWidth
  }}px;
  position: sticky;
  top: 65px;
  left: 0;
  background-color: ${({ theme }) => theme.palette.background.medium};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius};
  height: fit-content;
`

const Item = styled(NavLink)<{ disabled: boolean }>`
  height: 60px;
  color: ${({ theme }) => theme.palette.common.white};
  fill: ${({ theme }) => theme.palette.common.white};
  cursor: pointer;
  transition-duration: 0.3s;
  display: flex;
  align-items: center;
  text-decoration: none;
  user-drag: none;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : '')};

  &:hover {
    color: ${({ theme }) => theme.palette.primary.medium};
    fill: ${({ theme }) => theme.palette.primary.medium};
  }
`

const Icon = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  svg {
    width: 25px;
    height: 25px;
  }
`

const Text = styled.div`
  padding-left: 10px;
`

let startX: number

export const LeftPanel = () => {
  const [isFull, setIsFull] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [widthMove, setWidthMove] = useState(0)

  const desktopMenu = useCallback(
    debounce(() => {
      if (window.innerWidth > 1200) {
        setIsDesktop(true)
      } else {
        setIsDesktop(false)
      }
    }, 300),
    []
  )

  useEffect(() => {
    if (window.innerWidth > 1200) {
      setIsDesktop(true)
    }

    window.addEventListener('resize', desktopMenu)

    return () => window.removeEventListener('resize', desktopMenu)
  }, [desktopMenu])

  const wrapperMousemove = useCallback(
    (e: MouseEvent) => {
      if (isFull) {
        const newWidth = e.clientX - startX + fullMenuWidth
        if (newWidth < fullMenuWidth - 10) {
          setWidthMove(newWidth)
        }
        if (newWidth < 0) {
          document.removeEventListener('mousemove', wrapperMousemove)
          setIsFull(false)
          setWidthMove(0)
        }
      } else {
        const newWidth = e.clientX - startX
        if (newWidth > 10) {
          setWidthMove(newWidth)
        }
        if (newWidth > fullMenuWidth) {
          document.removeEventListener('mousemove', wrapperMousemove)
          setIsFull(true)
          setWidthMove(0)
        }
      }
    },
    [isFull]
  )

  const onMouseDownWrapper = (e: MouseReactEvent) => {
    if (!isDesktop) {
      startX = e.clientX
      document.addEventListener('mousemove', wrapperMousemove)
    }
  }

  const onMouseUpWrapper = useCallback(() => {
    document.removeEventListener('mousemove', wrapperMousemove)
    if (widthMove) {
      if (isFull) {
        setIsFull(!(widthMove < fullMenuWidth / 1.3))
      } else {
        setIsFull(widthMove > fullMenuWidth / 3)
      }
    }
    setWidthMove(0)
  }, [isFull, widthMove, wrapperMousemove])

  return (
    <Wrapper
      isFull={isDesktop || isFull}
      onMouseDown={onMouseDownWrapper}
      onMouseUp={onMouseUpWrapper}
      widthMove={widthMove}
    >
      <Item to="/" disabled={!!widthMove}>
        <Icon>
          <HomeIco />
        </Icon>
        <Text>Профиль</Text>
      </Item>
      <Item to="/users" disabled={!!widthMove}>
        <Icon>
          <UsersIco />
        </Icon>
        <Text>Пользователи</Text>
      </Item>
      <Item to="/messages" disabled={!!widthMove}>
        <Icon>
          <MessageIco />
        </Icon>
        <Text>Сообщения</Text>
      </Item>
    </Wrapper>
  )
}
