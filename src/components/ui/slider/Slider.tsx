import { ComponentPropsWithoutRef } from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'

export type Props = {
  max?: number
  min?: number
  onValueChange: (value: number[]) => void
  value: number[]
} & ComponentPropsWithoutRef<typeof Slider.Root>

export const CustomSlider = (props: Props) => {
  const { className, max = 99, min = 0, onValueChange, value, ...rest } = props

  const minValue = value?.[0] ?? min
  const maxValue = value?.[1] ?? max

  return (
    <div className={`${s.slider} ${className || ''}`}>
      <div className={s.value}>{minValue}</div>
      <Slider.Root
        className={s.root}
        max={max}
        min={min}
        onValueChange={value => onValueChange(value)}
        value={value}
        {...rest}
      >
        <Slider.Track className={s.track}>
          <Slider.Range className={s.range} />
        </Slider.Track>
        <Slider.Thumb aria-label={'Slider Thumb'} className={s.thumb} />
        <Slider.Thumb aria-label={'Slider Thumb'} className={s.thumb} />
      </Slider.Root>
      <div className={s.value}>{maxValue}</div>
    </div>
  )
}
