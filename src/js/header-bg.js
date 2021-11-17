const elem = $('header');
const scrolled = () => {
   const threshold = $(document).scrollTop() > 50;
   elem.toggleClass('scrolled', threshold);
   };
$(window).on({ scroll: scrolled });