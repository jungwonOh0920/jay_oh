import './App.css'
import Tabs from './components/Tabs/Tabs'
import Mario from './components/SectionContents/Mario'
import Zelda from './components/SectionContents/Zelda'
import Splatoon from './components/SectionContents/Splatoon'
import Kirby from './components/SectionContents/Kirby'

function App() {
  return (
    <div className="App">
      <Tabs>
        <Tabs.TabPane><Mario /></Tabs.TabPane>
        <Tabs.TabPane><Zelda /></Tabs.TabPane>
        <Tabs.TabPane><Splatoon /></Tabs.TabPane>
        <Tabs.TabPane><Kirby /></Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default App;
