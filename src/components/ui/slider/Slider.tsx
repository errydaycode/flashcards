import { useState } from 'react'

import { Input } from '@/components/ui/input'
import * as Slider from '@radix-ui/react-slider'

import style from './slider.module.scss'

export const CustomSlider = () => {
  const [sliderValue, setSliderValue] = useState([25, 75])

  const handleChangeSliderValue = (value: number[]) => {
    setSliderValue(value)
  }

  const handleChangeStartValue = (value: string) => {
    setSliderValue([+value, sliderValue[1]])
  }
  const handleChangeEndValue = (value: string) => {
    setSliderValue([sliderValue[0], +value])
  }

  return (
    <form className={style.slider}>
      <Input
        className={style.inputSlider}
        onValueChange={handleChangeStartValue}
        type={'number'}
        value={String(sliderValue[0])}
        width={'36px'}
      />
      <Slider.Root
        className={style.SliderRoot}
        max={100}
        onValueChange={handleChangeSliderValue}
        step={1}
        value={sliderValue}
      >
        <Slider.Track className={style.SliderTrack}>
          <Slider.Range className={style.SliderRange} />
        </Slider.Track>
        <Slider.Thumb aria-label={'Volume'} className={style.SliderThumb} />
        <Slider.Thumb aria-label={'Volume'} className={style.SliderThumb} />
      </Slider.Root>
      <Input
        className={style.inputSlider}
        onValueChange={handleChangeEndValue}
        type={'number'}
        value={String(sliderValue[1])}
        width={'36px'}
      />
    </form>
  )
}
