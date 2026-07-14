import { useEffect, useState } from "react";

export function useLibrary() {
    const [library, setLibrary] = useState([]);

    useEffect(() => {
        async function getLibrary() {
            const res = await fetch("http://localhost:3001/library");
            const data = await res.json();
            setLibrary(data);
        }
        getLibrary();
    }, []);

    return library;
}

