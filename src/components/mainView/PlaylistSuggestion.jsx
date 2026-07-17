import HomeCard from "./HomeCard"

export default function PlaylistSuggestion({library}) {
    return (
        <div className="home-main__cards mt-6 grid grid-cols-2 gap-3">
            {library.slice(0, 8).map((card) => (
                <HomeCard
                    key={card.id}
                    title={card.title}
                    image={card.image}
                />
            ))}
        </div>
    )
}