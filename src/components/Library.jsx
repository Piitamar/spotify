import LibCard from "./smallcomp/libcard"

export default function Library() {
    return (
        <section className='min-h-screen w-[20vw] bg-gray-300'>
            <h2>Library</h2>
            <LibCard name="Album Card" />
            <LibCard name="Playlist Card" />
            <LibCard name="Artist Card" />
        </section>
    )
}