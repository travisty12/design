import './sass/styles.scss';
import $ from 'jquery';


$(document).ready(function() {
  $(".tab").click(function() {
    $(this).children('h2').toggleFade();
    $(this).children('p').toggleFade();
  });
});
