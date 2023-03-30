import { Dispatch, SetStateAction } from "react";

type propTypes = {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const SearchBar = ({ setIsOpen }: propTypes) => {


    return(
    <div className="flex w-4/5 m-auto absolute top-5 left-1/2 -translate-x-1/2 z-10 p-2 bg-white rounded-md">
        <img className="h-8 rounded-full mr-4" src="https://picsum.photos/700"></img>
        <input className="w-full p-1" placeholder="Search..." onClick={() => setIsOpen(true)} onChange={() => setIsOpen(true)}></input>
    </div>)
}