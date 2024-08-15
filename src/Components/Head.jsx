

const Head = () => {

    return <div className="flex gap-2 flex-col items-center md:flex-row md:justify-between px-3 xl:px-10 py-4">
        <h1 className="text-3xl font-bold text-blue-600">CONVAS</h1>
        <div className="flex gap-5 ">
            <button className="text-xl text-blue-500 border p-1 font-mono rounded-md">New Canvas</button>
            <button className="text-xl text-blue-500 border p-1 font-mono rounded-md">Past Work</button>
            <button className="text-xl text-blue-500 border p-1 font-mono rounded-md">Help</button>
        </div>
    </div>
}

export default Head;