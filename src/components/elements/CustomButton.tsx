import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { MdEdit } from 'react-icons/md'
import palette from '../../lib/style/palette'

interface IProps {
  buttonRef?: React.RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void)
  textColor?: string
  size?: 'small' | 'medium' | 'large' | 'fit'
  onClick?: (any: any) => void | Promise<void>
}

export interface ITextButtonProps extends IProps {
  text?: string
}

export interface IIconButtonProps extends IProps {
  icon?: JSX.Element
}

export function CustomButton({
  buttonRef,
  text = '버튼',
  textColor = palette.blackberry,
  size = 'fit',
  onClick,
}: ITextButtonProps) {
  const [elementsSize, setElementsSize] = useState({
    wrapper: '',
    inner: '',
  })

  useEffect(() => {
    if (size === 'small') {
      setElementsSize({
        wrapper: 'w-20 h-10 rounded-xl',
        inner: 'w-30 h-8 rounded-xl leading-8 text-base',
      })
    } else if (size === 'medium') {
      setElementsSize({
        wrapper: 'w-24 h-12 rounded-xl',
        inner: 'w-30 h-10 rounded-xl leading-[2.5rem] text-lg',
      })
    } else if (size === 'large') {
      setElementsSize({
        wrapper: 'w-28 h-14 rounded-2xl',
        inner: 'w-[6.5rem] h-12 rounded-2xl leading-[3rem] text-xl',
      })
    } else {
      setElementsSize({
        wrapper: 'h-fit rounded-xl',
        inner: 'p-2 rounded-xl text-base',
      })
    }
  }, [size])

  return (
    <div
      ref={buttonRef}
      className={clsx(
        elementsSize.wrapper,
        'p-1 bg-white shadow-outer text-center hover:drop-shadow-md active:shadow-inner cursor-pointer',
      )}
      onClick={onClick}
    >
      <div className={clsx(elementsSize.inner, `unselectable bg-white shadow-inner`)} style={{ color: textColor }}>
        {text}
      </div>
    </div>
  )
}

export function CustomClearButton({
  buttonRef,
  text = '버튼',
  textColor = palette.blackberry,
  onClick,
}: ITextButtonProps) {
  return (
    <div
      ref={buttonRef}
      className={clsx(
        'max-w-fit max-h-9 px-2 py-1 unselectable text-base cursor-pointer rounded-xl hover:shadow-outer active:shadow-inner active:bg-inherit',
      )}
      onClick={onClick}
      style={{ color: textColor }}
    >
      {text}
    </div>
  )
}

export function CustomIcomButton({
  buttonRef,
  icon = <MdEdit />,
  textColor = palette.blackberry,
  onClick,
}: IIconButtonProps) {
  return (
    <div
      ref={buttonRef}
      className={clsx(
        'max-w-fit max-h-8 p-1 unselectable text-base cursor-pointer rounded-xl hover:shadow-outer active:shadow-inner active:bg-inherit',
      )}
      onClick={onClick}
      style={{ color: textColor }}
    >
      {icon}
    </div>
  )
}