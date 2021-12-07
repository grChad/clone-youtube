import './App.scss';

//Import Components
import DisplayPlayer from './components/templates/DisplayPlayer'
import MenuInfo from './components/templates/MenuInfo'
import ListPlayer from './components/templates/ListPlayer'

export default function App() {
  return (
    <div className="App">
      <DisplayPlayer />
      <main className="main">
        <MenuInfo />
        <ListPlayer />
      </main>
    </div>
  );
}
