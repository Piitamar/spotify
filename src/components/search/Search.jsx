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
                    Cài đặt ứng dụng</h2>
            </div>

            <div className="flex items-center gap-3 ml-33">
                <BsBell size={18} className="opacity-70"/>
                <HiOutlineUserGroup size={20} className="opacity-70"/>
                <div className="flex justify-center items-center w-12 h-12 bg-white/10 rounded-full">
                    <div className="flex font-bold text-sm justify-center items-center w-8 h-8 bg-orange-500 rounded-full">
                        2
                    </div>
                </div>
            </div>
        </section>
    )
}