function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.price = function() {
  var price = parseInt(this.size);
  for (var i in this.toppings) {
    price += 0.50;
  }
  return price;
}

var totalPrice = function() {
  var total = 0;
  $.each($(".pizza"), function() {
    if ($(this).find("input[type=radio]:checked").val()) {
      var size = $(this).find("input[type=radio]:checked").val();
      var pizza = new Pizza(size);

      $.each($(this).find("input[type=checkbox]:checked"), function() {
        pizza.addTopping($(this).val());
      });
      total += pizza.price();
    }
  });
  return total;
}

var allPizzasHaveSize = function() {
  var result = true;
  $.each($(".pizza"), function() {
    if (!$(this).find("input[type=radio]:checked").val()) {
      result = false;
    }
  });
  return result;
}

$(document).ready(function() {
  $(document).on("click", "input", function() {
    $("#total").text(totalPrice());
    $("#price").show();
  });

  $(document).on("click", ".remove", function() {
      $(this).parent().remove();
      $("#total").text(totalPrice());
  });

  var quantity = 1;
  $("#add").click(function() {
    quantity++;
    $("#order").append('<div class="pizza col-md-4">' +
                        '<div id="size'+quantity+'">' +
                          '<h4>Select a size:</h4>' +
                          '<input type="radio" name="size'+quantity+'" value="12">12"' +
                          '<input type="radio" name="size'+quantity+'" value="14">14"' +
                          '<input type="radio" name="size'+quantity+'" value="16">16"' +
                          '<input type="radio" name="size'+quantity+'" value="18">18"' +
                        '</div>' +
                        '<div id="toppings'+quantity+'">' +
                          '<h4>Select toppings:</h4>' +
                          '<input type="checkbox" name="topping'+quantity+'" value="pepperoni"> Pepperoni<br>' +
                          '<input type="checkbox" name="topping'+quantity+'" value="sausage"> Sausage<br>' +
                          '<input type="checkbox" name="topping'+quantity+'" value="ham"> Ham<br>' +
                          '<input type="checkbox" name="topping'+quantity+'" value="pineapple"> Pineapple<br>' +
                          '<input type="checkbox" name="topping'+quantity+'" value="jalapenos"> Jalapenos<br>' +
                          '<input type="checkbox" name="topping'+quantity+'" value="olives"> Olives<br>' +
                        '</div>' +
                        '<span class="btn btn-danger remove">Remove Pizza</span>' +
                      '</div>');
  });

  $("#submit").click(function() {
    if (allPizzasHaveSize()) {
      $('#myModal').modal('show');
    } else {
      alert("Oops! You have not selected a size for one of your pizzas!");
    }
  });
});
