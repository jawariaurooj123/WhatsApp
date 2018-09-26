let contacts = [
    {
        name: "Jiya Khan",
        lastSeen : `<i class="fas fa-clock"></i>`,
        message: "blah blah blah blah blah bl...",
        number: `246876513554`,
        email: `JIYA1@gmail.com`,
    },

    {
        name: "Bilal",
        lastSeen : `<i class="fas fa-clock"></i>`,
        message: "blah blah blah blah blah bl...",
        number:`705704957340575`,
        email: `Bilal@gmail.com`,
    },

    {
        name: "Nimra cuzn",
        lastSeen : `<i class="fas fa-clock"></i>`,
        message: "blah blah blah blah blah bl...",
        number: `0874604967606`,
        email: `Nimra123@gmail.com`,
    },

    {
        name: "Ahmed Khan",
        lastSeen : `<i class="fas fa-clock"></i>`,
        message: "blah blah blah blah blah bl...",
        number: `032178785349575`,
        email: `Ahmed@gmail.com`,
    },

    {
        name: "Saboor",
        lastSeen : `<i class="fas fa-clock"></i>`,
        message: "blah blah blah blah blah bl...",
        number: `0321255678`,
        email: `saboor2904@gmail.com`,
    },

    {
        name: "Yumna ",
        lastSeen : `<i class="fas fa-clock"></i>`,
        message: "blah blah blah blah blah bl...",
        number: `0333678676`,
        email: `yumna6789@gmail.com`,
    },

    {
        name: "Rabika schol",
       lastSeen : `<i class="fas fa-clock"></i>`,
        message: "blah blah blah blah blah bl...",
        number: `12329830203232`,
        email: `rabika456@gmail.com`,
    },

    {
        name: "Habib",
       lastSeen : `<i class="fas fa-clock"></i>`,
        message: "blah blah blah blah blah bl..."
        number: `0347788537`,
        email: `Raohabib@gmail.com`,
    },

    {
        name: "hasiba cntr",
        lastSeen : `<i class="fas fa-clock"></i>`,
        message: "blah blah blah blah blah bl...",
        number: `03221776538`,
        email: `princess@gmail.com`,
    }
]


function initilizar() {
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

