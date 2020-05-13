$( "#focused_holder" ).hide();

var images = [];

$(".gallery_Thumbnail").each(function() {
   imgsrc = this.src;
   images.push(imgsrc);
});

var pips = [];

$(".pip").each(function() {
   pips.push(this);
});

var focused_image = document.getElementById("focused_image");
var current_image = 0;
var current_gallery = 1;


$([document.documentElement, document.body]).animate({
		scrollLeft: $("#Gallery1").offset().left
	}, 2000, function() {
		UpdatePips();
  });

function Image_Clicked(image_number) {

	console.log("PING!!");

	current_image = image_number;

	tempPic = new Image(1400,788);
	tempPic.src = images[image_number];

	focused_image.src = tempPic.src;

	$( "#focused_holder" ).show("slow");

}

function Next() {

	if(current_image < images.length - 1) {

		current_image++;

	} else {

		current_image = 0;

	}

	tempPic = new Image(1400,788);
	tempPic.src = images[current_image];

	focused_image.src = tempPic.src;

}

function Previous() {

	if(current_image > 0) {

		current_image--;

	} else {

		current_image = images.length-1;

	}

	tempPic = new Image(1400,788);
	tempPic.src = images[current_image];

	focused_image.src = tempPic.src;

}


function Close() {

	$( "#focused_holder" ).hide();

}


function NextGallery() {

	if(current_gallery < 4) {

		current_gallery++;

	} else {

		current_gallery = 1;

	}


	$([document.documentElement, document.body]).animate({
		scrollLeft: $("#Gallery" + current_gallery).offset().left
	}, 2000, function() {
		UpdatePips();
  });

}

function PreviousGallery() {

	if(current_gallery > 1) {

		current_gallery--;

	} else {

		current_gallery = 4;

	}

	$([document.documentElement, document.body]).animate({
		scrollLeft: $("#Gallery" + current_gallery).offset().left
	}, 2000, function() {
		UpdatePips();
  });

}

function PipPressed(number) {

	current_gallery = number;
	$([document.documentElement, document.body]).animate({
		scrollLeft: $("#Gallery" + current_gallery).offset().left
	}, 2000, function() {
		UpdatePips();
  });
}

function UpdatePips() {

	for(var i = 0; i < pips.length; i++) {

		if(i == current_gallery-1) {

			pips[i].style.opacity = 1;

		} else {

			pips[i].style.opacity = 0.25;

		}

	}

}

UpdatePips();
