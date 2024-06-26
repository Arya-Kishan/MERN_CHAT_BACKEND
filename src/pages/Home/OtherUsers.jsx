import React, { useState } from 'react'
import Navbar from './Navbar'
import FriendsChat from './LEFT_SIDE/FriendsChat'
import GroupChat from './LEFT_SIDE/GroupChat'
import SearchBook from './LEFT_SIDE/SearchBook'
import OnlineUsers from './LEFT_SIDE/OnlineUsers'

const OtherUsers = () => {

    const [show, setShow] = useState({ friendChat: true, groupChat: false, onlineFriend:false, searchBook: false })


    return (
        <div className='h-full p-1 overflow-auto flex justify-evenly items-center gap-1 relative'>

            <div className='absolute bottom-0 left-0 w-full md:static md:w-[15%] h-fit md:h-full flex md:flex-col items-center justify-evenly bg-slate-950 z-5 p-2 shadow-sm shadow-slate-800 z-5'>
                <Navbar setShow={setShow} />
            </div>

            <div className='w-full md:w-[85%] h-full bg-slate-950  shadow-sm shadow-slate-800'>

                {show.friendChat && <FriendsChat />}

                {show.groupChat && <GroupChat />}

                {show.onlineFriend && <OnlineUsers />}

                {show.searchBook && <SearchBook />}

            </div>


        </div>
    )
}

export default OtherUsers
