const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};


const table = document.querySelector('table');

document.querySelector('.addBook').addEventListener('click', () => {
    const newBook = document.createElement('tr');

    const title = document.createElement('td');
    title.textContent = 'Title';
    title.setAttribute('contenteditable', 'true');

    const author = document.createElement('td');
    author.textContent = 'Author';
    author.setAttribute('contenteditable', 'true');

    const pages = document.createElement('td');
    pages.textContent = '0';
    pages.setAttribute('contenteditable', 'true');
    pages.addEventListener('input', () => {
        pages.textConent = pages.textContent.replace(/[^0-9]/g, "");
    });

    const statusCell = document.createElement('td');
    const status = document.createElement('select');

    status.innerHTML = `
        <option value="unread">Unread</option>
        <option value="inprogress">In-Progress</option>
        <option value="complete">Complete</option>
    `;

    const removeCell = document.createElement('td');
    const remove = document.createElement('button');
    remove.classList.add('remove-btn');
    remove.textContent = 'x';

    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(pages);
    statusCell.appendChild(status);
    newBook.appendChild(statusCell);
    removeCell.appendChild(remove);
    newBook.appendChild(removeCell);

    table.appendChild(newBook);
});