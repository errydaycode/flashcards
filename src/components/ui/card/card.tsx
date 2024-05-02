import s from './card.module.scss'

export const Card = () => {
  return (
    <div className={s.root}>
      <div className={s.title}>
        <h3>Dark Theme</h3>
      </div>
      <div className={s.card}></div>
    </div>
  )
}
