import Search from "../components/search/Search"
import Library from "../components/Library/Library"
import Main from "../components/mainView/HomeMain"
import Player from "../components/Player"
import Playing from "../components/Playing"
import Playlist from "../components/mainView/Playlist"
import Artist from "../components/mainView/Artist"
import { useState } from "react"
import { useUIStore } from "../useStore";

export default function Home() {
    const mainView = useUIStore(state => state.mainView);

    return (
        <main className="bg-background min-h-screen min-w-screen">
            <Search/>
            <section className="flex gap-2">
                <Library/>
                {mainView === "home" && <Main/>}
                {mainView === "playlist" && <Playlist/>}
                {mainView === "artist" && <Artist/>}
                <Player/>
            </section>
            <Playing/>
        </main>
    )
}