export default function InputLabel({label, defaultValue}) {
    return <div className="flex flex-col gap-2">
        <label>{label}</label>
        <input className="border-2 border-gray-300 rounded outline-none p-1" type="text" defaultValue={defaultValue}/>
    </div>
}