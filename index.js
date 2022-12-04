document.querySelector("#send_message").addEventListener("click", function () {
    let message = document.querySelector("#mensaje").value;
    let number = document.querySelector("#number").value;
    let prefix = document.getElementById("country").value;
  
    var url =
      "https://wa.me/send?text=" +
      encodeURIComponent(message) +
      "&phone=" +
      encodeURIComponent(prefix + number);
  
    window.open(url);
  });
  
  // // location message
  // document.querySelector("#ubicacion").addEventListener("click", function () {
  //   let message = document.querySelector("#mensaje");
  //   let hora = new Date().getHours();
  //   let saludo = () => {
  //     if (hora >= 5 && hora < 12) {
  //       return "Buenos días!";
  //     } else if (hora >= 12 && hora < 21) {
  //       return "Buenas tardes!";
  //     } else {
  //       return "buenas noches!";
  //     }
  //   };
  
  //   message.innerText = ` ${saludo()} Punta Del Sause 
  // `;
  // });
  

