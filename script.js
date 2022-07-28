$(function(){

	//heights of different sections of the index
	$homeHeight = 0;
	$aboutHeight = $("#about-section").position().top;
	$projectsHeight = $("#projects-section").position().top;
	$resumeHeight = $("#resume-section").position().top;
	$contactHeight = $("#contact-section").position().top;
	//navbar menu items
	$menuHome = $("#menu-home");
	$menuAbout = $("#menu-about");
	$menuProjects = $("#menu-projects");
	$menuResume = $("#menu-resume");
	$menuContact = $("#menu-contact");
	//will be used to identify highlighted navbar menu element;
	$highlightedMenuElement = $menuHome;


	//when user scrolls
	$(document).scroll(function(){
		if($(window).scrollTop() >= $contactHeight){
			//remove highlight from previously assigned element
			$highlightedMenuElement.removeClass("menu-highlight");
			//this element becomes the new highlighted element
			$highlightedMenuElement = $menuContact;
			//highlight is added to the currently highlighted element
			$menuContact.addClass("menu-highlight");
			
		} else if($(window).scrollTop() >= $resumeHeight) {
			$highlightedMenuElement.removeClass("menu-highlight");
			$highlightedMenuElement = $menuResume;
			$menuResume.addClass("menu-highlight");

		} else if($(window).scrollTop() >= $projectsHeight) {
			$highlightedMenuElement.removeClass("menu-highlight");
			$highlightedMenuElement = $menuProjects;
			$menuProjects.addClass("menu-highlight");

		} else if($(window).scrollTop() >= $aboutHeight) {
			$highlightedMenuElement.removeClass("menu-highlight");
			$highlightedMenuElement = $menuAbout;
			$menuAbout.addClass("menu-highlight");

		} else {
			$highlightedMenuElement.removeClass("menu-highlight");
			$highlightedMenuElement = $menuHome;
			$menuHome.addClass("menu-highlight");
		}

	});
});