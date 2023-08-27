import React, {useEffect, useState} from 'react'
import {FiX} from "react-icons/fi"
import Button from '../Button/Button'
import './tabs.css'

const Tabs = ({children, active = 0, isMobile = false}) => {
    const [activeTab, setActiveTab] = useState(0)
    const [tabsData, setTabsData] = useState([])
    const [AreTabsHidden, setAreTabsHidden] = useState(false)

    useEffect(() => {
        let data = []

        React.Children.forEach(children, child => {
            if (!React.isValidElement(child)) return
            const {children} = child.props
            data.push(children)
        })

        setTabsData(data)
    }, [children])

    useEffect(() => {
        setActiveTab(active)
    }, [active])

    useEffect(() => {

    }, [isMobile])

    return (
        <div className='tabs-container'>
            <div className="sections-container">
                {
                    isMobile ?
                        <div className='close-btn-container'>
                            <Button type='img'><FiX /></Button>
                        </div> : null
                }
                {
                    children.map((_, idx) => <button key={idx} className={`${idx === activeTab ? 'active' : null}`} onClick={() => {setActiveTab(idx)}}>Section {idx + 1}</button>)
                }
            </div>
            <div className="contents">
                {
                    tabsData.map((content, idx) => activeTab === idx ? content : null)
                }
            </div>
        </div>
    )
}

Tabs.TabPane = function TabPane({children}) {
    return <div>{children}</div>
}

export default Tabs