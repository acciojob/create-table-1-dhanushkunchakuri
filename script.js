function insert_Row() {
    //Write your code here
	let table=document.getElementById("sampleTable");
	let row=table.insertRow(0);
	row.innerHTML=`<tr><td>New cell1</td> 
		<td>New cell2</td></tr>`;
	
  
}
