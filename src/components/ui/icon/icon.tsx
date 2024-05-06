import { ComponentPropsWithoutRef } from 'react'

import iconsSprite from '@/assets/sprite.svg'

type iconIdProps = {
  height?: string
  iconId?: string
  viewBox?: string
  width?: string
  xmlns?: string
} & ComponentPropsWithoutRef<'svg'>

export const Icon = ({
  fill,
  height,
  iconId,
  viewBox,
  width,
  widths,
  xmlns,
  ...rest
}: iconIdProps) => {
  return (
    <svg
      fill={fill || 'none'}
      height={height || '16'}
      viewBox={viewBox || '0 0 16 16'}
      width={width || '16'}
      xmlns={xmlns || 'http://www.w3.org/2000/svg'}
      {...rest}
    >
      <use xlinkHref={`${iconsSprite}#${iconId}`} />
    </svg>
  )
}
