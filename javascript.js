function showsearch(){
  document.getElementById('searchbar').style.display = "flex";
  document.getElementById('accdetails2').style.display = "flex";
}
function hidesearch(){
  document.getElementById('searchbar').style.display = "none";
  document.getElementById('accdetails2').style.display = "none";
}
function showaccount(){
  document.getElementById('account').style.display = "flex";
}
function hideaccount(){
  document.getElementById('account').style.display = "none";
}
function shownavigation(){
document.getElementById('mobile').style.display = "flex";
}
function hidenavigation(){
document.getElementById('mobile').style.display = "none";
}

function showsignup(){
    document.getElementById("box2").style.display = "flex";
    document.getElementById("box3").style.display = "none";
    document.getElementById("logintop").style.display = "none";
    document.getElementById("signuptop").style.display = "flex";
    document.getElementById("logincontainer").style.height = "50vw";
}
function showlogin(){
    document.getElementById("box2").style.display = "none";
    document.getElementById("box3").style.display = "flex";
    document.getElementById("logintop").style.display = "flex";
    document.getElementById("signuptop").style.display = "none";
    document.getElementById("logincontainer").style.height = "45vw";
}

function topay(){
  document.getElementById("order1").style.display = "flex";
  document.getElementById("order2").style.display = "none";
  document.getElementById("order3").style.display = "none";
}
function toship(){
  document.getElementById("order1").style.display = "flex";
  document.getElementById("order2").style.display = "none";
  document.getElementById("order3").style.display = "none";
}
function toreceive(){
  document.getElementById("order1").style.display = "none";
  document.getElementById("order2").style.display = "flex";
  document.getElementById("order3").style.display = "none";
}
function toreview(){
  document.getElementById("order1").style.display = "none";
  document.getElementById("order2").style.display = "none";
  document.getElementById("order3").style.display = "flex";
}


function dashboardadmin(){
  document.getElementById("dashboardadmin").style.display = "flex";
  document.getElementById("ordersadmin").style.display = "none";
  document.getElementById("inventoryadmin").style.display = "none";
  document.getElementById("notificationadmin").style.display = "none";
  document.getElementById("useraccountsadmin").style.display = "none";
  document.getElementById("newsadmin").style.display = "none";
  document.getElementById("settingsadmin").style.display = "none";
}

function ordersadmin(){
  document.getElementById("dashboardadmin").style.display = "none";
  document.getElementById("ordersadmin").style.display = "flex";
  document.getElementById("inventoryadmin").style.display = "none";
  document.getElementById("notificationadmin").style.display = "none";
  document.getElementById("useraccountsadmin").style.display = "none";
  document.getElementById("newsadmin").style.display = "none";
  document.getElementById("settingsadmin").style.display = "none";
}

function pends(){
  document.getElementById("pendingorders").style.display = "flex";
  document.getElementById("requestorders").style.display = "none";
  document.getElementById("onshiporders").style.display = "none";
  document.getElementById("completedorders").style.display = "none";
}
function reqs(){
  document.getElementById("pendingorders").style.display = "none";
  document.getElementById("requestorders").style.display = "flex";
  document.getElementById("onshiporders").style.display = "none";
  document.getElementById("completedorders").style.display = "none";
}
function onships(){
  document.getElementById("pendingorders").style.display = "none";
  document.getElementById("requestorders").style.display = "none";
  document.getElementById("onshiporders").style.display = "flex";
  document.getElementById("completedorders").style.display = "none";

}
function completes(){
  document.getElementById("pendingorders").style.display = "none";
  document.getElementById("requestorders").style.display = "none";
  document.getElementById("onshiporders").style.display = "none";
  document.getElementById("completedorders").style.display = "flex";

}

function inventoryadmin(){
  document.getElementById("dashboardadmin").style.display = "none";
  document.getElementById("ordersadmin").style.display = "none";
  document.getElementById("inventoryadmin").style.display = "flex";
  document.getElementById("notificationadmin").style.display = "none";
  document.getElementById("useraccountsadmin").style.display = "none";
  document.getElementById("newsadmin").style.display = "none";
  document.getElementById("settingsadmin").style.display = "none";
}

function notificationadmin(){
  document.getElementById("dashboardadmin").style.display = "none";
  document.getElementById("ordersadmin").style.display = "none";
  document.getElementById("inventoryadmin").style.display = "none";
  document.getElementById("notificationadmin").style.display = "flex";
  document.getElementById("useraccountsadmin").style.display = "none";
  document.getElementById("newsadmin").style.display = "none";
  document.getElementById("settingsadmin").style.display = "none";
}

function useraccountsadmin(){
  document.getElementById("dashboardadmin").style.display = "none";
  document.getElementById("ordersadmin").style.display = "none";
  document.getElementById("inventoryadmin").style.display = "none";
  document.getElementById("notificationadmin").style.display = "none";
  document.getElementById("useraccountsadmin").style.display = "flex";
  document.getElementById("newsadmin").style.display = "none";
  document.getElementById("settingsadmin").style.display = "none";
}

function newsadmin(){
  document.getElementById("dashboardadmin").style.display = "none";
  document.getElementById("ordersadmin").style.display = "none";
  document.getElementById("inventoryadmin").style.display = "none";
  document.getElementById("notificationadmin").style.display = "none";
  document.getElementById("useraccountsadmin").style.display = "none";
  document.getElementById("newsadmin").style.display = "flex";
  document.getElementById("settingsadmin").style.display = "none";
}

function settingsadmin(){
  document.getElementById("dashboardadmin").style.display = "none";
  document.getElementById("ordersadmin").style.display = "none";
  document.getElementById("inventoryadmin").style.display = "none";
  document.getElementById("notificationadmin").style.display = "none";
  document.getElementById("useraccountsadmin").style.display = "none";
  document.getElementById("newsadmin").style.display = "none";
  document.getElementById("settingsadmin").style.display = "flex";
}

function additem(){
  document.getElementById("additem").style.display = "none";
  document.getElementById("addingitem").style.display = "flex";
}
function addeditem(){
  document.getElementById("additem").style.display = "flex";
  document.getElementById("addingitem").style.display = "none";
}