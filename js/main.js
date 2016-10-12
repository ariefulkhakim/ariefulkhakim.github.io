/* ---------------------------------------------- /*
		 * Accordion
		/* ---------------------------------------------- */

		    var acc = document.getElementsByClassName("accordion");
		    var i;

		    for (i = 0; i < acc.length; i++) {
		        acc[i].onclick = function () {
		            this.classList.toggle("active");
		            this.nextElementSibling.classList.toggle("show");
		        }
		    }

		    
function myMap() {


  var myCenter = new google.maps.LatLng(-6.8909589,109.4535288);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 18};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);

}
 
    