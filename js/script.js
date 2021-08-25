$(document).ready(function(){
	
	// variables
	var tabs = $(".marisa-peer-tabs");
	
	// functions
	function checkScrolling(tabs){
		var totalTabWidth = parseInt(tabs.children(".marisa-peer-tabs-navigation").width()),
			 tabsViewport = parseInt(tabs.width());
		
		if(tabs.scrollLeft() >= totalWidth - tabsViewPort){
			tabs.parent(".marisa-peer-tabs").addClass(".is-ended");
		}
		else{
			tabs.parent(".marisa-peer-tabs").removeClass(".is-ended");
		}
	}	
	
	// call functions
	tabs.each(function(){
		var tab = $(this),
			 tabItems = tab.find("ul.marisa-peer-tabs-navigation"),
			 tabContentWrapper = tab.children(".marisa-peer-tabs-content"),
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
			tab.find(".marisa-peer-tabs-content").css("height", "auto");
		});
	});
	
});