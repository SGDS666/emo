import { useEffect, useRef, useState } from 'react';
import style from './index.module.scss';







const 弹幕层 = () => {
    const canref = useRef('canvas')
    const [size, setsize] = useState([window.innerWidth, window.innerHeight])
    // console.log({ width, height });
    const [width,height] = size
    useEffect(() => {
        const ctx = canref.current.getContext('2d')
        ctx.font = "22px Microsoft YaHei"
        ctx.fillStyle = 'white'
        let bothy = -20
        const creatY = () => {
            if (bothy < 578) {
                bothy += 40

            } else {
                bothy = -20
            }
            return bothy
        }
        const creatS = () => Math.random() + 1
        class 弹幕类 {
            static 弹幕库 = []
            static 弹幕开启 = (ctx) => {
                ctx.clearRect(0, 0, width, height)
                弹幕类.弹幕库.forEach((d, index) => {
                    d.出界检测(d, index)
                    d.运行()
                    d.绘制(ctx)
                })
            }
            constructor(text, x, y, speed) {
                this.text = text
                this.initx = x
                this.inity = y
                this.speed = speed
                this.width = this.text.length * 22
                弹幕类.弹幕库.push(this)
            }

            出界检测 = (弹幕, index) => {
                if (弹幕.initx < 0 - 弹幕.width) {
                    console.log("出界", 弹幕);
                    弹幕类.弹幕库.splice(index, 1)
                }
            }

            运行 = () => {
                this.initx -= this.speed
            }
            绘制 = (ctx) => {
                ctx.fillText(this.text, this.initx, this.inity)
            }

        }


        const 装载弹幕 = () => {
            setInterval(async () => {
                const resp = await fetch('https://service-qju1slrd-1257651157.sh.apigw.tencentcs.com/release/api/commit')
                const data = await resp.json()
                const { avatarUrl: iconsrc, content: commit, mp3url, name: songName } = data.data
                // console.log({ iconsrc, commit, mp3url, songName });
                new 弹幕类(commit, width, creatY(), creatS())
            }, 3000)
        }
        const updata = () => {
            setInterval(()=>{
                弹幕类.弹幕开启(ctx)
            },10)
        }
        updata()
        装载弹幕()
    }, [])
    return (
        <canvas className={style.can} width={size[0]} height={size[1]} ref={canref}>

        </canvas>
    )
}


export default 弹幕层