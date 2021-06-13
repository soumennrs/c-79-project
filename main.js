menu_list_array ={ "Chicken Tandori Pizza":
                    " Neapolitan Pizza",	
                    " Chicago Pizza	":
                   "  New York-Style Pizza",
                    " Sicilian Pizza":	
                     "Greek Pizza",
                     "California Pizza":
                    "Detroit Pizza",	
                     "Veg Supreme Pizza":}


function getmenu() {
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>'+menu_list_array[i]+'</li>'

    }
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML=htmldata;

}

function add_item() {
var htmldata
var item =document.getElementById("add_item").Value;
menu_list_array.push(item);
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0;i<menu_list_array.length;i++) {

    htmldata=htmldata+'<div class="card">'+'<img src="image/pizzaling.png"/>'+menu_list_array[i]

}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML=htmldata;

}