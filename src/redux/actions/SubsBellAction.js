export const CHANGE_BELL = 'CHANGE_BELL'

const change_bell = (valorBoll) => {
  return {
    type: CHANGE_BELL,
    payload: valorBoll
  }
}

export default change_bell
