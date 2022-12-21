const menuitems = window.document.getElementById('menuitems');

menuitems.style.maxHeight = "0rem";

function menutoggle(){
    if (menuitems.style.maxHeight == "0rem")
    {
        menuitems.style.maxHeight = "12.5rem";
    }
    else {
        menuitems.style.maxHeight = "0rem";
    }
}
