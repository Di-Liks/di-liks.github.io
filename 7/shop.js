function umnoz(){
    let stoim = document.getElementById("stoim").value;
    let colvo = document.getElementById("colvo").value;
    let rezult = document.getElementById("rezult");

    if(stoim =="" || colvo =="")
        rezult.innerHTML = "Вы не ввели стоимость или количесво товара"
    else if(stoim != parseInt(stoim) || colvo != parseInt(colvo) || parseInt(colvo)<0 || parseInt(stoim)<0)
        rezult.innerHTML = "Одно из полей содержит недопустимое условие для задачи или недопустимые символы";
    else
        rezult.innerHTML = "Результат: " + parseInt(colvo)*parseInt(stoim); 
}

window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("but").addEventListener("click", umnoz);
});

window.addEventListener("DOMContentLoaded", function () {
    let priceList = [
        0, //plastic - 0
        10, //epocs - 1
        20, //tree - 2
        50, //metall - 3
        100, //soul - 4
        30,  //oneDice - 5
        200, //allDice - 6
        250 //sac - 7
    ];
    
    let bool = 1;
    
    let selectDice = document.getElementsByName("dice");
    selectDice[0].addEventListener("change", function(event){
        let selected =event.target;
        let colDice = document.getElementsByName("colDice");
        let radioDice = document.getElementById("radioDice");
        let sacDice = document.getElementById("sacDice");
        let d10Dice = document.getElementById("d10Dice");
        let mid = document.getElementById("mid");
        let rezult = document.getElementById("rezultDice");
        colDice[0].value = "";

        let mDice =document.querySelectorAll("input[name=mater]");
        for(j of mDice) j.checked=false;
        
        let chDice =document.querySelectorAll("input[type=checkbox]");
        for(j of chDice) j.checked=false;
        
        if(selected.value =="noDice")
        {
            radioDice.style.display = "none";
            mid.style.display = "none";
            sacDice.style.display = "none";
            d10Dice.style.display = "none";
        }
        
        if(selected.value =="d10")
        {
            radioDice.style.display = "block";
            d10Dice.style.display = "block";
            mid.style.display = "block";
            sacDice.style.display = "none";
            rezult.innerHTML = "Вы выбрали не все параметры";  

            let sum, kolvo, bool1, bool2;
            
            let d10Var = document.querySelectorAll("input[name=varDice]");
            let materil = document.querySelectorAll("input[name=mater]");

            function noName(){
                bool1 = 0;
                bool2 = 0;
                kolvo = 0;

                for(let i=0; i<d10Var.length; i++)
                if(d10Var[i].checked){ 
                    bool1 = 1;
                    kolvo ++;   
                }

                for(let i=0; i<materil.length; i++)
                    if(materil[i].checked) {
                        sum = (priceList[i] + priceList[5]);
                        bool2 = 1;
                        break;
                    }

                bool=bool1*bool2;

                if(bool && colDice[0].value!="" && colDice[0].value == parseInt(colDice[0].value)) return rezult.innerHTML = sum*kolvo*colDice[0].value;
                else if(!bool || colDice[0].value=="") rezult.innerHTML = "Вы выбрали не все параметры";
                else rezult.innerHTML = "В строке количества не все символы - цифры";
            }

            d10Var.forEach(function (d10Vars) {
                d10Vars.addEventListener("click", () =>{ 
                    noName();
                });
            });    

            materil.forEach(function(materils) {
                materils.addEventListener("click", () =>{
                    noName(); 
                });  
            });    

            colDice[0].addEventListener("input", () =>{
                    noName();
            });  
        }
        
        if(selected.value =="d100")
        {
            mid.style.display = "block";            
            sacDice.style.display = "block";     
            radioDice.style.display = "none";
            d10Dice.style.display = "none";  
            rezult.innerHTML = "Вы выбрали не все параметры";
            
            let sacCube = document.querySelector("#sacCube");

            if(colDice[0].value=="") rezult.innerHTML = "Введите количество товара";
            else rezult.innerHTML = priceList[6]*colDice[0].value;
            
            function d100(){
                if(sacCube.checked && colDice[0].value!="" && colDice[0].value == parseInt(colDice[0].value)) rezult.innerHTML = (priceList[6] + priceList[7])*colDice[0].value;
                else if(colDice[0].value!="" && colDice[0].value == parseInt(colDice[0].value)) rezult.innerHTML = priceList[6]*colDice[0].value;
                else if(colDice[0].value=="") rezult.innerHTML = "Введите количество товара";
                else rezult.innerHTML = "В строке количества не все символы - цифры";
            }

            document.querySelector("#sacCube").addEventListener("click", ()=>{ d100(); });

            colDice[0].addEventListener("input", ()=>{ d100(); });
        }
        
        for(let i = 1; i<=5; i++)
        if(selected.value == i)
        {
            radioDice.style.display = "block";
            mid.style.display = "block";
            
            sacDice.style.display = "none";
            d10Dice.style.display = "none";
            
            rezult.innerHTML = "Вы выбрали не все параметры";

            function d(){
                if(colDice[0].value!="" && colDice[0].value == parseInt(colDice[0].value)){
                    
                    for(let j=0; j<materil.length; j++)
                        if(materil[j].checked) {
                            rezult.innerHTML = (priceList[j] + priceList[5])*colDice[0].value;
                            break;
                        }

                }
                else if(colDice[0].value =="") rezult.innerHTML = "Вы выбрали не все параметры";
                else rezult.innerHTML = "В строке количества не все символы - цифры";
            }

            let materil = document.querySelectorAll("input[name=mater]");
            materil.forEach(function(materils) {
                materils.addEventListener("click", () =>{
                    d();
                });  
            });

            colDice[0].addEventListener("input", () =>{
                    d();
            }); 
        }
    });
});