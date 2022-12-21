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
	$menuHome = $("#menu-home>a");
    $menuAbout = $("#menu-about>a");
	$menuProjects = $("#menu-projects>a");
	$menuResume = $("#menu-resume>a");
	$menuContact = $("#menu-contact>a");
	//will be used to identify highlighted navbar menu element;
	$highlightedMenuElement = $menuHome;

    $wInnerHeight = window.innerHeight / 2;
    


	//when user scrolls
	$(document).scroll(function(){
		if($contactTop <= $(window).scrollTop() + $wInnerHeight){
            //remove highlight from previously assigned element
			$highlightedMenuElement.removeClass("active");
			//this element becomes the new highlighted element
			$highlightedMenuElement = $menuContact;
			//highlight is added to the currently highlighted element
			$menuContact.addClass("active");
			
		} else if($resumeTop <= $(window).scrollTop() + $wInnerHeight) {
			$highlightedMenuElement.removeClass("active");
			$highlightedMenuElement = $menuResume;
			$menuResume.addClass("active");

		} else if($projectsTop <= $(window).scrollTop() + $wInnerHeight) {
			$highlightedMenuElement.removeClass("active");
			$highlightedMenuElement = $menuProjects;
			$menuProjects.addClass("active");

		} else if($aboutTop <= $(window).scrollTop() + $wInnerHeight) {
			$highlightedMenuElement.removeClass("active");
			$highlightedMenuElement = $menuAbout;
			$menuAbout.addClass("active");

		} else {
			$highlightedMenuElement.removeClass("active");
			$highlightedMenuElement = $menuHome;
			$menuHome.addClass("active");
		}

	});
});