import Search from "../components/Search"
import Library from "../components/Library"
import Main from "../components/Main"
import Player from "../components/Player"
import Playing from "../components/Playing"
import { useState } from "react"

export function Home2() {
    return (
        <main className="bg-zinc-600 min-h-screen min-w-screen">
            <Search/>
            <section className="flex gap-2">
                <Library/>
                <Main/>
                <Player/>
            </section>
            <Playing/>
        </main>
    )
}