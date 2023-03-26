"use strict";

// Pobieramy wszystkie elementy z klasą "dropdown"
const dropdowns = document.querySelectorAll(".dropdown");

// Dodajemy obsługę zdarzenia "click" do dokumentu
document.addEventListener("click", function (event) {
	// Sprawdzamy, czy kliknięcie nastąpiło poza elementem z klasą "dropdown"
	if (!event.target.closest(".dropdown")) {
		// Jeśli tak, to ukrywamy wszystkie aktywne dropdowny
		dropdowns.forEach(function (dropdown) {
			dropdown.querySelector(".dropdown-menu").classList.remove("active");
		});
	}
});

// Dodajemy obsługę zdarzenia "click" do każdego elementu z klasą "dropdown"
dropdowns.forEach(function (dropdown) {
	// Pobieramy element z klasą "dropdown-menu" wewnątrz bieżącego elementu "dropdown"
	const dropdownMenu = dropdown.querySelector(".dropdown-menu");

	dropdown.addEventListener("click", function () {
		// Ukrywamy wszystkie aktywne dropdowny poza bieżącym
		dropdowns.forEach(function (otherDropdown) {
			if (otherDropdown !== dropdown) {
				otherDropdown
					.querySelector(".dropdown-menu")
					.classList.remove("active");
			}
		});

		// Przełączamy stan aktywności dropdown-menu klikniętego elementu
		dropdownMenu.classList.toggle("active");
	});
});
