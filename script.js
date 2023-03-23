// You will write the JavaScript code for your Cookie Clicker game here!

const validateJellybeansPurchase = (cost, jellybeanCount) => {
  if (cost > jellybeanCount) {
    alert("Not enough jellybeans!!!");
    return false;
  }

  return true;
};

const buyListener = (e) => {
  // log srcElement
  console.log("Event: ", e.srcElement);
  let cost = Number(
    e.srcElement.parentElement.parentElement.parentElement.querySelector(
      "#jellybeans-cost"
    ).innerText
  );

  let clickPurchased = Number(
    e.srcElement.parentElement.parentElement.parentElement.querySelector(
      "#jellybeans-per-click"
    ).innerText
  );

  let jellybeanQuantity = Number(
    e.srcElement.parentElement.parentElement.parentElement.querySelector(
      "#jellybeans-quantity"
    ).innerText
  );

  let jellybeanCount = Number(
    document.getElementById("jellybeans-counter").innerHTML
  );

  let currentJellybeansPerClick = Number(
    document.getElementById("current-jellybeans-per-click").innerHTML
  );

  if (validateJellybeansPurchase(cost, jellybeanCount)) {
    document.getElementById("jellybeans-counter").innerHTML =
      jellybeanCount - cost;

    document.getElementById("current-jellybeans-per-click").innerHTML =
      currentJellybeansPerClick + clickPurchased;

    e.srcElement.parentElement.parentElement.parentElement.querySelector(
      "#jellybeans-quantity"
    ).innerText = jellybeanQuantity + 1;
  }
};

const jellybeansClickListener = (e) => {
  console.log("Jellybeans Clicked!!!");
  let counter = Number(
    e.srcElement.parentElement.parentElement.querySelector(
      "#jellybeans-counter"
    ).innerText
  );
  let jellybeanPerClick = Number(
    e.srcElement.parentElement.parentElement.querySelector(
      "#current-jellybeans-per-click"
    ).innerText
  );
  console.log(`counter: ${counter}, jellybeansPerClick: ${jellybeanPerClick}`);

  counter += jellybeanPerClick;
  e.srcElement.parentElement.parentElement.querySelector(
    "#jellybeans-counter"
  ).innerText = counter;
};

// call listener
// listener for buy button
document.getElementById("buy-pink").addEventListener("click", buyListener);
document.getElementById("buy-blue").addEventListener("click", buyListener);
document.getElementById("buy-green").addEventListener("click", buyListener);

//listener for jellybean clicker
document
  .getElementById("click")
  .addEventListener("click", jellybeansClickListener);
