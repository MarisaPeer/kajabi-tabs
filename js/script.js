$(document).ready(function(){
	
	// variables
	var tabs = $(".mp-tabs");
	
	// functions
	function checkScrolling(tabs){
		var totalTabWidth = parseInt(tabs.children(".mp-tabs-navigation").width()),
			 tabsViewport = parseInt(tabs.width());
		
		if(tabs.scrollLeft() >= totalWidth - tabsViewPort){
			tabs.parent(".mp-tabs").addClass(".is-ended");
		}
		else{
			tabs.parent(".mp-tabs").removeClass(".is-ended");
		}
	}	
	
	// call functions
	tabs.each(function(){
		var tab = $(this),
			 tabItems = tab.find("ul.mp-tabs-navigation"),
			 tabContentWrapper = tab.children(".mp-tabs-content"),
			 tabNavigation = tab.find("nav");
		
		tabItems.on("click", "a", function(event){
			event.preventDefault();
			var selectedItem = $(this);
			if(!selectedItem.hasClass("selected")){
				var selectedTab = selectedItem.data("content"),
					 selectedContent = tabContentWrapper.find("li[data-content='"+selectedTab+"']"),
					 selectedContentHeight = selectedContent.innerHeight();
				
				tabItems.find("a.selected").removeClass("selected");
				selectedItem.addClass("selected");
				selectedContent.addClass("selected").siblings("li").removeClass("selected");
				
				tabContentWrapper.animate({
					"height": selectedContentHeight
				}, 200);
			}
		});
		
		checkScrolling(tabNavigation);
		
		tabNavigation.on("scroll", function(){
			checkScrolling($(this));
		});
		
	});
	
	$(window).on("resize", function(){
		tabs.each(function(){
			var tab = $(this);
			checkScrolling(tab.find("nav"));
			tab.find(".mp-tabs-content").css("height", "auto");
		});
	});
	
});