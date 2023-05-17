import s from './Loader.module.css'
import preloader from '../../image/preloader.png'

export const Loader = () => <div className={s.loader}><img src={`${preloader}`} alt="spinner"/></div>
