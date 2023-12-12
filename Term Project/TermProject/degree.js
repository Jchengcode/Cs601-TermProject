document.getElementById('fetchData').addEventListener('click', function() {
    const displayDiv = document.getElementById('dataDisplay');

    // Toggle the visibility of the table
    if (displayDiv.classList.contains('active')) {
        displayDiv.classList.remove('active');
        displayDiv.style.display = 'none'; // Ensure the div is actually hidden
        this.textContent = 'Discover My Degrees';
    } else {
        this.textContent = 'Fetching...';
        if (displayDiv.innerHTML === '') {
            fetch('degree.json')
                .then(response => response.json())
                .then(data => {
                    const table = createTable(data.degrees);
                    displayDiv.appendChild(table);
                    displayDiv.style.display = 'block'; // Make sure the div is shown
                    displayDiv.classList.add('active');
                    this.textContent = 'Hide My Degrees';
                })
                .catch(error => {
                    console.error('Fetch error: ', error);
                    this.textContent = 'Get My Degrees';
                });
        } else {
            displayDiv.style.display = 'block'; // Make sure the div is shown
            displayDiv.classList.add('active');
            this.textContent = 'Hide My Degrees';
        }
    }
});

function createTable(degrees) {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    ['School', 'Program/Major', 'Minor', 'Type', 'Year Conferred', 'Status'].forEach(headerText => {
        const headerCell = document.createElement('th');
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
    });
    table.appendChild(headerRow);

    degrees.forEach(degree => {
        const row = document.createElement('tr');
        ['school', 'program', 'minor', 'type', 'yearConferred', 'status'].forEach(key => {
            const cell = document.createElement('td');
            cell.textContent = degree[key] || 'N/A';
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    return table;
}
