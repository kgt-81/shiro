window.addEventListener('scroll', header);
window.addEventListener('load', header);
function header(){
  let scrollPos=document.documentElement.scrollTop || document.body.scrollTop;
  let header = document.getElementById('header');
  let header_height = header.clientHeight;
  let concept = document.getElementById('concept');
  let concept_top = window.pageYOffset + concept.getBoundingClientRect().top;
  if ( concept_top < header_height / 2 + scrollPos ){
    header.classList.add("black");
  }else {
    header.classList.remove("black");
    // もう一度ウィンドウが要素の上に来た時
  };
  if ( scrollPos >= 40 ){
    header.classList.add("fixed");
  }else {
    header.classList.remove("fixed");
    // もう一度ウィンドウが要素の上に来た時
  };
};
let hamburger_menu = document.getElementById('hamburger-menu');
let header_menu = document.getElementById('header-menu');
hamburger_menu.addEventListener('click', function(e){
  e.preventDefault();
  if (hamburger_menu.classList.contains('open')) {
    hamburger_menu.classList.remove('open');
    header_menu.classList.remove('open');
  } else {
    hamburger_menu.classList.add('open');
    header_menu.classList.add('open');
  }
});