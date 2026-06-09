const items = [
    { name: "★5 レジェンドドラゴン", rate: 5, image: "images/dragon.png" },
    { name: "★4 ヒーローナイト", rate: 15, image: "images/knight.png" },
    { name: "★3 ウィザード", rate: 30, image: "images/wizard.png" },
    { name: "★2 ソルジャー", rate: 30, image: "images/soldier.png" },
    { name: "★1 スライム", rate: 20, image: "images/slime.png" },
  ];
  
  document.getElementById("single-button").addEventListener("click", () => pullGacha(1));
  document.getElementById("multi-button").addEventListener("click", () => pullGacha(10));
  
  function pullGacha(count) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
  
    for (let i = 0; i < count; i++) {
      const item = getRandomItem();
      const card = document.createElement("div");
      card.className = "card";
  
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
  
      const name = document.createElement("p");
      name.textContent = item.name;
  
      card.appendChild(img);
      card.appendChild(name);
      resultDiv.appendChild(card);
    }
  }
  
  function getRandomItem() {
    const rand = Math.random() * 100;
    let sum = 0;
    for (const item of items) {
      sum += item.rate;
      if (rand < sum) return item;
    }
  }
  