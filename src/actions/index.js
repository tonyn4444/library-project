export function selectBook(book) {
	return {
		type: 'SELECTED_BOOK',
		payload: book
	};
}
