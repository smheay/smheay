//https://www.digitalocean.com/community/tutorials/an-introduction-to-jquery

$(document).ready(function () {
  // all custom jQuery will go here

  //Loads the Nav bar
  $("#nav-placeholder").load("/Content/navbar.html");


  //Sets the active class on nav bar
  $(function(){
    var current = location.pathname;
    $('#navList li a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
        }
    })
})

});
