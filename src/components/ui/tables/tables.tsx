import Picture1 from '@/icons/icon tables/Frame 5.png'
import Picture from '@/icons/icon tables/Property 1=With Photo.png'
import Star from '@/icons/icon tables/Star yellow.svg'
import TrashIcon from '@/icons/icon tables/edit-2-outline.svg'
import PlayerIcon from '@/icons/icon tables/play-circle-outline.svg'
import StarOutline from '@/icons/icon tables/star-outline.svg'
import PencilIcon from '@/icons/icon tables/trash-outline.svg'

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
                <img alt={'Player'} src={PlayerIcon} />
              </button>
            </div>
            <div className={s.delete_button}>
              <button>
                <img alt={'Trash'} src={TrashIcon} />
              </button>
            </div>
            <div className={s.pencil_input}>
              <button>
                <img alt={'Pencil'} src={PencilIcon} />
              </button>
            </div>
          </div>
          <div className={s.star_container}>
            <div>
              <img alt={'Star'} src={Star} />
            </div>
            <div>
              <img alt={'Star'} src={Star} />
            </div>
            <div>
              <img alt={'Star'} src={Star} />
            </div>
            <div>
              <img alt={'Star'} src={Star} />
            </div>
            <div className={s.StarOutline}>
              <img alt={'Star'} src={StarOutline} />
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
