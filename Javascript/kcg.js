//撈JSON 資料

var xhr = new XMLHttpRequest();

xhr.open('get','https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97',true);
xhr.send();
console.log(xhr)
xhr.onload =function () {
    console.log(xhr.responseText);
    var str = JSON.parse(xhr.responseText);
    console.log(str);
   

var dataLen = str.result.records.length ;

var selectId = document.querySelector('.select');
var titleId = document.querySelector('.title');
var containerId = document.querySelector('.container');
var selectOpt = document.createElement('option');
var zoneTitle = document.querySelector('.zonetitle');
var btnOne = document.querySelector('.btn1');
var btnTwo = document.querySelector('.btn2');
var btnThree = document.querySelector('.btn3');
var btnFour = document.querySelector('.btn4');

var zoneList =[];
for (var i=0;i<dataLen ;i++){
    zoneList.push(str.result.records[i].Zone);
}
var zone = [];
zoneList.forEach(function(value){
    if (zone.indexOf(value)== -1){
        zone.push(value);
    }
    
});
console.log(zone);

var zoneLen = zone.length;
for (var i=0 ;i<zoneLen ;i++){
    var optNew = document.createElement('option');
    optNew.textContent = zone[i];
    optNew.setAttribute('class','option');
    optNew.setAttribute('value',zone[i]);
    selectId.appendChild(optNew);
}


    var len = str.result.records.length;
    function updataTitle(e) {
        var sele = e.target.value;
        var strZone = '';
        var strBox = '';
        for (var i=0 ;i<len ;i++){
            if (sele == str.result.records[i].Zone){
                strZone = str.result.records[i].Zone;
                strBox += '<div class="box"><img src="' + str.result.records[i].Picture1 + '" class="Picture1"> <h3 class="placeName">' + str.result.records[i].Name + '</h3><h5 class="ZoneName"> ' + str.result.records[i].Zone + '</h5> <p class="openTime"> <img class="iconClock"src = "CSS/icons_clock.png">' + str.result.records[i].Opentime + '</p> <p class="address"><img class="iconPin"src="CSS/icons_pin.png">' + str.result.records[i].Add + '</p><p class="phone"><img class="iconPin"src="CSS/icons_phone.png">' + str.result.records[i].Tel +'</p><p class="free"><img class="iconPin"src="CSS/icons_tag.png">'+str.result.records[i].Ticketinfo+'</p></div>'
              
            }
        }
        zoneTitle.innerHTML = strZone;
        containerId.innerHTML = strBox;

    }
    selectId.addEventListener('change', updataTitle, 'false');
    btnOne.addEventListener('click', updataTitle, 'fasle');
    btnTwo.addEventListener('click', updataTitle, 'fasle');
    btnThree.addEventListener('click', updataTitle, 'fasle');
    btnFour.addEventListener('click', updataTitle, 'fasle');



 

 }



