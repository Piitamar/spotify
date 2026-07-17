import { RiExpandDiagonalLine } from "react-icons/ri";
import { useState, useRef, useEffect } from "react";
import TopicSlider from "../reuseComponents/TopicSlider";
import { CiSearch } from "react-icons/ci";
import { IoIosList } from "react-icons/io";
import LibCard from "./libcard";
import useLibrary from "./useLibrary";

export default function Library() {
    const topic = ['playlist', 'nghệ sĩ', 'bài hát', 'danh sách phát', 'album', 'video', 'podcast', 'thể loại', 'tác giả', 'thư viện'];
    const library = useLibrary();

    return (
        <section className='library h-screen overflow-hidden pr-2 overflow-y-auto xs:w-[5vw] w-[20vw] bg-white/8 ml-2 rounded-sm'>
            <section className="fixedlib sticky mb-2 top-0 bg-[#141414] w-full">
                <div className="topnav flex justify-between">
                    <h2 className="my-3 mx-2 font-bold">Thư viện</h2>
                    <div className="rightTopnav text-white/70 flex items-center gap-5 mr-5">
                        <h3 className='text-2xl bg-white/10 shadow-[inset_0_0_6px_rgba(255,255,255,0.01)] w-9 h-9 rounded-full text-center'>+</h3>
                        <RiExpandDiagonalLine size={15} />
                    </div>
                </div>

                <TopicSlider topic={topic} />

                <section className="smallSearch justify-between items-center flex w-full h-8">
                    <CiSearch size={22} />
                    <div className="text-white/80 flex gap-2 justify-center items-center">
                        <span className="text-[0.9rem]">Gần đây</span>
                        <IoIosList size={22} />
                    </div>
                </section>
            </section>
                {library.map((item) => (<LibCard item={item} />))}
        </section>
    )
}