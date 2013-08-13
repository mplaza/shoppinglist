$(document).ready(function(){
var newID = 0;
var shoppingItem = 0;
var newDiv = 0;
var newcheckBox = 0;
var newItem = 0;
var functionCalls = 0;
var addItem = function(){
	functionCalls++;
	var newID = "checkbox" + functionCalls;
	var shoppingItem = $("#itemToAdd").val();
	var newDiv = document.createElement("div");
		newDiv.setAttribute("class", "pumpkin");
	var newcheckBox = document.createElement("input");
		newcheckBox.setAttribute("id", newID);
		newcheckBox.setAttribute("type", "checkbox");
	var newItem = document.createElement("label");
		newItem.setAttribute("for", newID);
		newItem.appendChild(document.createTextNode(shoppingItem));
		newDiv.appendChild(newcheckBox);
		newDiv.appendChild(newItem);
	$("#listipoo").append(newDiv);	
	console.log( newcheckBox.id );
	$(newcheckBox).change( function (){
	if(this.checked){
		console.log("checked");
		$(this).parent().removeClass("pumpkin").addClass("unchecked");
		}
		else if ($(this).parent().hasClass("unchecked")){
			$(this).parent().removeClass("unchecked").addClass("pumpkin");
		}
		else{
			console.log("no idea");
		}
	});
	};
var clearClicked = function(){
	console.log("fired");
	$(".unchecked").remove();
}
$(".addButton").on("click", addItem);
$("#clearButton").on("click", clearClicked);
});