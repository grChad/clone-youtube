export const LOAD_INFO = 'LOAD_INFO'

const load_info = ( newArray ) => {
  return {
    type: LOAD_INFO,
    payload: newArray
  }
}

export default load_info
