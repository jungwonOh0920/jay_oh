import React, {useEffect, useState} from 'react'
import './App.css'
import Tabs from './components/Tabs/Tabs'
import Mario from './components/SectionContents/Mario/Mario'
import Luigi from './components/SectionContents/Luigi/Luigi'
import Zelda from './components/SectionContents/Zelda/Zelda'
import Splatoon from './components/SectionContents/Splatoon/Splatoon'
import Kirby from './components/SectionContents/Kirby/Kirby'
import Button from './components/Button/Button'
import {FiMenu} from 'react-icons/fi'

function App() {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="App">
      <Tabs active={3} isMobile={isMobile}>
        <Tabs.TabPane><Zelda /></Tabs.TabPane>
        <Tabs.TabPane><Splatoon /></Tabs.TabPane>
        <Tabs.TabPane><Kirby /></Tabs.TabPane>
        <Tabs.TabPane><Mario /></Tabs.TabPane>
        <Tabs.TabPane><Luigi /></Tabs.TabPane>
      </Tabs>
      {
        isMobile ?
          <div className='menu-btn-container'>
            <Button type='img'><FiMenu /></Button>
          </div> : null
      }
    </div>
  );
}

export default App;
