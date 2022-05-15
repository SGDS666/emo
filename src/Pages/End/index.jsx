import { useNavigate } from 'react-router-dom';
import style from './index.module.scss';
const End = () => {
    const navgiate = useNavigate()
    const start = () =>{
        navgiate('/')
    }
    return (
        <div className={style.box} >
            <div className={style.start} onClick={start}>开启emo</div>
        </div>
    )
}


export default End