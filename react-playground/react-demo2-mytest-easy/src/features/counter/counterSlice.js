import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    add: state => {return {value: state.value+1} },
    minu: state => { state.value -= 1 },
    addByAmount: (state, action) => {state.value += action.payload}
  }
})

export const { add, minu, addByAmount } = counterSlice.actions
console.log('learn counterSlice ', counterSlice)
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(addByAmount(amount))
  }, 1000)
}


export default counterSlice.reducer