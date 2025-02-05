# book-library

The purpose of this project is to practice using object constructors by building a library app that allows one to add and remove books and their info.

Notes:
1. Add a new book
    - click the .addBook button
    - a new editable <tr> with 5 <td>s (status has a <select>, and remove is an X button) appears within the <table>.
2. Edit book details
    - the text inside of <td>s with the class .edit-info should be editable on-click and stored when you click away
3. Dropdown menu on book status
    - unread, in-progress, red
4. Clicking X button removes book
5. Books are stored in an array (not just in the DOM)
6. Any changes to additions or removals should update both inside the array and the DOM