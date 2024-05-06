
async function getPen() {
  const respone = await fetch('https://pens-api.vercel.app/api/pens/1');
  const pen = await respone.json();
  console.log(pen);
 
  //   // == Using fetch api to get single pen and replace the below pen variable
  //   // ===
    const penListDiv = document.getElementById("single-pen");

    const penElement = createPenElement(pen);
    penListDiv.appendChild(penElement);

}

function createPenElement(pen) {
  const penDiv = document.createElement("div");
  penDiv.classList.add("col-3", "text-center");

  const penColorDiv = document.createElement("div");
  penColorDiv.classList.add("pen-color");
  penColorDiv.style.backgroundColor = pen.color;

  const penNameP = document.createElement("p");
  penNameP.textContent = pen.name;

  penDiv.appendChild(penColorDiv);
  penDiv.appendChild(penNameP);

  return penDiv;
}

// call function getPen
getPen();
