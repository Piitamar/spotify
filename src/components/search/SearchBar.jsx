import { CiSearch } from "react-icons/ci";
import { MdHomeFilled } from "react-icons/md";


export default function SearchBar() {

    return (
        <div className=" ml-10 flex gap-2 justify-center items-center">
            <div className="relative group fit">
                <button className="p-2 bg-white/20 rounded-full hover:scale-103 transition duration-75">
                    <MdHomeFilled size={25}/>   
                </button>

                <div className="opacity-0 transition-all duration-300 group-hover:opacity-100 absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[0.85rem] bg-zinc-700 whitespace-nowrap px-3 py-1 rounded-sm">
                    Trang chủ 
                </div>
            </div>

            <div className="flex gap-3 opacity-70 transition-all duration-300 hover:bg-white/25 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] bg-white/20 w-[474px] p-2 rounded-2xl">
                <CiSearch size={25}/>
                <input type="text" placeholder="Bạn muốn phát nội dung gì?" className="w-100 text-white placeholder:text-white focus:outline-none" />
            </div>
        </div>
    )
}