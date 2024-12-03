let recommendedBooks = [
    { title: "Кітап атауы 1", author: "Автор 1", genre: "Ана тілі", pdf: "books/sample1.pdf", epub: "books/sample1.epub" },
    { title: "Кітап атауы 2", author: "Автор 2", genre: "Қазақ ертегілері", pdf: "books/sample2.pdf", epub: "books/sample2.epub" },
    { title: "Кітап атауы 3", author: "Автор 3", genre: "Психология", pdf: "books/sample3.pdf", epub: "books/sample3.epub" },
    // Добавь сюда еще книги
];

function displayBooks(books) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p>Авторы: ${book.author}</p>
            <a href="${book.pdf}" download>PDF жүктеу</a>
            <a href="${book.epub}" download>EPUB жүктеу</a>
        `;
        bookList.appendChild(bookDiv);
    });
}

window.onload = function() {
    displayBooks(recommendedBooks);
};
