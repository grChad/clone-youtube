import './App.scss'

// Import Components
import DisplayPlayer from './components/templates/DisplayPlayer'
import MenuInfo from './components/templates/MenuInfo'
import MenuPlayer from './components/templates/MenuPlayer'

export default function App () {
  return (
    /* eslint jsx-quotes: ['error', 'prefer-double'] */
    <div className="App">
      <DisplayPlayer />
      <main className="main">
        <MenuInfo />
        <MenuPlayer />
      </main>
    </div>
  )
}
