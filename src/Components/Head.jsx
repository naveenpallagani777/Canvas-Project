import { useCanvasContext } from "../CanvasContext";

const Head = () => {
    let {change,setChange} = useCanvasContext();
    return <div className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex
            items-center justify-between z-50 bg-slate-200">
        <h1 className="text-3xl font-bold text-blue-600">CANVAS</h1>
        <div className="flex gap-5 ">
            <button className="text-xl text-blue-500 border p-1 font-mono rounded-md" onClick={() => {setChange(!change)}}>{change ? 'Help':'Canvas'}</button>
        </div>
    </div>
}

export default Head;