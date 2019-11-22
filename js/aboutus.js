var authorcard = document.querySelector('.author-cards');
var cardbody = document.querySelector('.card-body');
var plusicon = document.querySelector('.plus-icon');

authorcard.addEventListener('mouseenter', function(event) {
    console.log(event);
    cardbody.classList.add('card-body-hover');
    plusicon.classList.remove('d-none');
});

authorcard.addEventListener('mouseleave', function(event) {
    console.log(event);
    cardbody.classList.remove('card-body-hover');
    plusicon.classList.add('d-none');
});

