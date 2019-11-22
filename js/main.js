
var submitbtn = document.querySelector('.form-submit');
var userimage = document.querySelector('.user-image');
var badgeimage = document.querySelector('.badge-icon');
console.log(submitbtn);

submitbtn.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    console.log('inside event listener');
    console.log(event);
    
    badgeimage.classList.remove('d-none');
    userimage.classList.add('d-none');

    console.log('class added');

})