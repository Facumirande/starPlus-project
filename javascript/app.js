const cardId0 = document.getElementById("card-0")
const cardId1 = document.getElementById("card-1")
const cardId2 = document.getElementById("card-2")
const cardId3 = document.getElementById("card-3")
const cardId4 = document.getElementById("card-4")

cardId0.addEventListener("click",()=>{
  const cardData = document.getElementById("card-data");
  const cardImg0 = document.getElementById("img-0")
  cardData.classList.remove("d-none")
  cardImg0.classList.add("img-0")
  
  const cardData2 = document.getElementById("card-data2");
  cardData2.classList.remove("d-none")
  })

cardId0.addEventListener("mouseout",()=>{
  const cardData = document.getElementById("card-data");
  const cardImg0 = document.getElementById("img-0")
  cardData.classList.add("d-none")
  
  const cardData2 = document.getElementById("card-data2");
  cardData2.classList.add("d-none")
  cardImg0.classList.remove("img-0")
  })

