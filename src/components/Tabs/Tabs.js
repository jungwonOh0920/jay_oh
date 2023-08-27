import React, {useEffect, useState} from 'react'
import Button from '../Button/Button'
import {FiX} from "react-icons/fi"
import {FiMenu} from 'react-icons/fi'
import classNames from 'classnames'
import './tabs.css'

const Tabs = ({children, active = 0, isMobile = false}) => {
    const [activeTab, setActiveTab] = useState(0)
    const [tabsData, setTabsData] = useState([])
    const [AreSectionsHidden, setAreSectionsHidden] = useState(false)

    const sectionClassnames = classNames(
        'section-titles-container'
    )

    const sectionOuterClassnames = classNames(
        {'section-titles-mobile-outer-container': isMobile && !AreSectionsHidden},
        {'section-titles-outer-container': !isMobile},
        {'hidden': AreSectionsHidden}
    )

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
        isMobile ? setAreSectionsHidden(true) : setAreSectionsHidden(false)
    }, [isMobile])

    useEffect(() => {
        console.log('check: ', AreSectionsHidden);
    }, [AreSectionsHidden])

    const handleSectionTitleClick = (idx) => {
        setActiveTab(idx)

        // when a title is clicked, hide titles only on mobile
        if (isMobile) {
            setAreSectionsHidden(true)
        }
    }

    return (
        <div className='tabs-container'>
            {/* Hamburger Menu Button on mobile */}
            {
                isMobile && AreSectionsHidden ? <div className='menu-btn-container'>
                    <Button type='img' onClick={() => {setAreSectionsHidden(false)}}><FiMenu /></Button>
                </div> : null
            }

            {/* Section Titles */}
            <div className={sectionOuterClassnames}>
                {
                    isMobile && !AreSectionsHidden ?
                        <div className='close-btn-container'>
                            <Button type='img' onClick={() => {setAreSectionsHidden(true)}}><FiX /></Button>
                        </div> : null
                }
                <div className={sectionClassnames}>
                    {
                        children.map((_, idx) => <button key={idx} className={`${idx === activeTab ? 'active' : ''}`} onClick={() => {handleSectionTitleClick(idx)}}>Section {idx + 1}</button>)
                    }
                </div>
            </div>

            {/* Contents */}
            {
                (isMobile && AreSectionsHidden) || !isMobile ?
                    <div className="contents">
                        {
                            tabsData.map((content, idx) => activeTab === idx ? content : null)
                        }
                    </div> : null
            }
        </div>
    )
}

Tabs.TabPane = function TabPane({children}) {
    return <div>{children}</div>
}

export default Tabs