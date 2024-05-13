import React from 'react'
import {motion} from 'framer-motion'
const AnimatedText = ({title,hover}:{title:string,hover:boolean}) => {
  return (
    <motion.div className='relative overflow-hidden'>
        <AnimatedWord  title={title} animation={letterAnimation} hover={hover}/>
        <div className='absolute top-0'>
            <AnimatedWord title={title} animation={letterAnimationTwo} hover={hover}/>
        </div>
    </motion.div>
  )
}
const titleAnimation ={
    rest:{
        transition:{
            staggerChildren:0.003
        }
    },
    hover:{
        transition:{
            staggerChildren:0.003
        }
    }
}
const letterAnimation ={
    rest:{
        y:0,
    },hover:{
        y:-25,
        transition:{
            duration:0.3,
            ease:[0.6,0.01,0.05,0.95],
            type:'tween'
        }
    }
}
const letterAnimationTwo ={
    rest:{
        y:25,
    },hover:{
        y:0,
        transition:{
            duration:0.3,
            ease:[0.6,0.01,0.05,0.95],
            type:'tween'
        }
    }
}
const AnimatedWord =({title,animation,hover}:{title:string,animation:any,hover:boolean})=>{
    return(
        <motion.span variants={titleAnimation} initial="rest" animate={hover ? 'hover' : 'rest'} className='whitespace-nowrap relative'>
            {
                title.split("").map((item,index)=>
                item === " " ? <span key={index}>&nbsp;</span>
                : <motion.span key={index} variants={animation} className='relative inline-block whitespace-nowrap' >{item}</motion.span>
                )
            }
        </motion.span>
    )
}
export default AnimatedText