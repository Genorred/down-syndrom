'use client'
import React, {useState} from 'react';
import './start-button.css'
import './email.css'
import Image from "next/image";
import Sob from './sob_apple.png'

const Quiz = () => {
    const [isStarted, setIsStarted] = useState<boolean>()
    const onStart = () => {
        setIsStarted(true);
    }
    return (
        <div className='w-full max-w-xl py-20 text-sky-400 via-sky-400 blue-500'>
            {
                !isStarted
                    ?
                    <div className='flex flex-col items-center'>
                        <h1 className='text-3xl'>Тест на синдром дауна</h1>
                        <button className='text-4xl start-button mt-4 mx-auto' onClick={onStart}>
                            НАЧАТЬ
                        </button>
                    </div>
                    :
                    <form className='flex flex-col gap-4 emoji-container'>
                        <div>
                            {[...Array(30)].map((_, i) => (
                                <Image key={i} src={Sob} alt={'wooooagh reaction'} className='emoji'
                                       style={{
                                           left: `${100 * (Math.random())}%`,
                                           top: `${40 * (Math.random())}vh`,
                                           animationDuration: `${(Math.random() + 0.4) * 2}s`,
                                       }}/>
                            ))}
                        </div>
                        <h2 className='text-white '>Чи присутній у вас сіндром дауна ?</h2>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2'>
                                <input type="radio" id="html" name="fav_language" value="HAHAHAHA"/>
                                <label htmlFor="html">HAHAHAHA</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="radio" id="css" name="fav_language" value="ATARASHI"/>
                                <label htmlFor="css">ATARASHI</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="radio" id="javascript" name="fav_language" value="XDDD"/>
                                <label htmlFor="javascript">XDDD</label>
                            </div>
                        </div>
                        <button className='text-white bg-fuchsia-800 px-6 py-2 w-fit border-2 border-white'>
                            Dash!
                        </button>
                    </form>
            }
        </div>
    );
};

export default Quiz;