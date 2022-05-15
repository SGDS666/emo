import { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import ReactAudioPlayer from 'react-audio-player';
import { musicstate } from '../../Store';
import useCloudMusic from '../../Tools/useCloudMusic';
import 弹幕层 from '../../component/弹幕';
import style from './index.module.scss';
import { useNavigate } from 'react-router-dom';
const EmoUi = () => {
    const [zt,setzt] = useState(true)
    const musicref = useRef('music')
    const newmusic = useRecoilValue(musicstate)
    const updatemusic = useCloudMusic(4)
    // const navgiate = useNavigate()
    useEffect(()=>{
        updatemusic()
    },[])

    const endupdate = useCallback(()=>{
        updatemusic()
    },[])
    const start = ()=>{
        console.log(musicref.current.audioEl);
        const musicbox  = musicref.current.audioEl.current
        
        if(musicbox.paused){
            musicbox.play()
            setzt(false)
        }else{
            musicbox.pause()
            setzt(true)
        }
    }

    const change = ()=>{
        updatemusic()
        setzt(false)
    }

    return (
        <div className={style.box} >
            <div className={zt?style.start:style.pause} onClick={start}>{zt?"开始":"结束"}emo</div>
            <div className={style.change} onClick={change}>下一首,这首氛围不够</div>
            
            <ReactAudioPlayer
            style={{display:'none'}}
            controls
            autoPlay
            ref={musicref}
            crossorigin="anonymous" 
            src={newmusic[0]}
            onEnded={endupdate}
            />
            
            
        </div>
    )
}


export default function Emo(){
    return (
        <>
        <EmoUi/>
        <弹幕层/>
        
        </>
    )
}