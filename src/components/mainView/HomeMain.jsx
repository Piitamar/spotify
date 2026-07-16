import HomeCard from "./HomeCard";
import { useState } from "react";
import useLibrary from "../Library/useLibrary";


export default function HomeMain() {
    const topicList = ['Tất cả', 'Âm nhạc', 'Postcast'];
    const [topic, setTopic] = useState('Tất cả');

    const library = useLibrary();

    return (
        <section className="home-main min-h-screen w-[60vw] overflow-hidden rounded-tl-3xl rounded-tr-3xl bg-[#111111] px-10 py-5 text-white">
            <div className='flex gap-3 h-8 transition-transform duration-300 ease-in-out'>
                {topicList.map((item, index) => (
                    <div key={index}
                        onClick={() => {setTopic(item)}}
                        style={{ backgroundColor: item === topic ? "white" : "", 
                                 color: item === topic? "black" : "white"}} 
                        className="bg-white/10 flex shadow-black shadow-2xl justify-center rounded-2xl items-center text-sm px-4 py-3 whitespace-nowrap">
                        {item}</div>
                ))}
            </div>

            <div className="home-main__cards mt-6 grid grid-cols-2 gap-3">
                {library.slice(0, 8).map((card) => (
                    <HomeCard
                        key={card.id}
                        title={card.title}
                        image={card.image}
                    />
                ))}
            </div>
        </section>
    );
}
