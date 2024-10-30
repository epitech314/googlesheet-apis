export default function Piece({elevation, reachable}){

    let bgColor = 'bg-white';
    if(reachable === true){
        bgColor = 'bg-green-300';
    }

    return(
        <div className={`w-8 h-8 border border-1 border-black flex justify-center items-center ${bgColor}`}>
            {elevation}
        </div>
    )
}