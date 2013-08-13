$(document).ready(function(){
var shoppingItem = 0;
var newLI = 0;
var newItem = 0;
var functionCalls = 0;
var newID = 0;
var addItem = function(){
	functionCalls++;
	var newClass = "niceCheck" + functionCalls;
	var shoppingItem = $("#itemToAdd").val();
	var newcheckBox = document.createElement("input");
	newcheckBox.setAttribute("type", "checkbox");
	newcheckBox.setAttribute("name", 'name');
	newcheckBox.setAttribute("value", "value")
	newcheckBox.setAttribute("class", newClass)
	var newItem = document.createElement("label");
	newItem.htmlFor = newClass;
	newItem.appendChild(document.createTextNode(shoppingItem));
	$("#listipoo").append(newcheckBox, newItem);
	console.log(newClass);
}
$(".addButton").on("click", addItem);


});