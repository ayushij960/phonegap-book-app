$(document).ready(function () {
    var bookCollection = [{
            "book": "The Great Gatsby",
            "author": "F. Scott Fitzgerald"
        },
        {
            "book": "To Kill a Mockingbird",
            "author": "Harper Lee"
        },
        {
            "book": "1984",
            "author": "George Orwell"
        },
        {
            "book": "Harry Potter and the Philosopher’s Stone",
            "author": "J.K. Rowling"
        },
        {
            "book": " The Lord of the Rings",
            "author": "J.R.R. Tolkien"
        },
        {
            "book": "Pride and Prejudice",
            "author": "Jane Austen"
        },
        {
            "book": "The Diary Of A Young Girl",
            "author": "Anne Frank"
        }
    ]

    function loadBooks() {
        var items = [];
        var a = bookCollection.map((item, index) => {
            items.push("<li id='" + index + "'>" + item.author + "  " + "<span class='test'>" + item.book + "<span class='glyphicon glyphicon-trash'></span></span></li>");
        });
        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo(".signIn");
    }
    $('.add-book').on('click', function () {
        $('.book-label,.author-label,.glyphicon-plus,.add-book-btn').show();
        $('.add-book').hide();
    });
    loadBooks();

    $('.add-book-btn').on('click', function () {

        var bookVal, authorVal;
        bookVal = $('.new-book').val();
        authorVal = $('.new-author').val();
        bookCollection.push({
            "book": bookVal,
            "author": authorVal
        });
        $('.book-label,.author-label,.glyphicon-plus,.add-book-btn').hide();
        $('.add-book,.glyphicon-plus').show();
        loadBooks();
        $('.my-new-list')[0].remove();
    });
    $(document).on('click', '.my-new-list .glyphicon-trash', function () {
        var remName = $(this).closest('.test').text().toLowerCase();
        $(this).closest('li').remove();
        for (var i = bookCollection.length - 1; i >= 0; i--) {
            if (bookCollection[i].book.toLowerCase() == remName) {
                bookCollection.splice(i, 1);
            }
        }
    });
    $('.glyphicon-search').on('click', function () {
        searchBook();
    });
    $('.searchField').on('keyup', function (event) {
        if (event.keyCode === 13) {
            searchBook();
        }
    });

    function searchBook() {
        $('li').css('backgroundColor', 'transparent');
        var inputVal = $('.searchField').val().toLowerCase();
        var results = [];
        var b = bookCollection.filter((item, index) => {
            if (item.book.toLowerCase() == inputVal || item.author.toLowerCase() == inputVal) {
                results.push("<li id='" + index + "'>" + item.author + "  " + "<span class='test'>" + item.book + "<span class='glyphicon glyphicon-trash'></span></span></li>");
                $('#' + index).css('backgroundColor', 'yellow');
            }
        });
    }
    $('li').on('click', function () {
        var remName = $(this).find('.test').text().toLowerCase();
        $('.pdf-viewer').attr(`src`, `pdf/${remName}.pdf`);
    });

});