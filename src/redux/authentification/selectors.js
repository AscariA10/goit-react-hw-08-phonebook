export const selectIsLoggedIn = state => state.authentification?.isLoggedIn;

export const selectUser = state => state.authentification?.user;

export const selectIsRefreshing = state => state.authentification?.isRefreshing;
