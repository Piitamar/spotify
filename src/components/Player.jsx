import { CiCirclePlus } from "react-icons/ci";

export default function Player() {
    return (
        <section className="min-h-screen w-[20vw] bg-[#121212] py-5 px-3">
            <section className="isPlayingSection">
                <h2 className="text-xl font-bold">相見歡OST</h2>
                <div className="w-full h-57 bg-white/10 rounded-sm my-5"></div>

                <div className="mt-5 flex items-start justify-between">
                    <div>
                        <h1 className="text-[18px] font-bold leading-tight">Air</h1>
                        <p className="mt-1 text-sm text-zinc-400">mamomo</p>
                    </div>
                    <button className="text-zinc-400 hover:text-white">
                        <CiCirclePlus size={20} />
                    </button>
                </div>
            </section>

            <section className="introductionAboutArtist rounded-sm relative w-full bg-white/20 my-3 h-80 overflow-hidden">
                <div className="imageHolder w-full h-30 bg-white/30"></div>
                <h2 className="absolute top-2 left-3">Gioi thieu ve nghe si</h2>

                <div className="p-4">
                    <h2 className="font-bold">artist name</h2>
                    <div className="flex mt-2 items-end">
                        <p className="flex-1/3">100000 nguoi nghe hang thang</p>
                        <button className="px-2 h-8 border border-white rounded-2xl">theo doi</button>
                    </div>
                    <p className="my-5 text-sm">hi, i am an artist...</p>
                </div>

            </section>

        </section>
    );
}
