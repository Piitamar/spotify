import LibCard from "./libcard"

export default function Library() {
    return (
        <section className='min-h-screen w-[20vw] bg-gray-300'>
            <h2>Library</h2>
            <div className="flex flex-col gap-3">
                <LibCard name="home" />
                <LibCard name="playlist" />
                <LibCard name="artist" />
            </div>
        </section>
    )
}