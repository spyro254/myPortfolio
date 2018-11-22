let assignContentHeadings = () => {

}

let assignHeadings = () => {
    let headingsList = document.querySelectorAll('.heading');
//    let contentHeadingsList = document.querySelectorAll('.')
    for (i = 0; i < headingsList.length; i++) {
        let currentHeading = headingsList[i].innerHTML.toLowerCase().trim().split(' ').join('-');
        headingsList[i].addEventListener('click', function() {

            document.querySelector('#' + currentHeading).classList.toggle('content--open');
        })
    }
}

window.onload = function() {
    assignHeadings();
}
