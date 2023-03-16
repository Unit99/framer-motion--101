import {motion} from 'framer-motion'


const List =()=>{
    const wrapper = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                //delayChildren: 0.5
                staggerChildren: 0.5,
                staggerDirection: -1,
            }
        }
    }

    const list = {
        hidden: {
            opacity: 0,
            transition: { when: 'afterChildren'}
        }
    }

    // const item = {
    //     hidden: {opacity: 0},
    //     show: {opacity: 1}
    // }

    const item = {
        hidden: {
            opacity: 0,
            transition: {
                duration :2,
            }
        }
    }

    return(
        <motion.ul
            variants={list}
            animate='hidden'
        >
            <motion.li variants={item}
            >List item 1</motion.li>
            <motion.li variants={item}>List item 2</motion.li>
        </motion.ul>
    )
}

export default List