let input = document.querySelector("#favchap");
let btn = document.querySelector(".btn");
let result_list = document.querySelector(".list");


btn.addEventListener("click", (e) => {
	let elmnt = `
		<li class="list-element">
			<span>${input.value}</span>
			<button class="delete-btn" onClick="deleteElmn(this)">x</button>
		</li>
	`; 

	result_list.innerHTML += elmnt;
});

function deleteElmn(elm) {
	elm.parentElement.remove();
}
