const elem = $('.header-box');
const scrolled = () => {
   const threshold = $(document).scrollTop() > 500;
   elem.toggleClass('scrolled', threshold);
   };
$(window).on({ scroll: scrolled });