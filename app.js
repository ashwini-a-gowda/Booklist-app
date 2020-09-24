
// getting elements
const input= document.getElementById("bname");
const input1 = document.getElementById("aname");
const input2 = document.getElementById("cost");
const submit = document.querySelector('.sub');
const booklist = document.querySelector('#booklist');
const div =document.querySelector('.btn');
const box =document.querySelector('.box1');

 submit.addEventListener("click", makeList);
 
 function makeList(e){
    
  const tabletr =  document.createElement("tr");
  tabletr.className = "table";
  booklist.appendChild(tabletr);

  

   const tabletd = document.createElement("td");
   tabletd.className = "lit1";
 


   const tabletd1 = document.createElement("td");
   tabletd1.className = "list2";

   const tabletd2 = document.createElement("td");
   tabletd2.className = "list3";

   const tabletd3 = document.createElement("td");
   tabletd3.className = "list4";   
   
   const edit = document.createElement('button');
   edit.className="editbtn";
   edit.innerHTML= '<i class="fa fa-edit"></i>';
   tabletd3.appendChild(edit);
  


   const deleteList = document.createElement('button');
   deleteList.className="deletebtn";
   deleteList.innerHTML= '<i class="fa fa-trash"></i>';
   tabletd3.appendChild(deleteList);



  if (input.value==""||input1.value==""||input2.value==""){
    alert("Please enter all the fields");
  }
  else {
    tabletd.appendChild(document.createTextNode(input.value));
    tabletd1.appendChild(document.createTextNode(input1.value));
    tabletd2.appendChild(document.createTextNode(input2.value));
    
  tabletr.appendChild(tabletd);
  tabletr.appendChild(tabletd1);
  tabletr.appendChild(tabletd2);
  tabletr.appendChild(tabletd3);
  
  }

  input.value ="";
  input1.value ="";
  input2.value ="";
  e.preventDefault();

tabletr.addEventListener("click", deleteRow)
function deleteRow(e){
  // const row = e.target;
  if (e.target.parentElement.classList.contains("deletebtn")){
      
    e.target.parentElement.parentElement.parentElement.remove();
    
    //  const list = row.parentElement.parentElement;
      //  console.log(list);
      // list.remove();
      // }
  }

  if (e.target.parentElement.classList.contains("editbtn")){
    const row1 = tabletd.innerHTML;
    const row2 = tabletd1.innerHTML;
    const row3 = tabletd2.innerHTML;
    tabletd.innerHTML="<input type='text' id='book_name"+"' value='"+row1+"'>";
    tabletd1.innerHTML="<input type='text' id='author_name"+"' value='"+row2+"'>";
    tabletd2.innerHTML="<input type='text' id='price_name"+"' value='"+row3+"'>";

  }
   e.preventDefault();
} 
 }



