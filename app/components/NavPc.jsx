'use client'
import Image from "next/image";
import { FaBriefcase, FaHome, FaSearch, FaUser, FaUserFriends } from 'react-icons/fa';
import { LuMessageCircleMore } from "react-icons/lu";
import { IoNotifications } from "react-icons/io5";
import { useState } from "react";

const NavPc = () => {
    const [selectedTab, setSelectedTab] = useState('home');

    const handleClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div className="flex md:px-24 px-1 w-full py-3 md:justify-between justify-center gap-2">
        <div className="md:hidden flex">
            <FaUser className="w-8 h-8"/>
        </div>
            <div className="flex gap-2 items-center">
                <Image src='/images/logo.png' width={48} height={48} objectFit="cover" className="w-10 h-10 rounded-sm md:flex hidden" />
                <div className="flex p-2 items-center gap-2 rounded-sm bg-slate-100 w-[-webkit-fill-available]" style={{width: '-webkit-fill-available'}}>
                    <FaSearch className="w-4 h-4" />
                    <input type="text" className="outline-none bg-transparent" placeholder="Search" />
                </div>
            </div>
            <div className=" gap-4 list-none md:flex hidden">
                <li
                    className={`flex flex-col gap-1 items-center cursor-pointer transition ease-in ${selectedTab === 'home' && 'border-b-2 border-black'}`}
                    onClick={() => handleClick('home')}
                >
                    <FaHome className='w-6 h-6' />
                    <span className="text-base">Home</span>
                </li>
                <li
                    className={`flex flex-col gap-1 items-center cursor-pointer transition ease-in ${selectedTab === 'network' && 'border-b-2 border-black'}`}
                    onClick={() => handleClick('network')}
                >
                    <FaUserFriends className="w-6 h-6" />
                    <span className="text-base">My Network</span>
                </li>
                <li
                    className={`flex flex-col gap-1 items-center cursor-pointer transition ease-in ${selectedTab === 'jobs' && 'border-b-2 border-black'}`}
                    onClick={() => handleClick('jobs')}
                >
                    <FaBriefcase className="w-6 h-6" />
                    <span className="text-base">Jobs</span>
                </li>
                <li
                    className={`flex flex-col gap-1 items-center cursor-pointer transition ease-in ${selectedTab === 'messages' && 'border-b-2 border-black'}`}
                    onClick={() => handleClick('messages')}
                >
                    <LuMessageCircleMore className="w-6 h-6" />
                    <span className="text-base">Messages</span>
                </li>
                <li
                    className={`flex flex-col gap-1 items-center cursor-pointer transition ease-in ${selectedTab === 'notification' && 'border-b-2 border-black'}`}
                    onClick={() => handleClick('notification')}
                >
                    <IoNotifications className="w-6 h-6" />
                    <span className="text-base">Notification</span>
                </li>
                <li
                    className={`flex flex-col gap-1 items-center cursor-pointer transition ease-in ${selectedTab === 'user' && 'border-b-2 border-black'}`}
                    onClick={() => handleClick('me')}
                >
                    <FaUser className="w-6 h-6" />
                    <span className="text-base">Me</span>
                </li>
            </div>
        </div>
    );
};

export default NavPc;
