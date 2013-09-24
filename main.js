$(document).ready(function(){
var newID = 0;
var shoppingItem = 0;
var newDiv = 0;
var newcheckBox = 0;
var newItem = 0;
var functionCalls = 0;
var addItem = function(){
	functionCalls++;
	newID = "checkbox" + functionCalls;
	shoppingItem = $("#itemToAdd").val();
	newDiv = document.createElement("div");
		newDiv.setAttribute("class", "pumpkin");
	newcheckBox = document.createElement("input");
		newcheckBox.setAttribute("id", newID);
		newcheckBox.setAttribute("type", "checkbox");
	newItem = document.createElement("label");
		newItem.setAttribute("for", newID);
		newItem.appendChild(document.createTextNode(shoppingItem));
		newDiv.appendChild(newcheckBox);
		newDiv.appendChild(newItem);
	$("#listipoo").append(newDiv);
	var numListItems = $(".pumpkin").length;
	console.log(numListItems);	
	console.log( newcheckBox.id );
	$(".pumpkin").draggable({
    appendTo: "body",
    cursor: "move",
    helper: 'clone',
    revert: "invalid",
});
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
	if (numListItems > 16){ 
		var newHeight = numListItems*25;
		console.log(newHeight);
		$("#listipoo").css("height", newHeight);
		};
	};
var clearClicked = function(){
	$(".unchecked").remove();
}
$("#addButton").on("click", addItem);
$("#itemToAdd").keypress(function(e){
	if(e.which==13){
		addItem();
	};
});
$("#clearButton").on("click", clearClicked);
$("#itemToAdd").focus(function() {
		this.value = " ";
})
.blur(function() {
	if(this.value === " "){
		this.value = this.defaultValue;
	}
});
$(".dairy").droppable({
    tolerance: "intersect",
    accept: ".pumpkin",
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function(event, ui) {        
        $(this).append($(ui.draggable));
    }
});
$(".packaged").droppable({
    tolerance: "intersect",
    accept: ".pumpkin",
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function(event, ui) {        
        $(this).append($(ui.draggable));
    }
});
$(".produce").droppable({
    tolerance: "intersect",
    accept: ".pumpkin",
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function(event, ui) {        
        $(this).append($(ui.draggable));
    }
});
$(".frozen").droppable({
    tolerance: "intersect",
    accept: ".pumpkin",
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function(event, ui) {        
        $(this).append($(ui.draggable));
    }
});
$(".nonfood").droppable({
    tolerance: "intersect",
    accept: ".pumpkin",
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function(event, ui) {        
        $(this).append($(ui.draggable));
    }
});
});

