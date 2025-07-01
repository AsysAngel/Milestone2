$(document).ready(function() {

     const mockData = {
        "items": [
            {
                "id": "Wfan6L9RGgYC",
                "volumeInfo": {
                    "title": "The Modern Web",
                    "subtitle": "Multi-device Web Development with HTML5, CSS3, and JavaScript",
                    "authors": ["Peter Gasston"],
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=Wfan6L9RGgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
                    }
                }
            },
        ]
    };
    
    // Check if there's a query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    const page = parseInt(urlParams.get('page')) || 1;
    const resultsPerPage = 12;
    const maxResults = 60;

    if (query) {
        // Simulate API response processing
        const results = mockData.items;
        const totalItems = Math.min(results.length, maxResults);
        const totalPages = Math.ceil(totalItems / resultsPerPage);
        const startIndex = (page - 1) * resultsPerPage;
        const endIndex = startIndex + resultsPerPage;
        const paginatedResults = results.slice(startIndex, endIndex);

        // Display results
        paginatedResults.forEach(book => {
            const bookHtml = `
                <div class="book-item">
                    <img src="${book.volumeInfo.imageLinks?.smallThumbnail || 'placeholder.jpg'}" alt="${book.volumeInfo.title}">
                    <a href="book-details.html?id=${book.id}">${book.volumeInfo.title}</a>
                </div>
            `;
            $('#results').append(bookHtml);
        });

        // Generate pagination
        let paginationHtml = '<select onchange="window.location.href=\'index.html?q=' + encodeURIComponent(query) + '&page=\' + this.value">';
        for (let i = 1; i <= totalPages; i++) {
            paginationHtml += `<option value="${i}" ${i === page ? 'selected' : ''}>Page ${i}</option>`;
        }
        paginationHtml += '</select>';
        $('#pagination').html(paginationHtml);
    }
});
