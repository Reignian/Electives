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
function shirts(){
  document.getElementById('prodad1').style.display = "flex";
  document.getElementById('prodad2').style.display = "none";
  document.getElementById('prodad3').style.display = "none";
  document.getElementById('prodad4').style.display = "none";
  document.getElementById('prodad5').style.display = "none";
    document.getElementById('shirts').style.display = "grid";
    document.getElementById('shoes').style.display = "none";
   document.getElementById('rackets').style.display = "none";
   document.getElementById('bags').style.display = "none";
   document.getElementById('strings').style.display = "none";
}
function shoes(){
  document.getElementById('prodad1').style.display = "none";
  document.getElementById('prodad2').style.display = "flex";
  document.getElementById('prodad3').style.display = "none";
  document.getElementById('prodad4').style.display = "none";
  document.getElementById('prodad5').style.display = "none";
    document.getElementById('shirts').style.display = "none";
    document.getElementById('shoes').style.display = "grid";
   document.getElementById('rackets').style.display = "none";
   document.getElementById('bags').style.display = "none";
   document.getElementById('strings').style.display = "none";
}
function rackets(){
  document.getElementById('prodad1').style.display = "none";
  document.getElementById('prodad2').style.display = "none";
  document.getElementById('prodad3').style.display = "flex";
  document.getElementById('prodad4').style.display = "none";
  document.getElementById('prodad5').style.display = "none";
    document.getElementById('shirts').style.display = "none";
    document.getElementById('shoes').style.display = "none";
   document.getElementById('rackets').style.display = "grid";
   document.getElementById('bags').style.display = "none";
   document.getElementById('strings').style.display = "none";
}
function bags(){
  document.getElementById('prodad1').style.display = "none";
  document.getElementById('prodad2').style.display = "none";
  document.getElementById('prodad3').style.display = "none";
  document.getElementById('prodad4').style.display = "flex";
  document.getElementById('prodad5').style.display = "none";
    document.getElementById('shirts').style.display = "none";
    document.getElementById('shoes').style.display = "none";
   document.getElementById('rackets').style.display = "none";
   document.getElementById('bags').style.display = "grid";
   document.getElementById('strings').style.display = "none";
}
function strings(){
  document.getElementById('prodad1').style.display = "none";
  document.getElementById('prodad2').style.display = "none";
  document.getElementById('prodad3').style.display = "none";
  document.getElementById('prodad4').style.display = "none";
  document.getElementById('prodad5').style.display = "flex";
    document.getElementById('shirts').style.display = "none";
    document.getElementById('shoes').style.display = "none";
   document.getElementById('rackets').style.display = "none";
   document.getElementById('bags').style.display = "none";
   document.getElementById('strings').style.display = "grid";
}