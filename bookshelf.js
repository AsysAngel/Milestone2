$(document).ready(function() {

    const mockBookshelfData = {
        "items": [
            {
                "id": "Wfan6L9RGgYC",
                "volumeInfo": {
                    "title": "The Modern Web",
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=Wfan6L9RGgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
                    }
                }
            }
        ]
    };

    mockBookshelfData.items.forEach(book => {
        const bookHtml = `
            <div class="book-item">
                <img src="${book.volumeInfo.imageLinks?.smallThumbnail || 'placeholder.jpg'}" alt="${book.volumeInfo.title}">
                <a href="book-details.html?id=${book.id}">${book.volumeInfo.title}</a>
            </div>
        `;
        $('#bookshelf-results').append(bookHtml);
    });

    // Google Books API endpoint for retrieving bookshelf volumes
    const apiUrl = `https://books.google.com/books?uid=100773965151450618089&as_coll=0&source=gbs_lp_bookshelf_list`;

    // Make API call to fetch bookshelf data
    /*$.getJSON(apiUrl, function(data) {
        if (data.items && data.items.length > 0) {
            // Clear previous content
            $('#bookshelf-results').empty();

            // Display each book
            data.items.forEach(book => {
                const title = book.volumeInfo.title || 'No Title';
                const thumbnail = book.volumeInfo.imageLinks?.smallThumbnail || 'placeholder.jpg';
                const bookHtml = `
                    <div class="book-item">
                        <img src="${thumbnail}" alt="${title}">
                        <a href="book-details.html?id=${book.id}">${title}</a>
                    </div>
                `;
                $('#bookshelf-results').append(bookHtml);
            });
        } else {
            $('#bookshelf-results').html('<p>No books found on this bookshelf.</p>');
        }
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error('Error fetching bookshelf data:', textStatus, errorThrown);
        $('#bookshelf-results').html('<p>Error loading bookshelf. Please ensure the bookshelf is public and IDs are correct.</p>');
    });*/
});