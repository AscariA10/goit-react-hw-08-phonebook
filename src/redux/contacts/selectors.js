export function getContacts(state) {
   return state.contacts;
}

export function getIsLoading(state) {
   return state.contacts.isLoading;
}

export function getError(state) {
   return state.contacts.error;
}

export function getStatusFilter(state) {
   return state.filters.status;
}
