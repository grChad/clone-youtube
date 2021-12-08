import { LOAD_INFO } from '../actions/MenuInfoAction'
const defaultState = {
  returnArray: {
    title: 'Titulo Inicial',
    chanel: 'Mi channel',
    views: '0 views',
    subs: '40,234 suscriptores',
    logo: 'https://yt3.ggpht.com/yti/APfAmoEXZ6xJSGwYC7IMVFROOk1lV1krqk3m0Wbj8jhLew=s88-c-k-c0x00ffffff-no-rj-mo',
    link: ''
  }
}

const newMenuInfo = ( state = defaultState, action ) => {
  switch(action.type) {
    case LOAD_INFO:
      return {
        ...state,
        returnArray: action.payload 
      }
    default: return state
  }
}

export default newMenuInfo
