var selectedRow = null;
 function onFormSubmit(){ 
var formData = readFormData();
 if(isValid()){ 
if(selectedRow == null) { 
insertNewRecord(formData); 
alert("Your details are saved Sucessfully........");
 } 
else{ 
updateRecord(formData); 
} 
resetForm();
 } 
} 

function readFormData() { 
var formData = {}; 
formData["stName"] = document.getElementById("stName").value;
 formData["stclg"] = document.getElementById("stclg").value; 
formData["stcourse"] = document.getElementById("stcourse").value;
 formData["stAge"] = document.getElementById("stAge").value;
 formData["stPlace"] = document.getElementById("stPlace").value;
 return formData; 
}

 function resetForm() { 
document.getElementById("stName").value =""; 
document.getElementById("stclg").value ="";
 document.getElementById("stcourse").value ="";
 document.getElementById("stAge").value ="";
 document.getElementById("stPlace").value =""; 
selectedRow = null; 
} 
function insertNewRecord(data){
function onEdit(td)
 {
if(confirm("Are you upadate your details"))
{ 
selectedRow=td.parentElement.parentElement; 
document.getElementById("stName").value=selectedRow.cells[0].innerHTML;
 document.getElementById("stclg").value=selectedRow.cells[1].innerHTML; 
document.getElementById("stcourse").value=selectedRow.cells[2].innerHTML; 
document.getElementById("stAge").value=selectedRow.cells[3].innerHTML; 
document.getElementById("stPlace").value=selectedRow.cells[4].innerHTML;
} 
} 
function updateRecord(formData) 
{ 
alert("Your form updated sucessfully.......") 
selectedRow.cells[0].innerHTML=formData.stName;
 selectedRow.cells[1].innerHTML=formData.stclg;
 selectedRow.cells[2].innerHTML=formData.stcourse;
 selectedRow.cells[3].innerHTML=formData.stAge;
 selectedRow.cells[4].innerHTML=formData.stPlace; 
} 
function onDelete(td) 
{ 
if(confirm("are you want to delete this record"))
{ 
row=td.parentElement.parentElement;
 document.getElementById("faclist").deleteRow(row.rowIndex);
 resetForm(); ...
}
}
function isValid(){
var a=document.getElementById("studName").value;
if(a==""|| a==null){return false;}
else
{return true;}
}
