const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Corrected reference

button.addEventListener('click', function () {
    // Step 1: Check if input is not empty
    if (input.value.trim() !== '') {
        // Step 2: Create a new <li> element
        const li = document.createElement('li');

        // Step 3: Create a delete button
        const deleteButton = document.createElement('button');

        // Step 4: Assign values
        li.textContent = input.value;  // Set list item text
        deleteButton.textContent = 'X'; // Set delete button text
        deleteButton.classList.add('delete'); // Optional: Add class for styling

        // Step 5: Append delete button to list item
        li.append(deleteButton);

        // Step 6: Append list item to the unordered list
        list.append(li);

        // Step 7: Add an event listener to the delete button to remove the list item
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus(); // Return focus to input field
        });

        // Step 8: Clear the input field and refocus for the next entry
        input.value = '';
        input.focus();
    } else {
        alert("Please enter a book and chapter before adding."); // Optional message
        input.focus(); // Ensure input remains active
    }
});
