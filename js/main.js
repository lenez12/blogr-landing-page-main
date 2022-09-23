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
	if ($(window).scrollTop() > 500) {
		$("header").addClass("nav-shadow");
	} else {
		$("header").removeClass("nav-shadow");
	}
});

let navDropdownClose = "nav_item_dropdown nav_item_dropdown_close";
let navDropdownOpen = "nav_item_dropdown nav_item_dropdown_open";
const navItem = document.querySelectorAll(".nav_item");
// let arrowUp = new Image();
// arrowUp.src = "../images/icon-arrow-dark.svg";
// arrowUp.style = "width:10px; height:10px; transform:rotate(180deg)";

var width = Math.max(window.screen.width, window.innerWidth);
window.addEventListener("resize", (event) => {
	width = Math.max(window.screen.width, window.innerWidth);
});

console.log(width);

const navItemDropdown = document.getElementsByClassName("nav_item_dropdown");
navItem.forEach((element) => {
	let button = element.getElementsByClassName("nav_item_content")[0];
	let child = button.getElementsByClassName("nav_item_arrow")[0];
	if (width <= 767) {
		button.addEventListener("click", function () {
			let itemClass = this.nextElementSibling.className;
			for (i = 0; i < navItemDropdown.length; i++) {
				child.className = "nav_item_arrow arrow_down";
				navItemDropdown[i].className = navDropdownClose;
				// console.log(child);
				// console.log("is this triggered " + i);
			}
			if (itemClass === navDropdownClose) {
				this.nextElementSibling.className = navDropdownOpen;
				child.className = "nav_item_arrow arrow_up";
				// console.log(child);
			}
		});
	}
});

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(document.querySelectorAll("*"), function (el) {
	if (el.offsetWidth > docWidth) {
		console.log(el);
	}
});
