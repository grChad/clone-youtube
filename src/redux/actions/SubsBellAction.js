export const CHANGE_BELL = 'CHANGE_BELL'

const changeBell = (valorBoll) => {
  return {
    type: CHANGE_BELL,
    payload: valorBoll
  }
}

export default changeBell
