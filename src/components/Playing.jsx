import { BsArrowRepeat, BsPlayFill, BsShuffle } from "react-icons/bs";
import { FiMaximize2 } from "react-icons/fi";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { MdOutlineVolumeUp } from "react-icons/md";
import { PiQueueBold } from "react-icons/pi";
import { CiMicrophoneOn } from "react-icons/ci";
import { LuMonitorDown, LuMonitorSpeaker } from "react-icons/lu";

export default function Playing() {
    return (
        <section className="player fixed bottom-0 left-0 flex h-[10vh] w-full items-center justify-between bg-black px-6 py-3 text-white">
            <div className="player__left flex w-[30%] items-center gap-3">
                <div className="player__cove bg-white/80 h-12 w-12 overflow-hidden rounded-md" />

                <div className="player__track-info flex min-w-0 flex-col">
                    <h3 className="truncate text-sm hover:underline font-medium leading-tight">
                        A New Day with Hope
                    </h3>
                    <p className="truncate text-xs hover:underline text-zinc-400">
                        Yu-Peng Chen, HOYO-MiX
                    </p>
                </div>

                <button className="player__save-btn text-zinc-300 transition hover:scale-102 hover:text-white">
                    <HiOutlinePlusCircle className="text-xl" />
                </button>
            </div>

            <div className="player__center flex w-[40%] flex-col items-center gap-1.5">
                <div className="player__controls flex items-center gap-4 text-zinc-300">
                    <button className="transition hover:text-white">
                        <BsShuffle className="text-lg" />
                    </button>

                    <button className="transition hover:text-white">
                        <IoPlaySkipBack className="text-xl" />
                    </button>

                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:scale-105">
                        <BsPlayFill className="text-2xl" />
                    </button>

                    <button className="transition hover:text-white">
                        <IoPlaySkipForward className="text-xl" />
                    </button>

                    <button className="transition hover:text-white">
                        <BsArrowRepeat className="text-lg" />
                    </button>
                </div>

                <div className="player__progress flex w-full items-center gap-3">
                    <span className="text-xs text-zinc-300">0:08</span>

                    <div className="player__progress-bar h-1 flex-1 overflow-hidden rounded-full bg-zinc-700">
                        <div className="h-full w-[8%] rounded-full bg-white" />
                    </div>

                    <span className="text-xs text-zinc-300">1:43</span>
                </div>
            </div>

            <div className="player__right flex w-[30%] items-center justify-end gap-3 text-zinc-300">
                <button className="transition text-white/50 hover:text-white">
                    <CiMicrophoneOn className="text-xl" />
                </button>

                <button className="transition hover:text-white">
                    <PiQueueBold className="text-xl" />
                </button>

                <button className="transition hover:text-white">
                    <LuMonitorSpeaker className="text-xl" />
                </button>

                <button className="transition hover:text-white">
                    <MdOutlineVolumeUp className="text-xl" />
                </button>

                <div className="player__volume flex items-center gap-2">
                    <div className="h-1 w-20 overflow-hidden rounded-full bg-zinc-700">
                        <div className="h-full w-[70%] rounded-full bg-white" />
                    </div>
                </div>

                <button className="transition hover:text-white">
                    <LuMonitorDown className="text-xl" />
                </button>

                <button className="transition hover:text-white">
                    <FiMaximize2 className="text-lg" />
                </button>
            </div>
        </section>
    );
}
