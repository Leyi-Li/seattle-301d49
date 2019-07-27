
function init() {
  // safe to test jQuery stuff now
  
  $('img#my_img').on('click', function(event){
    let new_src = {src: 'new_text_image.jpg'};
    $(this).attr('src', new_src);
  });
}

$(() => {
  init();
});
