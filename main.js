const app = new Vue({
    el: '#app',
    data: {
        books: [],
        search: "",
        loader: true,
    },
    created() {
        this.getData();
    },
    methods: {
        getData: async function () {
            var url = "https://api.myjson.com/bins/zyv02"

            this.books = await
            fetch(url, {
                    method: 'GET',
                })
                .then(response => response.json())
                .then(data => data.books)
                .catch(error => console.log(error))
                this.loader= false;
            console.log(this.books)
        },
    },
    computed: {
        filteredBooks: function () {
            return this.books.filter((book) => {
                if (book.title.toLowerCase().match(this.search.toLowerCase()) || book.description.toLowerCase().match(this.search.toLowerCase()) ||
                    book.language.toLowerCase().match(this.search.toLowerCase()) || book.cover.toLowerCase().match(this.search.toLowerCase())) {
                    return book;
                }
            })
        }
    },
});
