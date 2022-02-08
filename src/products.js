arr = [];
function adddata() {
  var id = document.getElementById("pid").value;
  var name = document.getElementById("pname").value;
  var price = document.getElementById("pprice").value;
  console.log(id, name, price);
  data(id, name, price);
  display(arr);
}
function data(id, name, price) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].ID == id) {
      alert("already exist");
      return;
    }
  }
  product = {};
  product["ID"] = id;
  product["NAME"] = name;
  product["PRICE"] = price;
  arr.push(product);
}

function display(result) {
  var text = document.getElementById("table");
  text.innerHTML =
    "<tr>\
    <th> product ID </th>\
    <th> product NAME </th>\
    <th> product PRICE </th>\
    </tr>";
  for (let i = 0; i < result.length; i++) {
    text.innerHTML +=
      "<tr>\
    <td>" +
      result[i].ID +
      "</td>\
    <td>" +
      result[i].NAME +
      "</td>\
    <td>" +
      result[i].PRICE +
      "</td>\
    </tr>";
  }
}