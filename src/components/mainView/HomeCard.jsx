export default function HomeCard({ title = "", image = "", className = "" }) {
    return (
        <article
            className={`home-card flex h-13 items-stretch overflow-hidden rounded-lg bg-white/6 transition duration-500 ease-in-out hover:bg-white/15 ${className}`}
        >
            <div
                className="home-card__thumb h-full w-13  shrink-0 bg-zinc-700 bg-cover bg-center"
                style={image ? { backgroundImage: `url(${image})` } : undefined}
            />

            <div className="home-card__body flex min-w-0 flex-1 items-center px-3">
                <h3 className="truncate text-sm font-semibold text-white">
                    {title}
                </h3>
            </div>
        </article>
    );
}
