
import './App.css'
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import Background from './components/Background.jsx'
function App() {

  return (
    <div className="site-container">
      <Background />
      <Header />
      <div className="app">
        <Content />
      </div>

    </div>
  )
}

export default App
