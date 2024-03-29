
$("#next_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#second_whole_page").offset().top
    }, 1000);
});

$("#view_park_next_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#your_park").offset().top
    }, 1000);
});


// beta modal stuff
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






  var byProperty = [], byColor = [], byLocation = [];

  		$("input[name=fl-colour]").on( "change", function() {
  			if (this.checked) byProperty.push("[data-category~='" + $(this).attr("value") + "']");
  			else removeA(byProperty, "[data-category~='" + $(this).attr("value") + "']");
  		});

  		$("input[name=fl-size]").on( "change", function() {
  			if (this.checked) byColor.push("[data-category~='" + $(this).attr("value") + "']");
  			else removeA(byColor, "[data-category~='" + $(this).attr("value") + "']");
  		});

  		$("input[name=fl-cont]").on( "change", function() {
  			if (this.checked) byLocation.push("[data-category~='" + $(this).attr("value") + "']");
  			else removeA(byLocation, "[data-category~='" + $(this).attr("value") + "']");
  		});

  		$("input").on( "change", function() {
  			var str = "Include items \n";
  			var selector = '', cselector = '', nselector = '';

  			var $lis = $('.parks > div'),
  				$checked = $('input:checked');

  			if ($checked.length) {

  				if (byProperty.length) {
  					if (str == "Include items \n") {
  						str += "    " + "with (" +  byProperty.join(',') + ")\n";
  						$($('input[name=fl-colour]:checked')).each(function(index, byProperty){
  							if(selector === '') {
  								selector += "[data-category~='" + byProperty.id + "']";
  							} else {
  								selector += ",[data-category~='" + byProperty.id + "']";
  							}
  						});
  					} else {
  						str += "    AND " + "with (" +  byProperty.join(' OR ') + ")\n";
  						$($('input[name=fl-size]:checked')).each(function(index, byProperty){
  							selector += "[data-category~='" + byProperty.id + "']";
  						});
  					}
  				}

				if (byColor.length) {
  					if (str == "Include items \n") {
  						str += "    " + "with (" +  byColor.join(' OR ') + ")\n";
  						$($('input[name=fl-size]:checked')).each(function(index, byColor){
  							if(selector === '') {
  								selector += "[data-category~='" + byColor.id + "']";
  							} else {
  								selector += ",[data-category~='" + byColor.id + "']";
  							}
  						});
  					} else {
  						str += "    AND " + "with (" +  byColor.join(' OR ') + ")\n";
  						$($('input[name=fl-size]:checked')).each(function(index, byColor){
  							if(cselector === '') {
  								cselector += "[data-category~='" + byColor.id + "']";
  							} else {
  								cselector += ",[data-category~='" + byColor.id + "']";
  							}
  						});
  					}
  				}

  				if (byLocation.length) {
  					if (str == "Include items \n") {
  						str += "    " + "with (" +  byLocation.join(' OR ') + ")\n";
  						$($('input[name=fl-cont]:checked')).each(function(index, byLocation){
  							if(selector === '') {
  								selector += "[data-category~='" + byLocation.id + "']";
  							} else {
  								selector += ",[data-category~='" + byLocation.id + "']";
  							}
  						});
  					} else {
  						str += "    AND " + "with (" +  byLocation.join(' OR ') + ")\n";
  						$($('input[name=fl-cont]:checked')).each(function(index, byLocation){
  							if(nselector === '') {
  								nselector += "[data-category~='" + byLocation.id + "']";
  							} else {
  								nselector += ",[data-category~='" + byLocation.id + "']";
  							}
  						});
  					}
  				}

  				$lis.hide();
  				console.log(selector);
  				console.log(cselector);
  				console.log(nselector);

  				if (cselector === '' && nselector === '') {
  					$('.parks > div').filter(selector).show();
  				} else if (cselector === '') {
  					$('.parks > div').filter(selector).filter(nselector).show();
  				} else if (nselector === '') {
  					$('.parks > div').filter(selector).filter(cselector).show();
  				} else {
  					$('.parks > div').filter(selector).filter(cselector).filter(nselector).show();
  				}

  			} else {
  				$lis.show();
  			}

  			$("#result").html(str);

  		});

  		function removeA(arr) {
  			var what, a = arguments, L = a.length, ax;
  			while (L > 1 && arr.length) {
  				what = a[--L];
  				while ((ax= arr.indexOf(what)) !== -1) {
  					arr.splice(ax, 1);
  				}
  			}
  			return arr;
  		}
