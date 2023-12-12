document.getElementById('fetchCourses').addEventListener('click', function() {
    const displayDiv = document.getElementById('coursesDisplay');

    // Toggle the visibility of the courses table
    if (displayDiv.classList.contains('active')) {
        // If table is active, hide it
        displayDiv.classList.remove('active');
        displayDiv.style.display = 'none'; //  ensure the div is hidden
        this.textContent = 'Get My Courses';
    } else {
        // If table is hidden, show it or fetch data if not already done
        if (displayDiv.innerHTML === '') {
            this.textContent = 'Fetching...';
            fetch('courses.json')
                .then(response => response.json())
                .then(data => {
                    const table = createCoursesTable(data.courses);
                    displayDiv.appendChild(table);
                    displayDiv.classList.add('active');
                    displayDiv.style.display = 'block'; // ensure the div is shown
                    this.textContent = 'Hide Courses';
                })
                .catch(error => {
                    console.error('Fetch error: ', error);
                    this.textContent = 'Get My Courses';
                });
        } else {
            // If data is already fetched, just toggle the visibility
            displayDiv.style.display = displayDiv.style.display === 'none' ? 'block' : 'none';
            displayDiv.classList.toggle('active');
            this.textContent = displayDiv.classList.contains('active') ? 'Hide Courses' : 'Get My Courses';
        }
    }
});

function createCoursesTable(courses) {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    ['Course Code', 'Course Name', 'Status'].forEach(headerText => {
        const headerCell = document.createElement('th');
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
    });
    table.appendChild(headerRow);

    courses.forEach(course => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${course.code}</td>
            <td>${course.name}</td>
            <td>${course.status}</td>
        `;
        table.appendChild(row);
    });

    return table;
}
