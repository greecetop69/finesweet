const openPopUp = document.getElementById('open__pop__up');
const closePopUp = document.getElementById('pop__up__close');
const PopUp = document.getElementById('pop__up');




openPopUp.onclick = function() {
    PopUp.style.display = "block";


};
closePopUp.onclick = function() {
    PopUp.style.display = "none";

};