$(document).ready(function () {
  // Slider
  var slider = $(".range-slider-range").val();
  toogle();
  $(".range-slider-value").text("$" + slider + ".00");

  $(".range-slider-range").change(function () {
    sliderChange(this);
  });

  $(".switch > input").change(function () {
    toogle();
  });
});
//pageviews
const pageViews = (value) => {
  let views = "100";
  switch (true) {
    case 16 == value:
      views = "100";
      break;
    case 16 < value:
      views = "300";
      break;
    case 16 > value:
      views = "50";
      break;
  }
  $(".card-top-pageviews-num").text(views);
};

const sliderChange = (slider) => {
  //Change value text
  $(".range-slider-value").text("$" + $(slider).val() + ".00");
  //change slider progress
  slider.style.setProperty(
    "background",
    `linear-gradient(90deg,hsl(174, 77%, 80%) ${
      (slider.value * 100) / 32
    }%, hsl(224, 65%, 95%) 0%)`
  );
  pageViews(slider.value);
};

//toogle
const toogle = () => {
  return $(".discount-tag").toggleClass("hide-toggle", 1000, "easeOutSine");
};
