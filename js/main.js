const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.toggle("show_menu");
		navToggle.classList.toggle("nav_close");
	});
}

$(window).on("scroll", function () {
	if ($(window).scrollTop() > 200) {
		$("header").addClass("nav-shadow");
	} else {
		$("header").removeClass("nav-shadow");
	}
});
let navDropdownClose = "nav_item_dropdown nav_item_dropdown_close";
let navDropdownOpen = "nav_item_dropdown nav_item_dropdown_open";
const navItem = document.querySelectorAll(".nav_item");
const navItemDropdown = document.getElementsByClassName("nav_item_dropdown");
navItem.forEach((element) => {
	let button = element.getElementsByClassName("nav_link")[0];
	button.addEventListener("click", function () {
		let itemClass = this.nextElementSibling.className;
		console.log(navItemDropdown.length);
		for (i = 0; i < navItemDropdown.length; i++) {
			console.log(navItemDropdown[i].className);
			navItemDropdown[i].className = navDropdownClose;
		}
		if (itemClass === navDropdownClose) {
			this.nextElementSibling.className = navDropdownOpen;
		}
	});
});

function toggleNav() {}

// for (i = 0; i < accordion.length; i++) {
// 	let button = accordion[i].getElementsByClassName("nav_link")[0];
// 	button.addEventListener("click", function () {
// 		let dropdown = this.nextElementSibling;
// 		dropdown.classList.toggle("nav_item_dropdown_active");
// 	});
// }
