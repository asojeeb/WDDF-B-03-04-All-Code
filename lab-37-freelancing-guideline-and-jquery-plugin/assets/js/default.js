// create a function to update the date and time
function updateDateTime() {
    // create a new `Date` object
    const now = new Date();

    // get the current date and time as a string
    const currentDateTime = now.toLocaleString();

    // update the `textContent` property of the `span` element with the `id` of `datetime`
    document.querySelector('#datetime').textContent = currentDateTime;
  }

  // call the `updateDateTime` function every second
  setInterval(updateDateTime, 1000);




  $(document).ready(function(){
    $('.my-slick').slick({
      //setting-name: setting-value
      dots: true,
      infinite: true,
      arroy: true,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 555,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]

    });
  });