import { useUIStore } from "../../useStore";
import { TiPin } from "react-icons/ti";
import { useState, useMemo } from "react";

export default function LibCard({ name, item }) {
    const setMainView = useUIStore(state => state.setMainView);

    return (
        <section className="flex w-full p-2 gap-5 hover:bg-white/10 rounded-sm items-center">
            <div className="w-12 h-12 shrink-0 bg-purple-200 rounded-[10px]"></div>
            <div className="flex flex-col h-12 min-w-0">
                <h2 className="font-semibold truncate">{item.title}</h2>
                <div className="flex text-[0.8rem] items-center">
                    {item.pin ? <TiPin size={22} className="text-green-400" /> : null}
                    <h2>{item.itemtype} . </h2>
                    <h2>{item.itemcount}</h2>
                </div>
            </div>
        </section>
    )
}