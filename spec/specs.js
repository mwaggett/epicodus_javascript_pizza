describe('Pizza', function() {
  it("instantiates Pizza object", function() {
    var testPizza = new Pizza(14);
    expect(testPizza.size).to.equal(14);
    expect(testPizza.toppings).to.eql([]);
  });

  it("adds toppings to pizza", function() {
    var testPizza = new Pizza(14);
    testPizza.addTopping("pepperoni");
    expect(testPizza.toppings).to.eql(["pepperoni"]);
  });

  it("calculates price of pizza", function() {
    var testPizza = new Pizza(14);
    testPizza.addTopping("pepperoni");
    expect(testPizza.price()).to.equal(14.50);
  });
});
