import Picture1 from '@/assets/image/Frame 5.png'
import Picture from '@/assets/image/Property 1=With Photo.png'
import { Icon } from '@/components/ui/icon'

import s from './tables.module.scss'

export const Tables = () => {
  return (
    <div>
      <div className={s.header_title}>
        <h3>Tables</h3>
      </div>
      <div className={s.root}>
        <div className={s.tables}>
          <div className={s.title}>
            <h5>Name</h5>
          </div>
          <div className={s.input_container}>
            <h5>Name</h5>
          </div>
          <div className={s.icon_container}>
            <div className={s.player_button}>
              <button>
                <Icon iconId={'player'} />
              </button>
            </div>
            <div className={s.delete_button}>
              <button>
                <Icon iconId={'pencil'} />
              </button>
            </div>
            <div className={s.pencil_input}>
              <button>
                <Icon iconId={'trashDelete'} />
              </button>
            </div>
          </div>
          <div className={s.star_container}>
            <div>
              <Icon iconId={'starYellow'} />
            </div>
            <div>
              <Icon iconId={'starYellow'} />
            </div>
            <div>
              <Icon iconId={'starYellow'} />
            </div>
            <div>
              <Icon iconId={'starYellow'} />
            </div>
            <div className={s.StarOutline}>
              <Icon iconId={'starOutline'} />
            </div>
          </div>
          <div className={s.PictureName}>
            <img alt={'Picture'} src={Picture} />
          </div>
          <div className={s.select}>
            <select>
              <option value={''}>Name</option>
              <option value={'name1'}>Name1</option>
            </select>
          </div>
        </div>
        <div className={s.full_Example}>
          <div>
            <h3>Full Example</h3>
          </div>
          <div className={s.nameContainer}>
            <div className={s.nameBlock1}>
              <div>
                <h6>Name</h6>
              </div>
            </div>
            <div className={s.nameBlock2}>
              <div>
                <h6>Name</h6>
              </div>
            </div>
            <div className={s.nameBlock3}>
              <div>
                <h6>Name</h6>
              </div>
            </div>
            <div className={s.nameBlock4}>
              <div>
                <h6>Name</h6>
              </div>
            </div>
            <div className={s.nameBlock5}>
              <div>
                <h6>Name</h6>
              </div>
            </div>
            <div className={s.nameBlock6}>
              <div>
                <h6>Name</h6>
              </div>
            </div>
          </div>
          <div className={''}>
            <div>
              <img alt={'picture'} src={Picture1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
