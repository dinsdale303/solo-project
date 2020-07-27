'use strict';

var inactiveMenuLink = document.querySelectorAll('.menu-list-item');
var inactivePageView = document.querySelectorAll('.view-page');

/* remove highlight menu link */
function removeLink() {
	for (var i = 0; i < inactiveMenuLink.length; i++) {
		inactiveMenuLink[i].classList.remove('link-change-view');
	}
}

/* hide page */
function removePage() {
	for (var i = 0; i < inactivePageView.length; i++) {
		inactivePageView[i].classList.remove('page-active');
		inactivePageView[i].classList.add('page-inactive');
	}
}

/* change displayed page and highlight menu link */
var changeView = function (idLink, idView) {
	var activeMenuLink = document.getElementById(idLink);
	var activePageView = document.getElementById(idView);

	removeLink();
	removePage();

	activeMenuLink.classList.add('link-change-view');
	activePageView.classList.remove('page-inactive');
	activePageView.classList.add('page-active');
}
