import React, { useState } from 'react'

import chatWhite from '../../assets/chatWhite.svg'
import chatRed from '../../assets/chatRed.svg'
import groupRed from '../../assets/groupRed.svg'
import groupWhite from '../../assets/groupWhite.svg'
import addUserRed from '../../assets/addUserRed.svg'
import addUserWhite from '../../assets/addUserWhite.svg'
import addWhite from '../../assets/addWhite.svg'
import addRed from '../../assets/addRed.svg'

const Navbar = ({ setShow }) => {

    const [options, setOptions] = useState({ chatBtn: true, groupBtn: false, addBtn: false, settingBtn: false })

    console.log(options);

    return (
        <>

            <div
                onClick={() => {
                    setOptions({ chatBtn: true, groupBtn: false, addBtn: false, settingBtn: false })
                    setShow({ friendChat: true, groupChat: false, searchBook: false })
                }}
                className='flex items-center justify-center cursor-pointer'>
                {options.chatBtn ? <img className='w-[30px]' src={chatRed} alt="" srcSet="" /> : <img className='w-[30px]' src={chatWhite} alt="" srcSet="" />}
            </div>


            <div
                onClick={() => {
                    setOptions({ chatBtn: false, groupBtn: true, addBtn: false, settingBtn: false })
                    setShow({ friendChat: false, groupChat: true, searchBook: false })
                }}
                className='flex items-center justify-center cursor-pointer'>
                {options.groupBtn ? <img className='w-[30px]' src={groupRed} alt="" srcSet="" /> : <img className='w-[30px]' src={groupWhite} alt="" srcSet="" />}
            </div>


            <div
                onClick={() => {
                    setOptions({ chatBtn: false, groupBtn: false, addBtn: true, settingBtn: false })
                    setShow({ friendChat: false, groupChat: true, searchBook: false })
                }}
                className='flex items-center justify-center cursor-pointer'>
                {options.addBtn ? <img className='w-[30px]' src={addRed} alt="" srcSet="" /> : <img className='w-[30px]' src={addWhite} alt="" srcSet="" />}
            </div>


            <div
                onClick={() => {
                    setOptions({ chatBtn: false, groupBtn: false, addBtn: false, settingBtn: true })
                    setShow({ friendChat: false, groupChat: false, searchBook: true })
                }}
                className='flex items-center justify-center cursor-pointer'>
                {options.settingBtn ? <img className='w-[30px]' src={addUserRed} alt="" srcSet="" /> : <img className='w-[30px]' src={addUserWhite} alt="" srcSet="" />}
            </div>


        </>
    )
}

export default Navbar
