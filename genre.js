const books = [
    { title: "Кітап атауы 1", author: "Автор 1", genre: "Ана тілі", pdf: "books/sample1.pdf", epub: "books/sample1.epub" },
    { title: "Кітап атауы 2", author: "Автор 2", genre: "Қазақ ертегілері", pdf: "books/sample2.pdf", epub: "books/sample2.epub" },
    { title: "Кітап атауы 3", author: "Автор 3", genre: "Психология", pdf: "books/sample3.pdf", epub: "books/sample3.epub" },
    { title: "Кітап атауы 4", author: "Автор 4", genre: "Ұлт ұстаздары", pdf: "books/sample4.pdf", epub: "books/sample4.epub" },
    // Добавь сюда еще книги
];

function getBooksByGenre(genre) {
    return books.filter(book => book.genre === genre);
}

function displayBooks(books) {
    const bookList = document.getElementById("bookList");
    const genreName = document.getElementById("genre-name");
    genreName.textContent = books.length ? books[0].genre : "Жанр жоқ";

    bookList.innerHTML = "";
    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p>Автор: ${book.author}</p>
            <a href="${book.pdf}" download>PDF жүктеу</a>
            <a href="${book.epub}" download>EPUB жүктеу</a>
        `;
        bookList.appendChild(bookDiv);
    });
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const genre = urlParams.get('genre');
    const genreBooks = getBooksByGenre(genre);
    displayBooks(genreBooks);
};
