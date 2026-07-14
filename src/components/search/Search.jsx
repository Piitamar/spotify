import { useUIStore } from "../../useStore"
import SearchBar from "./SearchBar"
import { FaSpotify } from "react-icons/fa";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi2";


export default function Search() {
    const setMainView = useUIStore(state => state.setMainView);

    return (
        <section className='min-w-screen h-[9vh] flex items-center px-auto bg-background'>
            <FaSpotify size={30} className="ml-3" />

            <SearchBar/>

            <h2 className="ml-20 p-2 bg-white text-black rounded-2xl px-3 font-bold text-[0.85rem] hover:scale-103">
                Khám phá premium</h2>

            <div className="ml-5 font-bold opacity-70 text-[0.85rem] flex hover:scale-103 justify-center items-center">
                <MdOutlineDownloadForOffline size={20}/>
                <h2 className="p-2 text-white text-sm">
                    Cài đặt ứng dụng
                </h2>
            </div>

            <div className="flex items-center gap-3 ml-33">
                <div className="relative group fit">
                    <BsBell size={18} className="opacity-70 hover:scale-102 hover:opacity-100"/>
                    <div className="opacity-0 group-hover:opacity-100 absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[0.85rem] bg-zinc-700 whitespace-nowrap px-3 py-1 rounded-sm">
                        Có gì mới 
                    </div>
                </div>
                
                <div className="relative group fit">
                    <HiOutlineUserGroup size={20} className="opacity-70 hover:scale-102 hover:opacity-100"/>
                    <div className="opacity-0 group-hover:opacity-100 absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[0.85rem] bg-zinc-700 whitespace-nowrap px-3 py-1 rounded-sm">
                        Hoạt động nghe 
                    </div>
                </div>
                
                <div className="flex justify-center hover:bg-white/17 transition-all duration-400 hover:scale-102 items-center w-12 h-12 bg-white/10 rounded-full">
                    <div className="flex font-bold text-sm justify-center items-center w-8 h-8 bg-orange-500 rounded-full">
                        2
                    </div>
                </div>
            </div>
        </section>
    )
}