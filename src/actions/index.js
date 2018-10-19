export function selectBook(book) {
  // selectBook is an Action Creator
  // Returns a type and a payload (an object)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
