/* -------------------------------sidebar-options Funtion-------------------------------*/

const options = document.querySelectorAll(".option");

function activeLink(event) {
    options.forEach(option => option.classList.remove("active"));
    event.currentTarget.classList.add("active");
    let mainStyle = document.querySelector(".main-style");
    let dataValue = this.dataset.value;
    if (dataValue === "0") {
        mainStyle.innerHTML = `
        <div class="container">
            <input class="int" type="text" id="fileName" placeholder="Enter file link..."><br>
            <p class="para">*sorry enter your carrut link</p>
            <div class="main-btn">
                <button class="btn" id="downloadBtn">Download File</button>
            </div>
        </div>`
    } else if (dataValue === "1") {
        mainStyle.innerHTML = `
        <div class="calculator">
            <input type="text" id="display" >
            <div class="buttons">
            <button onclick="clearDisplay()" class= "btn" data-value= "C">C</button>
            <button onclick="appendToDisplay('(')" class= "btn" data-value= "(">(</button>
            <button onclick="appendToDisplay(')')" class= "btn" data-value= "7">)</button>
            <button onclick="deleteLastChar()" class= "btn" data-value= "">⌫</button>
            
            <button onclick="appendToDisplay('7')" class= "btn" data-value= "7">7</button>
            <button onclick="appendToDisplay('8')" class= "btn" data-value= "8">8</button>
            <button onclick="appendToDisplay('9')" class= "btn" data-value= "9">9</button>
            <button onclick="appendToDisplay('/')" class= "btn" data-value= "/">/</button>
            
            <button onclick="appendToDisplay('4')" class= "btn" data-value= "4">4</button>
            <button onclick="appendToDisplay('5')" class= "btn" data-value= "5">5</button>
            <button onclick="appendToDisplay('6')" class= "btn" data-value= "6">6</button>
            <button onclick="appendToDisplay('*')" class= "btn" data-value= "*">×</button>
            
            <button onclick="appendToDisplay('1')" class= "btn" data-value= "1">1</button>
            <button onclick="appendToDisplay('2')" class= "btn" data-value= "2">2</button>
            <button onclick="appendToDisplay('3')" class= "btn" data-value= "3">3</button>
            <button onclick="appendToDisplay('-')" class= "btn" data-value= "-">-</button>
            
            <button onclick="appendToDisplay('0')" class= "btn" data-value= "7">0</button>
            <button onclick="appendToDisplay('.')" class= "btn" data-value= "7">.</button>
            <button onclick="calculate()" class= "btn" data-value= "7">=</button>
            <button onclick="appendToDisplay('+')" class= "btn" data-value= "7">+</button>
            </div>
       </div> `
    } else if (dataValue === "2") {
        mainStyle.innerHTML = `Hi ${dataValue}`
    } else if (dataValue === "3") {
        mainStyle.innerHTML = `Hi ${dataValue}`
    } else if (dataValue === "4") {
        mainStyle.innerHTML = `Hi ${dataValue}`
    } else if (dataValue === "5") {
       mainStyle.innerHTML = `Hi ${dataValue}`
    } else if (dataValue === "6") {
       mainStyle.innerHTML = `Hi ${dataValue}`
    }
}

options.forEach(option => option.addEventListener("click", activeLink));


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



/* -------------------------------calculator script-------------------------------*/

let display = document.getElementById('display');

let btn = document.querySelectorAll('.btn');

btn.forEach(button => {
    button.addEventListener('click', () => {
        let value = this.dataset.value;
        if (value === '=') {
            display.value = eval(display.value);
        }else if (value === 'C') {
            display.value = '';
        } else if (value === '⌫') {
            display.value = display.value.slice(0, -1);
        } else if (value === '(' || value === ')') {
            display.value += value;
        } else if (value === '0' && display.value === '0') {
            display.value = '0';
        } else if (value === '.' && display.value.includes('.')) {
            display.value = display.value;
        } else if (value === '.' && display.value === '') {
            display.value = '0.';
        } else if (value === '.' && display.value.slice(-1) === '.') {
            display.value = display.value;
        } else {
            display.value += value;
        }
        display.value = value;
    });
});


