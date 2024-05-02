import iconsSprite from '@/assets/sprite.svg'

type iconIdProps = {
  fill?: string
  height?: string
  iconId?: string
  viewBox?: string
  width?: string
  xmlns?: string
}

export const Icon = (props: iconIdProps) => {
  return (
    <svg
      fill={props.fill || 'none'}
      height={props.height || '16'}
      viewBox={props.viewBox || '0 0 16 16'}
      width={props.width || '16'}
      xmlns={props.xmlns || 'http://www.w3.org/2000/svg'}
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  )
}
