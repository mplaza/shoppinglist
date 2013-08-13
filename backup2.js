$(document).ready(function(){
var shoppingItem = 0;
var newLI = 0;
var newItem = 0;
var functionCalls = 0;
var newID = 0;
var addItem = function(){
	functionCalls++;
	var newID = "niceCheck" + functionCalls;
	var shoppingItem = $("#itemToAdd").val();
	var newDiv = document.createElement("div");
		newDiv.setAttribute("class", "pumpkin");
		newDiv.setAttribute("id", newID);
		var newcheckBox = document.createElement("input");
			newcheckBox.setAttribute("type", "checkbox");
			newcheckBox.setAttribute("name", 'name');
			newcheckBox.setAttribute("checked", "checked");
		var newItem = document.createElement("label");
		newItem.appendChild(document.createTextNode(shoppingItem));
	newDiv.appendChild(newcheckBox);
	newDiv.appendChild(newItem);
	$("#listipoo").append(newDiv);
	console.log(newID);
		var checkTest = function(){
		if(
			$(newcheckBox).prop("checked") == true
			)
		{
		alert("checked");
		}
	}
	checkTest();
}
$(".addButton").on("click", addItem);

});