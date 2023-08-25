import './App.css'
import Tabs from './components/Tabs/Tabs'
import Mario from './components/SectionContents/Mario/Mario'
import Luigi from './components/SectionContents/Luigi/Luigi'
import Zelda from './components/SectionContents/Zelda/Zelda'
import Splatoon from './components/SectionContents/Splatoon/Splatoon'
import Kirby from './components/SectionContents/Kirby/Kirby'

function App() {
  return (
    <div className="App">
      <Tabs active={3}>
        <Tabs.TabPane><Zelda /></Tabs.TabPane>
        <Tabs.TabPane><Splatoon /></Tabs.TabPane>
        <Tabs.TabPane><Kirby /></Tabs.TabPane>
        <Tabs.TabPane><Mario /></Tabs.TabPane>
        <Tabs.TabPane><Luigi /></Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default App;
