window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("siden vises");
    document.querySelector("#burgermenu_knap").addEventListener("click", clickMenu);
    //    document.querySelector("#undermenu_knap").addEventListener("click", clickUndermenu);
}


function clickMenu() {
    console.log("clickMenu");
    document.querySelector("#burgermenu_background").classList.toggle("hidden");

    if (document.querySelector("#burgermenu_knap").classList.contains("open")) {
        document.querySelector("#burgermenu_knap").classList = "closed";
    } else {
        document.querySelector("#burgermenu_knap").classList = "open";
    }
}

//function clickUndermenu() {
//    console.log("clickMenu");
//
//
//    if (document.querySelector("#undermenu_knap").classList.contains("arrow_open")) {
//        document.querySelector("#undermenu_knap").classList = "arrow_closed";
//    } else {
//        document.querySelector("#undermenu_knap").classList = "arrow_open";
//    }
//
//
//    if (document.querySelector("#undermenu").classList.contains("undermenu_open")) {
//        document.querySelector("#undermenu").classList = "undermenu_close";
//    } else {
//        document.querySelector("#undermenu").classList = "undermenu_open";
//    }
//}
