const config = {};



const months = { 0: "Jan", 1: "Fev", 2: "Mar", 3: "Abr", 4: "Mai", 5: "Jun", 6: "Jul", 7: "Ago", 8: "Set", 9: "Out", 10: "Nov", 11: "Dez" };
const input = document.querySelector('#input');
const counter = document.querySelector('span');

function getLines() {

  let list = input.value.split("\n");
  let output = document.getElementById("output");

  output.value = "";

  const listLength = list.length;
  let i = 0;

  // recursive AJAX function
  function run() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && JSON.parse(xhr.response) && xhr.status < 300) {
        let stamp = JSON.parse(xhr.response).time;
        let time = new Date(stamp * 1000);
        let d = time.getDate();
        d = d.toString().length === 1 ? '0' + d : d;
        let m = months[time.getMonth()];
        let y = time.getFullYear();
        output.value += `${i !== 0 ? '\n' : ''}[${d}/${m}/${y}] ${list[i]}`;
        i++;
        if (i < listLength) {
          run();
        }
      }
    };
    xhr.open("GET", "https://hacker-news.firebaseio.com/v0/item/" + list[i].slice(list[i].lastIndexOf("=") + 1) + ".json");
    xhr.send();
  }

  run();

}

//const count = () => counter.innerText = `${input.value.length}/5000`;

// count();

const count = () => counter.innerText = $('#input').val().split(' ').length;

count();

