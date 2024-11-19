/* -------------------------------sidebar-options Funtion-------------------------------*/

const options = document.querySelectorAll(".option");

function activeLink() {
  options.forEach(option => option.classList.remove("active"));
  this.classList.add("active");
}

options.forEach(option => option.addEventListener("click", activeLink));

let toggler = document.querySelector('.togle');
if (toggler) {
    toggler.addEventListener("click", () => {
        let optionsWords = document.querySelector('.options');
        let text = document.querySelector('.text');
        if (optionsWords) optionsWords.classList.toggle('show');
        if (text) text.classList.toggle('remove');
    });
} else {
    console.error("No element with class 'togle' found.");
}


let toggler = document.querySelector('.togle');
if (toggler) {
    toggler.addEventListener("click", () => {
        let text = document.querySelector('.text');
        if (text) {
            optionsWords.classList.toggle('remove');
        } else {
            console.error("No element with class 'options' found.");
        }
    });
} else {
    console.error("No element with class 'togle' found.");
}

/* --------------main img-downloader script--------------------*/

const urlInput = document.querySelector(".int");
const downloadBtn = document.querySelector("#downloadBtn");
const para = document.querySelector(".para");

downloadBtn.addEventListener("click", async () => {
    try {
        const response = await fetch(urlInput.value);
        para.setAttribute('class', 'para');
        const file = await response.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = new Date().getTime();
        link.click();
    } catch (error) {
        para.setAttribute('class', 'show');
    }
}, 20000);



/*-------------------------extra-----------------------*/

  let li = document.querySelectorAll(".option");

  for (let item of li) {
      let cls = item.getAttribute("class");
      console.log(cls);
      if (cls === "option active") {
          console.log('ok');
          break;
      }
  }

  let mainStyle = document.getElementsByClassName("main-style");   Select the first element with the class "main-style"


  if (5 < 8) {
      let calcut = document.querySelector("#calcut");
      calcut.addEventListener("click", () => {
          mainStyle.innerHTML = `    
          <div class="calculator">
              <input type="text" id="display" readonly>
              <div class="buttons">
                  <button onclick="clearDisplay()">C</button>
                  <button onclick="appendToDisplay('(')">(</button>
                  <button onclick="appendToDisplay(')')">)</button>
                  <button onclick="deleteLastChar()">⌫</button>
                
                  <button onclick="appendToDisplay('7')">7</button>
                  <button onclick="appendToDisplay('8')">8</button>
                  <button onclick="appendToDisplay('9')">9</button>
                  <button onclick="appendToDisplay('/')">/</button>
                
                  <button onclick="appendToDisplay('4')">4</button>
                  <button onclick="appendToDisplay('5')">5</button>
                  <button onclick="appendToDisplay('6')">6</button>
                  <button onclick="appendToDisplay('*')">×</button>
                
                  <button onclick="appendToDisplay('1')">1</button>
                  <button onclick="appendToDisplay('2')">2</button>
                  <button onclick="appendToDisplay('3')">3</button>
                  <button onclick="appendToDisplay('-')">-</button>
                
                  <button onclick="appendToDisplay('0')">0</button>
                  <button onclick="appendToDisplay('.')">.</button>
                  <button onclick="calculate()">=</button>
                  <button onclick="appendToDisplay('+')">+</button>
              </div>
          </div>`;
      });
  } else if (5 < 6) {
      let img = document.querySelector("#ImgDownloader");
      img.addEventListener("click", () => {
          mainStyle.innerHTML = `
          <div class="container">
              <input class="int" type="text" id="fileName" placeholder="Enter file link..."><br>
              <p class="para">*Sorry, enter your correct link</p>
              <div class="main-btn">
                  <button class="btn" id="downloadBtn">Download File</button>
              </div>
          </div>`;
      });
  } else {
      console.error("No element with class 'options' or 'toggle' found.");
  }



let codeFile = document.querySelectorAll('.code');

for (let i = 0; i <= codeFile.length; i++) {
    codeFile[0].addEventListener('click', () => {
        mainStyle.innerHTML = `
            <div class="container">
                <input class="int" type="text" id="fileName" placeholder="Enter file link..."><br>
                <p class="para">*sorry enter your carrut link</p>
                <div class="main-btn">
                    <button class="btn" id="downloadBtn">Download File</button>
                </div>
            </div>
        `;
    });
    codeFile[1].addEventListener('click', () => {
        mainStyle.innerHTML = `
            <div class="calculator">
                <input type="text" id="display" readonly>
                <div class="buttons">
                    <button onclick="clearDisplay()">C</button>
                    <button onclick="appendToDisplay('(')">(</button>
                    <button onclick="appendToDisplay(')')">)</button>
                    <button onclick="deleteLastChar()">⌫</button>                 
                    <button onclick="appendToDisplay('7')">7</button>
                    <button onclick="appendToDisplay('8')">8</button>
                    <button onclick="appendToDisplay('9')">9</button>
                    <button onclick="appendToDisplay('/')">/</button>                 
                    <button onclick="appendToDisplay('4')">4</button>
                    <button onclick="appendToDisplay('5')">5</button>
                    <button onclick="appendToDisplay('6')">6</button>
                    <button onclick="appendToDisplay('*')">×</button>                 
                    <button onclick="appendToDisplay('1')">1</button>
                    <button onclick="appendToDisplay('2')">2</button>
                    <button onclick="appendToDisplay('3')">3</button>
                    <button onclick="appendToDisplay('-')">-</button>                 
                    <button onclick="appendToDisplay('0')">0</button>
                    <button onclick="appendToDisplay('.')">.</button>
                    <button onclick="calculate()">=</button>
                    <button onclick="appendToDisplay('+')">+</button>
                </div>
            </div>
        `;
    });
    codeFile[2].addEventListener('click', () => {
        mainStyle.innerHTML = '<h1>Sorry</h1>';
    });
    codeFile[3].addEventListener('click', () => {
        mainStyle.innerHTML = '<h1>Sorry</h1>';
    });
    codeFile[4].addEventListener('click', () => {
        mainStyle.innerHTML = '<h1>Sorry</h1>';
    });
    codeFile[5].addEventListener('click', () => {
        mainStyle.innerHTML = '<h1>Sorry</h1>';
    });
}


/* -------------------------------calculator script-------------------------------*/

let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

