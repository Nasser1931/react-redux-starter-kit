// ------------------------------------
// Constants
// ------------------------------------
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

// ------------------------------------
// Actions
// ------------------------------------
export function login(value = "Nasser") {
  return {
    type: USER_LOGIN,
    payload: value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export function logout(value = "") {
  return {
    type: USER_LOGOUT,
    payload: value
  }
}

export const actions = {
  login,
  logout
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [USER_LOGIN]: (state, action) => action.payload,
  [USER_LOGOUT]: (state, action) => state + action.payload,
}

// ------------------------------------
// 
// ------------------------------------
const initialState = ""
export default function userReducer(state = initialState, action) {
  console.log(state)
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
