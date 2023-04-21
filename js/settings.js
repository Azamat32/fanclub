const checkBtn = document.getElementById("check_btn_id");
const checkBtn2 = document.getElementById("check_btn_id2");
const checkBtn3 = document.getElementById("check_btn_id3");


function myFunction() {
    checkBtn.classList.toggle("check_btn_active");
    checkBtn2.classList.remove("check_btn_active");
    document.querySelector('.check_tabs1').style.display = "block";
    document.querySelector('.check_tabs2').style.display = "none";
    
}
function myFunction3() {
    checkBtn3.classList.toggle("check_btn_active");
    document.getElementById("check_tabs_form_item_id").classList.toggle("check_tabs_form_item_active");


}
function myFunction2() {
    checkBtn2.classList.toggle("check_btn_active");
    checkBtn.classList.remove("check_btn_active");
    document.querySelector('.check_tabs1').style.display = "none";

    document.querySelector('.check_tabs2').style.display = "block";

}

function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tabs");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace( " settings_active", " ");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += "settings_active";
}
document.querySelector('.settings_link').addEventListener('click', function (params) {
    document.querySelector('.tab_footer_popUP').style.display = "block"
})
document.querySelector('.popUp_cancel').addEventListener('click', function (params) {
    document.querySelector('.tab_footer_popUP').style.display = "none"
})
