function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.price = function() {
  var price = this.size;
  for (var i in this.toppings) {
    price += 0.50;
  }
  return price;
}

// $(document).ready(function() {
//
// });
