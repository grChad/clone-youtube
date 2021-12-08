import { useSelector } from 'react-redux'

import './style/displayPlayer.scss'
import Loading from '../../img/loading.jpeg'

export default function DisplayPlayer() {
  const newMenuInfo = useSelector(state => state.newMenuInfo.returnArray)

  return (
    <header className="header">
      {newMenuInfo.id &&
        <>
          <img src={Loading} alt="Loading.." className="imgLoading"/>
          <iframe src={newMenuInfo.link} title="YouTube video player" frameborder="0" allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </>
      }
    </header>
  )
}
