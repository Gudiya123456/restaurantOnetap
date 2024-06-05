import React, { useState } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import Item from './Item/Item';
import Category from './category/Index';
import Subcategory from './subcategory/Index';
import Varient from './Varient';
import Addon from './Addon';
import { AiFillHome } from "react-icons/ai";
import Index from './Item/Index';
export default function Menu() {

    const [activeTab, setActiveTab] = useState('item');
    return (
        <div>

            <ol className="flex text-gray-500 font-semibold dark:text-white-dark mb-4">
                <li>
                    <button className="hover:text-gray-500/70 dark:hover:text-white-dark/70">
                        <AiFillHome />
                    </button>
                </li>
                <li className="before:content-['/'] before:px-1.5">
                    <button type="button">Menu Management</button>
                </li>
                <li className="before:content-['/'] before:px-1.5">
                    <button className="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Items</button>
                </li>
            </ol>


            <div style={{
                position: "sticky",
                top: "76px",

            }} className='flex gap-6 bg-white  px-5 py-2 mb-4 shadow rounded-lg'>
                <button onClick={() => setActiveTab('item')}
                    className={`${activeTab == "item" ? ' before:bg-secondary text-secondary' : 'text-dark'}  inline-flex items-center -mb-[1px] before:!w-full before:absolute before:bottom-0 before:duration-700 before:h-[1px] before:left-0 before:m-auto hover:text-secondary p-5 py-3 relative `} type="button">
                    <MdFastfood color={`${activeTab == "item" ? '#805dca' : 'black'}`} size="18" />  <span className='mx-2 text-[18px]' >Items</span></button>

                <button onClick={() => setActiveTab('category')}
                    className={` ${activeTab == "category" ? ' before:bg-secondary text-secondary' : 'text-dark'} inline-flex items-center -mb-[1px] before:!w-full before:absolute before:bottom-0 before:duration-700 before:h-[1px] before:left-0 before:m-auto hover:text-secondary p-5 py-3 relative `} type="button">
                    <IoIosListBox color={`${activeTab == "category" ? '#805dca' : 'black'}`} size="18" />   <span className='mx-2'>Category</span></button>

                <button onClick={() => setActiveTab('subcategory')}
                    className={`  ${activeTab == "subcategory" ? ' before:bg-secondary text-secondary' : 'text-dark'} inline-flex items-center -mb-[1px] before:!w-full before:absolute before:bottom-0 before:duration-700 before:h-[1px] before:left-0 before:m-auto hover:text-secondary p-5 py-3 relative `} type="button">
                    <MdFastfood color={`${activeTab == "subcategory" ? '#805dca' : 'black'}`} size="18" />  <span className='mx-2'>Sub Category</span></button>

                <button onClick={() => setActiveTab('addon')}
                    className={`  ${activeTab == "addon" ? ' before:bg-secondary text-secondary' : 'text-dark'} inline-flex items-center -mb-[1px] before:!w-full before:absolute before:bottom-0 before:duration-700 before:h-[1px] before:left-0 before:m-auto hover:text-secondary p-5 py-3 relative `} type="button">
                    <MdFastfood color={`${activeTab == "addon" ? '#805dca' : 'black'}`} size="18" />  <span className='mx-2'>Addons</span></button>

                <button onClick={() => setActiveTab('variant')}
                    className={` ${activeTab == "variant" ? ' before:bg-secondary text-secondary' : 'text-dark'} inline-flex items-center -mb-[1px] before:!w-full before:absolute before:bottom-0 before:duration-700 before:h-[1px] before:left-0 before:m-auto hover:text-secondary p-5 py-3 relative`} type="button">
                    <MdFastfood color={`${activeTab == "variant" ? '#805dca' : 'black'}`} size="18" />  <span className='mx-2'>Variant</span></button>

            </div>

            <div>


                {activeTab == 'item' ? <Index /> :
                    activeTab == 'category' ? <Category /> :
                        activeTab == 'subcategory' ? <Subcategory /> :
                            activeTab == 'variant' ? <Varient /> :
                                activeTab == 'addon' ? <Addon /> :
                                    ''}




            </div>
        </div>
    )
}
