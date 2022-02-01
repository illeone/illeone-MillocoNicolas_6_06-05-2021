 const displayPhotographerModale = () => {
	const modal = document.getElementById("contact__modal");
	const btn = document.querySelector(".photographer-page__contact__button");
	const close = document.querySelector(".close");
	const firstNameInput = document.getElementById("firstname");
	const lastNameInput = document.getElementById("lastname");
	const emailInput = document.getElementById("email");
	const messageInput = document.getElementById("message");
	const submitButton = document.querySelector(".form-submit-button");

	btn.addEventListener("click", () => {
		// modal.style.display = "block";
		modal.style.transform = "translateY(0px)";
		modal.style.transition = "0.8s";
	});

	close.addEventListener("click", () => {
		// modal.style.display = "none";
		
		modal.style.transition = "0.8s";
		modal.style.transform = "translateY(700px)";
		// close.stopPropagation();
		// modal.style.display = "none";
	});
	

	// submitButton.addEventListener("click", (e) => {
	// 	e.preventDefault();
	// 	console.log("Prénom:", e.target.firstname.value);
	// 	console.log("Nom:", e.target.lastname.value);
	// 	console.log("Email:", e.target.email.value);
	// 	modal.style.display = "none";
	// });

	const form = document.querySelector(".form");

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		console.log("Prénom:", e.target.firstname.value);
		console.log("Nom:", e.target.lastname.value);
		console.log("Email:", e.target.email.value);
		modal.style.transition = "0.8s";
		modal.style.transform = "translateY(700px)";
		// console.log('Message:', e.target.message.value)
	});

	document.addEventListener('keydown', function(e) {
		let keyCode = e.key;
		if (keyCode === "Escape") {
			modal.style.transform = "translateY(700px)";
			// modal.style.display = "none";
		}
	});
};

    




