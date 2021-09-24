var array = ["Siva", "Aneesh", "Lokesh", "Mani", "Balaji"];
var newarr=[];

$("#get-name").click(function() {
    var inputval = $("#name").val().toUpperCase();
	for(i=0;i<array.length;i++){
		var x=array[i].toUpperCase();
		newarr.push(x);
	}
    var checkValueExist = $.inArray(inputval, newarr);
    if(checkValueExist >= 0){
        alert("yes");
    } else {
        alert("No");
    } 
});














// var array = ["Siva", "Aneesh", "Lokesh", "Mani", "Balaji"];
// $("#get-name").click(function() {
//     var inputval = $("#name").val();
//     var checkValueExist = $.inArray(inputval, array);
//     if(checkValueExist > -1){
//         alert("yes");
//     } else {
//         alert("No");
//     }
    
// });










// function newfunction(){
    
//     for (var i=0; i<document.getElementById("allinall").value; i++)
//     {
//     var vas = document.createElement("li");
//     vas.innerHTML = i;
//     document.getElementById('new').appendChild(vas);    
//     } 
// }

// function oddnum(){
//     for (var i=1; i<=document.getElementById("allinall").value; i++) {
//     if (i % 2 !== 0) {
//         var vas = document.createElement("li");
//         vas.innerHTML = i;
//         document.getElementById('num-odd').appendChild(vas);    
//         }
//     }
// }

// function evennum(){
//     for (var i=1; i<=document.getElementById("allinall").value; i++) {
//     if (i % 2 == 0) {
//         var vas = document.createElement("li");
//         vas.innerHTML = i;
//         document.getElementById('num-even').appendChild(vas);    
//         }
//     }
// }    

// function decresing(){
    
//     for (var i=20; i>=document.getElementById("allinall").value; i--)
//     {
//     var vas = document.createElement("li");
//     vas.innerHTML = i;
//     document.getElementById('num-decr').appendChild(vas);    
//     } 
// }