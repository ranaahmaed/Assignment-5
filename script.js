// elements select
const heartBtn = document.querySelectorAll(".heartBtn");
const heartCount = document.getElementById("globalHeartCount");


// button click event

let totalCount = 0;

heartBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    totalCount++;
    globalHeartCount.textContent = totalCount;
  });
});




let coinCountEl = document.getElementById("coinCount");
let coinCount = parseInt(coinCountEl.textContent);

let callBtns = document.querySelectorAll(".callBtn");

let callHistory = document.getElementById("callHistory");

callBtns.forEach(btn => {

    btn.addEventListener("click" , () => {

        let cardBody = btn.closest(".card-body");
        let title = cardBody.querySelector(".cardTitle").innerText;
        let number = cardBody.querySelector(".cardsubTitle").innerText;

        alert(`${title}\n${number}`);

         if (coinCount >= 20) {
            coinCount -= 20;
            coinCountEl.textContent = coinCount;
        } else {
            alert("Not enough coins!");
            return;
        }

        let now = new Date()
        let time = now.toLocaleDateString()

        let Historydiv = document.createElement("div")
        Historydiv.className = "flex items-center justify-between bg-green-50 p-3 rounded-lg mt-5";

        Historydiv.innerHTML = `
            <div class="flex-col gap-3">
                <h3 class="text-xl">${title}</h3>
                <p>${number}</p>
            </div>
            <div>
                <p>${time}</p>
            </div>
        `;


callHistory.appendChild(Historydiv)

    })
})


let Clearhistory = document.getElementById("clearHistory")

Clearhistory.addEventListener("click", () => {
  callHistory.innerHTML = ""
})

let CopyCount = document.getElementById("copyNumber");
let CopyBTNMain = document.querySelectorAll(".CopyBTN");

let Count = 0; 

CopyBTNMain.forEach(btn => {
  btn.addEventListener("click", () => {

    let cardBody = btn.closest(".card-body");
    let title = cardBody.querySelector(".cardTitle").innerText;
    let number = cardBody.querySelector(".cardsubTitle").innerText;

    navigator.clipboard.writeText(number).then(() => {
      alert(`${title}\n${number}`);
    }).catch(err => {
      console.error("Copy failed", err);
    });
    // counter update
    Count++;
    CopyCount.textContent = Count;
  });
});
