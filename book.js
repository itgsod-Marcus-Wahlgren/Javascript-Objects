
function book(title,author,price) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.on_sale = function(discount) {
        this.price *= 1.0-discount;
    };
}
my_book = new book("bok", "jag" ,"9002");
console.log(my_book.title);
console.log(my_book.author);
console.log(my_book.price);
my_book.on_sale(0.05);

var table = document.createElement("table");
table.id = "table";
document.body.appendChild("table");

function add_book(book,table) {
    var row = document.createElement("tr");
    row.appendChild(document.createElement("td"));
    row.getElementsByTagName("tr").innerHTML;


}