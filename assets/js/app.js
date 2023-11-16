$(document).foundation();

var menuIcons = document.getElementsByClassName('menu-icon');

for (var i = 0; i < menuIcons.length; i++) {
    menuIcons[i].addEventListener('click', function() {
        var content = document.querySelector('.top-bar');
        content.classList.toggle('show-topbar');
    });
}
$('.menu-icon').click(function () {
    $(this).toggleClass('menu-button-active');
});



$(document).ready(function() {
    function closeDropdownOnClickOutside(event) {
        /*var dropdown = $('#headerMenu');
        var searchField = $('#searchField');

        if (!dropdown.is(event.target) && dropdown.has(event.target).length === 0 && !searchField.is(event.target)) {
            dropdown.foundation('close');
        }*/
    }

    $(document).on('click', closeDropdownOnClickOutside);

    $('#searchField').on('click', function(event) {
        event.stopPropagation();
    });
    $('.btn-mobile-search').click(function (){
        $('.searh-mobile').toggleClass('sm-open')
    });


});
