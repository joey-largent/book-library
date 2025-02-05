const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

const table = document.querySelector('table');

function addBookToLib() {
    const newBook = new Book("Title", "Author", 0, "unread");
    myLibrary.push(newBook);

    const newRow = document.createElement('tr');
    newRow.setAttribute('data-index', myLibrary.length - 1);

    const title = document.createElement('td');
    title.textContent = 'Title';
    title.setAttribute('contenteditable', 'true');
    title.addEventListener('input', () => {
        let index = parseInt(newRow.getAttribute('data-index'));
        myLibrary[index].title = title.textContent;
        console.log(myLibrary);
    });

    const author = document.createElement('td');
    author.textContent = 'Author';
    author.setAttribute('contenteditable', 'true');
    author.addEventListener('input', () => {
        let index = parseInt(newRow.getAttribute('data-index'));
        myLibrary[index].author = author.textContent;
        console.log(myLibrary);
    });

    const pages = document.createElement('td');
    pages.textContent = '0';
    pages.setAttribute('contenteditable', 'true');
    pages.addEventListener('input', () => {
        pages.textContent = pages.textContent.replace(/[^0-9]/g, "");
        let index = parseInt(newRow.getAttribute('data-index'));
        myLibrary[index].pages = pages.textContent;
        console.log(myLibrary);
    });

    const statusCell = document.createElement('td');
    const status = document.createElement('select');
    status.addEventListener('change', () => {
        let index = parseInt(newRow.getAttribute('data-index'));
        myLibrary[index].status = status.value;
        console.log(myLibrary);
    });

    status.innerHTML = `
        <option value="unread">Unread</option>
        <option value="inprogress">In-Progress</option>
        <option value="complete">Complete</option>
    `;

    const removeCell = document.createElement('td');
    const remove = document.createElement('button');
    remove.classList.add('remove-btn');
    remove.textContent = 'x';

    newRow.appendChild(title);
    newRow.appendChild(author);
    newRow.appendChild(pages);
    statusCell.appendChild(status);
    newRow.appendChild(statusCell);
    removeCell.appendChild(remove);
    newRow.appendChild(removeCell);

    table.appendChild(newRow);
}

document.querySelector('.addBook').addEventListener('click', () => {
   addBookToLib();
});
