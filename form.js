 const displayPhotographerModale = () => {
	const modal = document.getElementById("contact__modal");
	const btn = document.querySelector(".photographer-page__contact__button");
	const close = document.querySelector(".close");


	btn.addEventListener("click", () => {
		modal.style.transform = "translateY(0px)";
		modal.style.transition = "0.8s";
	});

	close.addEventListener("click", () => {
		modal.style.transition = "0.8s";
		modal.style.transform = "translateY(700px)";
	});

	const form = document.querySelector(".form");

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		console.log("Prénom:", e.target.firstname.value);
		console.log("Nom:", e.target.lastname.value);
		console.log("Email:", e.target.email.value);
		modal.style.transition = "0.8s";
		modal.style.transform = "translateY(700px)";
	});

	document.addEventListener('keydown', function(e) {
		let keyCode = e.key;
		if (keyCode === "Escape") {
			modal.style.transform = "translateY(700px)";
		}
	});
};

    




