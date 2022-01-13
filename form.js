 function displayPhotographerModale() {
	const modal = document.getElementById("contact__modal");
	const btn = document.querySelector(".photographer-page__contact__button");
	const close = document.querySelector(".close");
	const firstNameInput = document.getElementById("firstname");
	const lastNameInput = document.getElementById("lastname");
	const emailInput = document.getElementById("email");
	const messageInput = document.getElementById("message");
	const submitButton = document.getElementById("form-submit-button");


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
	

	submitButton.addEventListener("click", () => {
		modal.style.display = "none";
	});
}
displayPhotographerModale();

    




