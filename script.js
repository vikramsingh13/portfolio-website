$(function(){
	//heights of different sections of the index
	$homeTop = 0;
	$aboutTop = $("#about-section").position().top;
	$projectsTop = $("#projects-section").position().top;
	$resumeTop = $("#resume-section").position().top;
	$contactTop = $("#contact-section").position().top;

    /*
    $homeBottom = $("#home-section").height();
    $aboutBottom = $aboutTop + $("#about-section").height();
    $projectsBottom = $projectsTop + $("#about-section").height();
    $resumeBottom = $resumeTop + $("#about-section").height();
    $contactBottom = $contactTop + $("#about-section").height();
    */

	//navbar menu items
	$menuHome = $("#menu-home");
	$menuAbout = $("#menu-about");
	$menuProjects = $("#menu-projects");
	$menuResume = $("#menu-resume");
	$menuContact = $("#menu-contact");
	//will be used to identify highlighted navbar menu element;
	$highlightedMenuElement = $menuHome;

    $wInnerHeight = window.innerHeight / 2;
    


	//when user scrolls
	$(document).scroll(function(){
		if($contactTop <= $(window).scrollTop() + $wInnerHeight){
            //remove highlight from previously assigned element
			$highlightedMenuElement.removeClass("menu-highlight");
			//this element becomes the new highlighted element
			$highlightedMenuElement = $menuContact;
			//highlight is added to the currently highlighted element
			$menuContact.addClass("menu-highlight");
			
		} else if($resumeTop <= $(window).scrollTop() + $wInnerHeight) {
			$highlightedMenuElement.removeClass("menu-highlight");
			$highlightedMenuElement = $menuResume;
			$menuResume.addClass("menu-highlight");

		} else if($projectsTop <= $(window).scrollTop() + $wInnerHeight) {
			$highlightedMenuElement.removeClass("menu-highlight");
			$highlightedMenuElement = $menuProjects;
			$menuProjects.addClass("menu-highlight");

		} else if($aboutTop <= $(window).scrollTop() + $wInnerHeight) {
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