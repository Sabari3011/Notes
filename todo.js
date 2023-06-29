let addBtn=document.getElementById("addBtn")
addBtn.addEventListener("click",turn)
function turn(){
    addBtn.classList.toggle("rotate")
} 
// timeone
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
let date=`${cDay} / ${cMonth} / ${cYear}`;
//required doms

let add_Btn=document.getElementById("addBtn");
let titleinput=document.getElementById('titleinput');
let notescontent=document.getElementById('notescontent');
let submitBtn=document.getElementById('submitBtn');
let main_box=document.getElementById('main-box');
let searchBar=document.getElementById("searchBar");


// event listerners
titleinput.addEventListener("keydown",btnvisible);
notescontent.addEventListener("keydown",btnvisible);
searchBar.addEventListener("keyup",filterItem)
// event to submitbtn
submitBtn.addEventListener("click",(e)=>{
let newbab=document.createElement('div');
newbab.className="container-sm card  box  p-3 card-secondary";

let title=document.createElement("h4")
title.textContent=titleinput.value; 
title.className="card-title  text-decoration-underline";
newbab.appendChild(title);

// bin
let clsbtn=document.createElement("button")
clsbtn.className="btn btn-danger ";
clsbtn.id="delBtn"
//<i class="fa fa-trash" aria-hidden="true"></i>
let fa_bin=document.createElement("i")
fa_bin.className="fa fa-trash pe-none"
clsbtn.setAttribute("title","Delete")
clsbtn.setAttribute("data-bs-toggle","tooltip")
clsbtn.setAttribute("data-bs-placement","left")
clsbtn.appendChild(fa_bin)
clsbtn.classList.add("clsbtn");
newbab.appendChild(clsbtn);

// data-bs-toggle="tooltip" data-bs-title="Default tooltip"
//pin btn
let pinbtn=document.createElement("button")
pinbtn.className="btn btn-success ";
pinbtn.id="pinBtn"
//tooltip
pinbtn.setAttribute("title","pin")
pinbtn.setAttribute("data-bs-toggle","tooltip")
pinbtn.setAttribute("data-bs-placement","left")


let fa_pin=document.createElement("i")
fa_pin.className="fa fa-thumb-tack pe-none"
pinbtn.appendChild(fa_pin)
newbab.appendChild(pinbtn)
pinbtn.addEventListener("click",sorted)
pinbtn.classList.add("pinbtn")
// timezone
let timeDisplay=document.createElement("p")
timeDisplay.textContent=date;
timeDisplay.className="ms-auto text-dark fw-bold border p-1 border-dark";
timeDisplay.style.fontSize="11px"
newbab.appendChild(timeDisplay);

//paragraph-------
let notes=document.createElement("h6");
notes.textContent=notescontent.value; 
notes.className="card-text fw-bold";
newbab.appendChild(notes);
notes.className="ms-4 "




newbab.classList.add("box_border")
main_box.prepend(newbab);

titleinput.value=null;
notescontent.value=null;
submitBtn.classList.add("disabled")
turn();
let delBtn=document.getElementById("delBtn");

//event to delete
delBtn.addEventListener("click",del_card);

})


function btnvisible(){
    if ( (titleinput.value.length > 0 )   &   (notescontent.value.length > 0) ){
        submitBtn.classList.remove("disabled")
    }
    else{
        submitBtn.classList.add("disabled")
    }
    
}

function filterItem(e){
    var text=e.target.value.toLocaleLowerCase();
    var items=main_box.getElementsByClassName('card-title');
    
    Array.from(items).forEach(function(item){
        var itemname=item.firstChild.textContent;
       // console.log(itemname)
        if(itemname.toLocaleLowerCase().indexOf(text)!= -1){
            item.parentElement.style.display="flex";
            
        }
        else{
            item.parentElement.style.display="none";
        }

    })
}

function del_card(e){
    let heading =e.target.parentElement.firstChild.textContent
    //console.log("parent=>",heading)
    if(confirm(`Are you confirm to Delete the note => ${heading}`)){
        main_box.removeChild(e.target.parentElement)
    }
}


function sorted(e){
    console.log(e.target.parentElement)
    main_box.prepend(e.target.parentElement)
}








