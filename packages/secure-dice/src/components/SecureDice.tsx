import {useState} from 'react'

import {secureRandom} from '@movie/secure-random'
import classNames from 'classnames/bind'

import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'
import five from '../assets/5.png'
import six from '../assets/6.png'
import styles from './SecureDice.module.css'

const cx = classNames.bind(styles)

const DiceImageUrl: Record<number, string> = {
    1: one,
    2: two,
    3: three,
    4: four,
    5: five,
    6: six,
}

const SecureDice = () => {
    const [randomNumber, setRandomNumber] = useState(1)

    const handleClick = () => {
        setRandomNumber(Math.floor(secureRandom({min: 1, max: 6})))
    }

    return (
        <div className={cx('article')}>
            <h1>Random Dice</h1>
            <img className={cx('dice')} src={DiceImageUrl[randomNumber]} alt={`dice ${randomNumber}`} />
            <button className={cx('roll-button')} onClick={handleClick}>
                roll the dice
            </button>
            <a href="https://www.flaticon.com/kr/authors/bearicons" className={cx('source')}>
                주사위 아이콘 제작자: bearicons - Flaticon
            </a>
        </div>
    )
}

export default SecureDice
