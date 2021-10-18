import Image from "next/image"
import {SearchIcon,
        GlobeAltIcon,
        MenuIcon,
        UserCircleIcon,
        UsersIcon} from "@heroicons/react/solid"
import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';


function Header() {

    // React states
    const [searchInput, setSearchInput] = useState("")
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    return (                        // z-index of 50 keeps the header in the foreground
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white
                            shadow-md py-5 px-5 md:px-10"> 
            {/* Left - Logo*/}
            <div className="relative flex items-center 
                            h-10 cursor-pointer my-auto">
                <Image 
                    src = "https://links.papareact.com/qd3"
                    layout = "fill"
                    objectFit = "contain"
                    objectPosition = "left"
                />
            </div>

            {/* Middle - Search*/}
            <div className="flex items-center md:border-2 rounded-full py-2
                            md:shadow-sm">

                <input 
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)} // e -> event
                    className="pl-5 bg-transparent outline-none flex-grow text-sm
                                text-gray-600 placeholder-gray-400" 
                    type="text" placeholder="Start your search"/>

                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white 
                                        rounded-full p-2 cursor-pointer md:mx-2"/>
            </div>

            {/* Right - Icons */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">

                <p className="hidden md:inline md:px-2 cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer"/>

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>

            {/* Checks if searchInput is not blank and renders the calendar */}
            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div>
                        <h2></h2>
                    </div>
                </div>
            )} 

        </header>
    )
}

export default Header
