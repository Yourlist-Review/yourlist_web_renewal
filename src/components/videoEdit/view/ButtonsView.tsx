import React from 'react'
import palette from '../../../lib/style/palette'
import { CustomButton, ITextButtonProps } from '../../elements/CustomButton'

interface IProps {
  leftButtonProps?: ITextButtonProps
  rightButtonProps?: ITextButtonProps
  onClickApply: () => void
}

function ButtonsView({ leftButtonProps, rightButtonProps, onClickApply }: IProps) {
  return (
    <div className="w-full pt-4 flex text-3xl justify-center gap-x-8">
      <CustomButton text="적용" size="large" textColor={palette['info']} {...leftButtonProps} onClick={onClickApply} />
      <CustomButton text="추가" size="large" textColor={palette['redrose']} {...rightButtonProps} />
    </div>
  )
}

export default ButtonsView