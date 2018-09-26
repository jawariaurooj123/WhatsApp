let contactsInfo = [
{
 name: "Jiya Khan",
 number: `246876513554`,
 lastMsg: "blah blah blah blah blah bl...",
 lastSeen : `<i class="fas fa-clock"></i>`,
 email: `JIYA1@gmail.com`,
 img : `<i class="fas fa-user-circle"></i>`

},

{
  name: "Bilal",
  number:`705704957340575`,
  lastMsg: "blah blah blah blah blah bl...",
  lastSeen : `<i class="fas fa-clock"></i>`,
  email: `Bilal@gmail.com`,
  img : `<i class="fas fa-user-circle"></i>`
},

{
  name: "Nimra cuzn",
  number: `0874604967606`,
  lastMsg: "blah blah blah blah blah bl...",
  lastSeen : `<i class="fas fa-clock"></i>`,
  email: `Nimra123@gmail.com`,
  img : `<i class="fas fa-user-circle"></i>`
},


{
  name: "Ahmed Khan",
  number: `032178785349575`,   
  lastMsg: "blah blah blah blah blah bl...",
  lastSeen : `<i class="fas fa-clock"></i>`,
  email: `Ahmed@gmail.com`,
  img : `<i class="fas fa-user-circle"></i>`
},


{
  name: "Saboor",
  number: `0321255678`,
  lastSeen : `<i class="fas fa-clock"></i>`,
  lastMsg: "blah blah blah blah blah bl...",
  email: `saboor2904@gmail.com`,
  img : `<i class="fas fa-user-circle"></i>`
},


{
  name: "Yumna ",
  lastSeen : `<i class="fas fa-clock"></i>`,
  lastMsg: "blah blah blah blah blah bl...",
  number: `0333678676`,
  email: `yumna6789@gmail.com`,
  img : `<i class="fas fa-user-circle"></i>`
},


{
 name: "Rabika schol",
 lastSeen : `<i class="fas fa-clock"></i>`,
 lastMsg: "blah blah blah blah blah bl...",
 number: `12329830203232`,
 email: `rabika456@gmail.com`,
 img : `<i class="fas fa-user-circle"></i>`
},


{
  name :"babar",
  number : "03013462928",
  lastMsg : "blah blah",
  lastSeen : `<i class="fas fa-check-double"></i>`,
  email : "12345@gmail.com",
  img : `<i class="fas fa-user-circle"></i>`
},


{
 name: "hasiba cntr",
 number: `03221776538`,
 lastMsg: "blah blah blah blah blah bl...",
 lastSeen : `<i class="fas fa-clock"></i>`,
 email: `princess@gmail.com`,
 img :`<i class="fas fa-user-circle"></i>`
}


];


function initilizar() {
// celebritiesGroupEl
let contactsInfoGroupEl = document.querySelector(".name-list");
for (let i=0; i<10; i++) {
  contactsInfoGroupEl.innerHTML += `<div class="list-item"> ${contactsInfo[i].img}<div class="names-flex" onclick="changeInfo(${i})" >
  <span> ${contactsInfo[i].name}</span><span class="spans-1"><span class="lastSeen1"> ${contactsInfo[i].lastSeen}  ${contactsInfo[i].lastMsg}</span></span></span></div></div>`;
}

}


changeInfo(0);




function  changeInfo(InfoIndex){
  document.querySelector("#contactsInfo-name").innerHTML = contactsInfo[InfoIndex].name;
  document.querySelector("#contactsInfo-number").innerHTML = contactsInfo[InfoIndex].number;
  document.querySelector("#contactsInfo-img").style["background-image"] = `url(${contactsInfo[InfoIndex].mainimg})`;
  document.querySelector("#contactsInfo-lastMsg").innerHTML = contactsInfo[InfoIndex].lastMsg;
  document.querySelector("#contactsInfo-lastSeen").innerHTML = contactsInfo[InfoIndex].lastSeen;
  document.querySelector("#contactsInfo-email").href = contactsInfo[InfoIndex].email;



}






  //   celebritiesGroupEl.innerHTML += `
  //         <div class="celebrity-img-div" 
  //           style="background-image: url(images/${celebrities[i].imgURL})"
  //           onclick="changeCeleb(${i})">
  //           <p class="celebrity-img-text">${celebrities[i].name}</p>
  //           </div>`
  // }
  // changeCeleb(0);