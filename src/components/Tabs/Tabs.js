import React from 'react'
import './tabs.css'

const Tabs = () => {
    return (
        <div className='tabs-container'>
            <div className='sections-container'>
                <button>Section 1</button>
                <button>Section 2</button>
                <button>Section 3</button>
                <button>Section 4</button>
                <button>Section 5</button>
            </div>
            <div className='contents'>contents</div>
        </div>
    )
}

export default Tabs