$(document).ready(function() {
    // Get book ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');

    if (bookId) {

        const bookData = {
            "id": "Wfan6L9RGgYC",
            "volumeInfo": {
                "title": "The Modern Web",
                "subtitle": "Multi-device Web Development with HTML5, CSS3, and JavaScript",
                "authors": ["Peter Gasston"],
                "publisher": "No Starch Press",
                "publishedDate": "2013",
                "description": "A Guide to Modern Web Development<br>Today's web technologies are evolving at near-light speed, bringing the promise of a seamless Internet ever closer to reality...",
                "industryIdentifiers": [
                    {"type": "ISBN_10", "identifier": "1593274874"},
                    {"type": "ISBN_13", "identifier": "9781593274870"}
                ],
                "pageCount": 264,
                "categories": ["Computers / Web / Design"],
                "averageRating": 4.5,
                "imageLinks": {
                    "medium": "http://books.google.com/books/content?id=Wfan6L9RGgYC&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api"
                }
            },
            "saleInfo": {
                "saleability": "NOT_FOR_SALE"
            }
        };
        
        // Display book details
        const bookHtml = `
            <img src="${bookData.volumeInfo.imageLinks?.medium || 'placeholder.jpg'}" alt="${bookData.volumeInfo.title}">
            <div class="details">
                <h2>${bookData.volumeInfo.title}</h2>
                <p><strong>Subtitle:</strong> ${bookData.volumeInfo.subtitle || 'N/A'}</p>
                <p><strong>Author(s):</strong> ${bookData.volumeInfo.authors?.join(', ') || 'N/A'}</p>
                <p><strong>Publisher:</strong> ${bookData.volumeInfo.publisher || 'N/A'}</p>
                <p><strong>Published:</strong> ${bookData.volumeInfo.publishedDate || 'N/A'}</p>
                <p><strong>Pages:</strong> ${bookData.volumeInfo.pageCount || 'N/A'}</p>
                <p><strong>Categories:</strong> ${bookData.volumeInfo.categories?.join(', ') || 'N/A'}</p>
                <p><strong>Rating:</strong> ${bookData.volumeInfo.averageRating || 'N/A'}</p>
                <p><strong>Price:</strong> ${bookData.saleInfo.saleability === 'FOR_SALE' ? bookData.saleInfo.retailPrice?.amount + ' ' + bookData.saleInfo.retailPrice?.currencyCode : 'Not for sale'}</p>
                <p><strong>Description:</strong> ${bookData.volumeInfo.description || 'N/A'}</p>
            </div>
        `;
        $('#book-details').html(bookHtml);
    }
});