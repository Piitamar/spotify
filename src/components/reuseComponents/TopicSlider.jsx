import { useState, useEffect, useRef } from "react";

export default function TopicSlider({ topic }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const containerRef = useRef(null);
    const [slideWidth, setSlideWidth] = useState(0);

    //tính maxslide bằng chiều dài của container ref
    useEffect(() => {
        if (containerRef.current) {
            const width = containerRef.current.scrollWidth;
            setSlideWidth(width);
        }
    }, []);
    const maxSlide = Math.floor(slideWidth/220) 

    const next = () => { setCurrentSlide((prev) => (prev === maxSlide ? 0 : prev + 1)); }; 
    const prev = () => { setCurrentSlide((prev) => (prev === 0 ? maxSlide : prev - 1)); };

    return (
        <section className="relative p-2 mx-2 overflow-hidden w-57">
            <div ref={containerRef}
                className='flex gap-3 px-3 h-8 transition-transform duration-300 ease-in-out'
                style={{ transform: currentSlide !== 0 ? `translateX(-${currentSlide * 100}%)` : 'none' }}>
                {topic.map((item, index) => (
                    <div key={index}
                        className="bg-white/10 flex shadow-black shadow-2xl justify-center rounded-2xl items-center text-sm px-5 py-3 whitespace-nowrap">
                        {item}</div>
                ))}
            </div>
            <button className="z-10 absolute w-8 h-8 rounded-full pb-0.5 flex justify-center shadow-white shadow-10xl items-center text-white right-2 top-1/2 -translate-y-1/2 bg-[#2A2A2A]"
                onClick={next}
                style={{
                    opacity: currentSlide < 4 ? 1 : 0,
                    pointerEvents: currentSlide < 4 ? "auto" : "none",
                }}>
                {'>'}
            </button>
            <button className="z-10 absolute w-8 h-8 rounded-full pb-0.5 text-white shadow-2xl shadow-white left-2 top-1/2 -translate-y-1/2 bg-[#2A2A2A] flex justify-center items-center"
                onClick={prev}
                style={{
                    opacity: currentSlide > 0 ? 1 : 0,
                    pointerEvents: currentSlide > 0 ? "auto" : "none",
                }}>
                {'<'}
            </button>
        </section>
    )
}