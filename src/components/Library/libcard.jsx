import { useUIStore } from "../../useStore";

export default function LibCard({name}) {
    const setMainView = useUIStore(state => state.setMainView);

    return (
        <div className="bg-gray-100 rounded-2xl mx-3 p-4"
             onClick={() => setMainView(name)}>
            card {name}
        </div>
    )
}