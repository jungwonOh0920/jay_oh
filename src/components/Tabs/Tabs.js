import React, {useEffect, useState} from 'react'
import './tabs.css'

const Tabs = ({children, active = 0}) => {
    const [activeTab, setActiveTab] = useState(0)
    const [tabsData, setTabsData] = useState([])

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
        console.log('tabsData: ', tabsData);
    }, [tabsData])

    useEffect(() => {
        setActiveTab(active)
    }, [])

    return (
        <div className='tabs-container'>
            <div className="sections-container">
                {
                    children.map((_, idx) => <button key={idx} onClick={() => {setActiveTab(idx)}}>Section {idx + 1}</button>)
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