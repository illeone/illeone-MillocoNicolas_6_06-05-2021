async function displayPhotographerModale() {
	const modal = document.getElementById("contact__modal");
	const btn = document.querySelector(".photographer-page__contact__button");
	const close = document.getElementsByClassName("close")[0];
	const firstNameInput = document.getElementById("firstname");
	const lastNameInput = document.getElementById("lastname");
	const emailInput = document.getElementById("email");
	const messageInput = document.getElementById("message");
	const submitButton = document.getElementById("form-submit-button");
  

	btn.onclick = function () {
		modal.style.display = "block";
	};

	close.onclick = function () {
		modal.style.display = "none";
	};


	submitButton.addEventListener("click", () => {
		modal.style.display = "none";
	});
}
displayPhotographerModale();





