// filterknop om het filter te verbergen

function verbergFilter() {
	var x = document.getElementById("hideandshow");
	if (x.style.display === "none") {
	x.style.display = "block";
	} else {
	x.style.display = "none";
	}
}



// openen van zoekknop

//declaratie van dom elementen
var zoekveld = document.querySelector('body>header');
var zoekbutton = document.querySelector('body>header>button');

//actie !
zoekbutton.addEventListener("click",function(){
	zoekveld.classList.toggle('show-search');
});

