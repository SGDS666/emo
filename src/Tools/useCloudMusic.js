import { useRecoilState } from "recoil"
import { musicstate } from "../Store"


const url = 'https://api.vvhan.com/api/rand.music?sort='
const types = ['热歌榜','新歌榜','飙升榜','原创']


const useCloudMusic = (index) => {
    const [mlist,setmlist] = useRecoilState(musicstate)
    
    
    
    return async () => {
        const newurl =  `${url}${types[index]}`
        const res = await fetch(newurl)
        console.log(res.url);
        setmlist([res.url,...mlist])
    }
}   

export default useCloudMusic