'use strict';

var changeView = function (idLink, idView) {
	var menuLink = document.getElementById(idLink);
	var loadedPage = document.getElementById(idView);
	var inactiveMenuLink = document.querySelectorAll('.menu-list-item');
	var inactivePageView = document.querySelectorAll('.view-page');

	function removeLink() {
		for (var i = 0; i < inactiveMenuLink.length; i++) {
			inactiveMenuLink[i].classList.remove('link-change-view');
		}
	}
	removeLink();

	function removePage() {
		for (var i = 0; i < inactivePageView.length; i++) {
			inactivePageView[i].classList.remove('page-active');
			inactivePageView[i].classList.add('page-inactive');
		}
	}
	removePage();

	menuLink.classList.add('link-change-view');
	loadedPage.classList.remove('page-inactive');
	loadedPage.classList.add('page-active');
}
