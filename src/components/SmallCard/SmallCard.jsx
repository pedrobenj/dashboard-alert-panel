import { Bank } from "@phosphor-icons/react/dist/ssr";

export default function SmallCard({
    number = "209", 
    variant = "green",
    OnClick = () => {}
}){

    const VARIANT = {
        green: "bg-green-700 border-green-900",
        orange: "bg-orange-500 border-orange-700",
    }

    return <div onClick={OnClick} className={`cursor-pointer flex-1 min-w-32 max-w-32 max-h-20 h-20 bg-green-700 border-[2px] 
    border-green-900 rounded-xl justify-center items-center flex-col text-white ${VARIANT[variant]}`}>
                <div className="flex">
                    <Bank size={40} color="white" />
                </div>
                <div className="flex">
                    {number}
                </div>
            </div>
}