// export const selectIsLoggedIn = state => state.authentification?.isLoggedIn;

export function selectIsLoggedIn(state) {
   return state.auth.isLoggedIn;
}

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;
