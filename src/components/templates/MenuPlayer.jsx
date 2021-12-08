import './style/menuPlayer.scss'    //Style of Sass
import ListPlayer from '../organisms/ListPlayer'  //Component
import DataJson from './Data.json'

export default function MenuPlayer() {
  return (
    <section className="sectionListPlayer">
      {DataJson.map(elem => 
        <ListPlayer 
          key={elem.id}
          titulo={elem.title}
          canal={elem.chanel}
          vistas={elem.views}
          image={elem.image}
          classId={elem.id}
        />
      )}
    </section>
  )
}
