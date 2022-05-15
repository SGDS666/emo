
import './App.css'
import RouterBox from './router'
import { RecoilRoot } from 'recoil'
function App() {


  return (
    <div id='app'>
      <RecoilRoot>
        <RouterBox />
      </RecoilRoot>
    </div>

  )
}

export default App
