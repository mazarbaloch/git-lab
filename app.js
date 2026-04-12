var orders = [
  { id: 1, customer: "Alice", total: 120, status: "new" },
  { id: 2, customer: "Bob", total: 75, status: "paid" },
  { id: 3, customer: "Charlie", total: 300, status: "shipped" },
  { id: 4, customer: "Diana", total: 20, status: "new" }
];

function processOrders(list) {
  var finalResult = [];
  var unusedValue = 999;

  for (var i = 0; i < list.length; i++) {
    var order = list[i];
    var label = "";

    if (order.status === "new") {
      if (order.total > 200) {
        label = "high-new";
      } else if (order.total > 100) {
        label = "medium-new";
      } else if (order.total > 50) {
        label = "normal-new";
      } else {
        label = "small-new";
      }
    } else if (order.status === "paid") {
      if (order.total > 200) {
        label = "high-paid";
      } else if (order.total > 100) {
        label = "medium-paid";
      } else if (order.total > 50) {
        label = "normal-paid";
      } else {
        label = "small-paid";
      }
    } else if (order.status === "shipped") {
      if (order.total > 200) {
        label = "high-shipped";
      } else if (order.total > 100) {
        label = "medium-shipped";
      } else if (order.total > 50) {
        label = "normal-shipped";
      } else {
        label = "small-shipped";
      }
    } else {
      label = "unknown";
    }

    finalResult.push({
      id: order.id,
      customer: order.customer,
      total: order.total,
      status: order.status,
      label: label
    });
  }

  return finalResult;
}

function printOrders(list) {
  for (var i = 0; i < list.length; i++) {
    console.log(
      "Order " +
        list[i].id +
        " customer=" +
        list[i].customer +
        " total=" +
        list[i].total +
        " status=" +
        list[i].status +
        " label=" +
        list[i].label
    );
  }
}

var processed = processOrders(orders);
printOrders(processed);
