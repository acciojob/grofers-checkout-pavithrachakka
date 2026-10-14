const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const allPrices=document.querySelectorAll(".prices");
	let total=0;
	allPrices.forEach((price)=>{
		total+=Number(prices.textContent);
	});
	const oldRow=document.getElementById("totalRow");
	if(oldRow) oldRow.remove();
	const table=document.querySelector("table");
	const tr=document.createElement("tr");
	const td=document.createElement("td");
	td.colSpan=2;
	td.textContent=total;
	tr.appendChild(td);
	tr.id="totalRow";
	table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

