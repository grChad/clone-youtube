export const LOAD_INFO = 'LOAD_INFO'

const loadInfo = (newArray) => {
  return {
    type: LOAD_INFO,
    payload: newArray
  }
}

export default loadInfo
