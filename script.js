window.onload = function(){
	var modal = document.getElementById("myModal");
	var images = document.getElementsByClassName("myImg");
	var modalImg = document.getElementById("img01")

	for (var i = 0; i < images.length; i++) {
		console.log("added")
	  var img = images[i];
	  //the evt means that it is an event listener
	  img.onclick = function(evt) {
	    modal.style.display = "block";
	    modalImg.src = this.src;
	    console.log("clicked")
	  }
	}

	var span = document.getElementsByClassName("close")[0];

	span.onclick = function() {
	  modal.style.display = "none";
	}

	modal.onclick = function(){
	  modal.style.display = "none"
  }
}

