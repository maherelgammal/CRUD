var bmName = document.getElementById("bookname");
var bmUrl = document.getElementById("websites");
var list = document.getElementById("tb");

var allWebsites;
if (localStorage.getItem("listOfSites") != null){
    allWebsites = JSON.parse(localStorage.getItem("listOfSites"));
    displaySites();
}else{
    allWebsites = [];
}
function addWebsite() {
    var web = {
        name: bmName.value,
        url: bmUrl.value
    }
    if(web.name != "" && web.url !=""){
        allWebsites.push(web)
    }else{
        document.getElementById("nameError").innerHTML = "Name is required";
        document.getElementById("urlError").innerHTML = "URL is required";
    }
    localStorage.setItem("listOfSites",JSON.stringify(allWebsites))
    console.log(allWebsites);
    clear();
    displaySites();
}
function clear() {
    bmName.value = "";
    bmUrl.value = "";
}
function displaySites() {
    var rows = "";
    for (var i = 0; i < allWebsites.length; i++) {
        if(allWebsites[i].name!="" && allWebsites[i].url!=""){
            rows += ` <div class="d-flex justify-content-start  w-100 bg-body-secondary bg-gradient py-3 my-1">
        <div class="w-25">
        <h2 class="px-3">${allWebsites[i].name}</h2></div>
        <div class="m-auto w-25">
        <a class="btn btn-primary" href="http://${allWebsites[i].url}" target="_blank">Visit</a>
        <button class="btn btn-danger" onclick="deleteSite(${i})">Delete</button></div>
        </div>
        `
        }
        }
    list.innerHTML = rows;
}
function deleteSite(index){
    allWebsites.splice(index, 1);
    displaySites();
    localStorage.setItem("listOfSites",JSON.stringify(allWebsites));
}

