import React from 'react'
import { House, PlusCircle, PersonCircle, ClipboardData } from 'react-bootstrap-icons'

function BottomNavBar() {
    return (
        <nav>
            <div id='bottomnavbar-home'>
            <House />
            <p>Home</p>
            </div>
            <div id='bottomnavbar-activity'>
            <ClipboardData />
            <p>Activity</p>
            </div>
            <div id='bottomnavbar-addnew'>
            <PlusCircle />
            <p>Add new trip</p>
            </div>
            <div id='bottomnavbar-account'>
            <PersonCircle />
            <p>Account</p>
            </div>
        </nav>
    )
}

export default BottomNavBar