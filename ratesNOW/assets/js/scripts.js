
'use strict'

const btnOpenPresentation = document.querySelector("#btn-open-presentation");
const boxMessage = document.querySelector(".box-message");
const btnClosePresentation = document.querySelector("#btn-close-presentation");

// Btn Open Presentation
btnOpenPresentation.addEventListener("click", function() {
    boxMessage.classList.toggle("hide");
});

// Btn Close Presentation
btnClosePresentation.addEventListener("click", function() {
    boxMessage.classList.toggle("hide");
});

// Theme Dark or White
const changeThemeBtn = document.querySelector("#change-theme");

// Toggle white mode
function toggleWhiteMode() {
   document.body.classList.toggle("white");
}

// Load dark or green mode
function loadTheme() {
   const whiteMode = localStorage.getItem("white");

   if(whiteMode) {
       toggleWhiteMode();
   }
}

loadTheme();

changeThemeBtn.addEventListener("change", function() {
   toggleWhiteMode();

   // Save or remove green mode
   localStorage.removeItem("white");

   if(document.body.classList.contains("white")) {
       localStorage.setItem("white", 1);
   }
});

// API Request
takeUrlApi();

async function takeUrlApi() {
    const apiUrl = "https://api.exchangerate.host/latest";
    const response = await fetch(apiUrl);
    const data = await response.json();
    //console.log(data.rates);

    const currencyName = Object.keys(data.rates);
    const currencyValue = Object.values(data.rates);
    //console.log(currencyValue);

    // Chart JS
    const ctx = document.getElementById('chart').getContext('2d');
    Chart.defaults.font.size = 13;
    const myChart = new Chart(ctx, {
        
        type: 'bar',
        data: {
            labels: currencyName,
            datasets: [{
                label: data.base="USD" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="EUR" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="JPY" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="GBD" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="AUD" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="CAD" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="CHF" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="CNY" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="SEK" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="NZD" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="MXN" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="SGD" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="HKD" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="NOK" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="KRW" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="TRY" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="RUB" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="INR" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="BRL" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="ZAR" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="PHP" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="CZK" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="IDR" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="HUF" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="ISK" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="HRK" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
            {
                label: data.base="ILS" + ' data: ' + data.date,
                data: currencyValue,
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            },
        ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                },
                y: {
                    ticks: {
                        callback: function(value) {
                            let finalValue = value.toFixed(2);
                            return ' Pts ' + finalValue;
                        }
                    },
                    beginAtZero: true,   
                }
            }
        }
    });

    // Currencys Classes
    const divUSD = document.querySelector(".cr1");
    const divEUR = document.querySelector(".cr2");
    const divJPY = document.querySelector(".cr3");
    const divGBP = document.querySelector(".cr4");
    const divAUD = document.querySelector(".cr5");
    const divCAD = document.querySelector(".cr6");
    const divCHF = document.querySelector(".cr7");
    const divCNY = document.querySelector(".cr8");
    const divSEK = document.querySelector(".cr9");
    const divNZD = document.querySelector(".cr10");
    const divMXN = document.querySelector(".cr11");
    const divSGD = document.querySelector(".cr12");
    const divHKD = document.querySelector(".cr13");
    const divNOK = document.querySelector(".cr14");
    const divKRW = document.querySelector(".cr15");
    const divTRY = document.querySelector(".cr16");
    const divRUB = document.querySelector(".cr17");
    const divINR = document.querySelector(".cr18");
    const divBRL = document.querySelector(".cr19");
    const divZAR = document.querySelector(".cr20");
    const divPHP = document.querySelector(".cr21");
    const divCZK = document.querySelector(".cr22");
    const divIDR = document.querySelector(".cr23");
    const divMYR = document.querySelector(".cr24");
    const divHUF = document.querySelector(".cr25");
    const divISK = document.querySelector(".cr26");
    const divHRK = document.querySelector(".cr27");
    const divILS = document.querySelector(".cr28");
    
    // Events Button Currencys
    divUSD.addEventListener("click", function() {
        const valueUSD = data.rates.USD;
        myChart.data.datasets[0].data = valueUSD.toFixed(70);
        myChart.update();
    });

    divEUR.addEventListener("click", function() {
        const valueEUR = data.rates.EUR;
        myChart.data.datasets[1].data = valueEUR.toFixed(100);
        myChart.update();
    });

    divJPY.addEventListener("click", function() {
        const valueJPY = data.rates.JPY;
        myChart.data.datasets[2].data = valueJPY.toFixed(100);
        myChart.update();
    });

    divGBP.addEventListener("click", function() {
        const valueGBP = data.rates.GBP;
        myChart.data.datasets[3].data = valueGBP.toFixed(100);
        myChart.update();
    });

    divAUD.addEventListener("click", function() {
        const valueAUD = data.rates.AUD;
        myChart.data.datasets[4].data = valueAUD.toFixed(100);
        myChart.update();
    });

    divCAD.addEventListener("click", function() {
        const valueCAD = data.rates.CAD;
        myChart.data.datasets[5].data = valueCAD.toFixed(100);
        myChart.update();
    });

    divCHF.addEventListener("click", function() {
        const valueCHF = data.rates.CHF;
        myChart.data.datasets[6].data = valueCHF.toFixed(100);
        myChart.update();
    });

    divCNY.addEventListener("click", function() {
        const valueCNY = data.rates.CNY;
        myChart.data.datasets[7].data = valueCNY.toFixed(100);
        myChart.update();
    });

    divSEK.addEventListener("click", function() {
        const valueSEK = data.rates.SEK;
        myChart.data.datasets[8].data = valueSEK.toFixed(100);
        myChart.update();
    });

    divNZD.addEventListener("click", function() {
        const valueNZD = data.rates.NZD;
        myChart.data.datasets[9].data = valueNZD.toFixed(100);
        myChart.update();
    });

    divMXN.addEventListener("click", function() {
        const valueMXN = data.rates.MXN;
        myChart.data.datasets[10].data = valueMXN.toFixed(100);
        myChart.update();
    });

    divSGD.addEventListener("click", function() {
        const valueSGD = data.rates.SGD;
        myChart.data.datasets[11].data = valueSGD.toFixed(100);
        myChart.update();
    });

    divHKD.addEventListener("click", function() {
        const valueHKD = data.rates.HKD;
        myChart.data.datasets[12].data = valueHKD.toFixed(100);
        myChart.update();
    });

    divNOK.addEventListener("click", function() {
        const valueNOK = data.rates.NOK;
        myChart.data.datasets[13].data = valueNOK.toFixed(100);
        myChart.update();
    });

    divKRW.addEventListener("click", function() {
        const valueKRW = data.rates.KRW;
        myChart.data.datasets[14].data = valueKRW.toFixed(100);
        myChart.update();
    });

    divTRY.addEventListener("click", function() {
        const valueTRY = data.rates.TRY;
        myChart.data.datasets[15].data = valueTRY.toFixed(100);
        myChart.update();
    });

    divRUB.addEventListener("click", function() {
        const valueRUB = data.rates.RUB;
        myChart.data.datasets[16].data = valueRUB.toFixed(100);
        myChart.update();
    });

    divINR.addEventListener("click", function() {
        const valueINR = data.rates.INR;
        myChart.data.datasets[17].data = valueINR.toFixed(100);
        myChart.update();
    });

    divBRL.addEventListener("click", function() {
        const valueBRL = data.rates.BRL;
        myChart.data.datasets[18].data = valueBRL.toFixed(100);
        myChart.update();
    });

    divZAR.addEventListener("click", function() {
        const valueZAR = data.rates.ZAR;
        myChart.data.datasets[19].data = valueZAR.toFixed(100);
        myChart.update();
    });

    divPHP.addEventListener("click", function() {
        const valuePHP = data.rates.PHP;
        myChart.data.datasets[20].data = valuePHP.toFixed(100);
        myChart.update();
    });

    divCZK.addEventListener("click", function() {
        const valueCZK = data.rates.CZK;
        myChart.data.datasets[21].data = valueCZK.toFixed(100);
        myChart.update();
    });

    divIDR.addEventListener("click", function() {
        const valueIDR = data.rates.IDR;
        myChart.data.datasets[22].data = valueIDR.toFixed(100);
        myChart.update();
    });

    divMYR.addEventListener("click", function() {
        const valueMYR = data.rates.MYR;
        myChart.data.datasets[23].data = valueMYR.toFixed(100);
        myChart.update();
    });

    divHUF.addEventListener("click", function() {
        const valueHUF = data.rates.HUF;
        myChart.data.datasets[24].data = valueHUF.toFixed(100);
        myChart.update();
    });

    divISK.addEventListener("click", function() {
        const valueISK = data.rates.ISK;
        myChart.data.datasets[25].data = valueISK.toFixed(100);
        myChart.update();
    });

    divHRK.addEventListener("click", function() {
        const valueHRK = data.rates.HRK;
        myChart.data.datasets[26].data = valueHRK.toFixed(100);
        myChart.update();
    });

    divILS.addEventListener("click", function() {
        const valueILS = data.rates.ILS;
        myChart.data.datasets[27].data = valueILS.toFixed(100);
        myChart.update();
    });
}