var menuItems = document.querySelectorAll('li.sub-menu');
Array.prototype.forEach.call(menuItems, function(el, i){
	el.querySelector('a').addEventListener("click",  function(event){
		if (this.parentNode.className == "sub-menu") {
			this.parentNode.className = "sub-menu open";
			this.setAttribute('aria-expanded', "true");
		} else {
			this.parentNode.className = "sub-menu";
			this.setAttribute('aria-expanded', "false");
		}
		event.preventDefault();
		return false;
	});
});
