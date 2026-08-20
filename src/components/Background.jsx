//soft drifting gradient mesh, sits behind all page content
const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute w-[600px] h-[600px] rounded-full bg-red-600/20 blur-3xl top-[-10%] left-[-10%] animate-drift-slow-right" />
            <div className="absolute w-[500px] h-[500px] rounded-full bg-amber-400/15 blur-3xl bottom-[-10%] right-[-10%] animate-drift-slow-reverse" />
            <div className="absolute w-[500px] h-[500px] rounded-full bg-green-300/15 blur-3xl bottom-[-10%] left-[-5%] animate-drift-slow-up" />
            <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-300/15 blur-3xl top-[-10%] right-[-5%] animate-drift-slow-down" />
        </div>
    )
}

export default Background;