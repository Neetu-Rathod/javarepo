var Category = /** @class */ (function () {
    function Category(id, name) {
        this.id = id;
        this.name = name;
    }
    return Category;
}());
var Product = /** @class */ (function () {
    function Product(productId, productName, productPrice, productStock, category) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productStock = productStock;
        this.category = category;
    }
    Product.prototype.Display = function () {
        var _a, _b;
        console.log("id ".concat((_a = this.category) === null || _a === void 0 ? void 0 : _a.id, ",name ").concat((_b = this.category) === null || _b === void 0 ? void 0 : _b.name));
        console.log("id ".concat(this.productId, ",name ").concat(this.productName, ",productprice ").concat(this.productPrice, ",Stock ").concat(this.productStock, ",cat ").concat(this.category));
    };
    return Product;
}());
var cat = new Category(101, "neetu");
var pro = new Product(102, "neetu", 500, true, cat);
pro.Display();
