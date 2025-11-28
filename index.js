const ms = document.getElementById("ms");
const mr = document.getElementById("mr");
const myButton = document.getElementById("myButton");
const wynik = document.getElementById("wynik");

myButton.onclick = function(){
    let answer;
    let msValue = Number(ms.value);
    let mrValue = Number(mr.value);

    if(msValue > mrValue && msValue > 0 && mrValue > 0){
        window.alert("Masa substancji rozpuszczonej nie może być większa niż masa całego roztworu!");
    }
    else if(msValue > 0 && mrValue > 0){
        answer = msValue / mrValue * 100;
        wynik.textContent = answer.toFixed(2) + "%";
    }
    else{
        window.alert("Proszę podać prawidłowe liczby!");
    }
}

const spr = document.getElementById("spr");
const mr2 = document.getElementById("mr2");
const myButton2 = document.getElementById("myButton2");
const wynik2 = document.getElementById("wynik2");

    myButton2.onclick = function(){
        let answer;
        let sprValue = Number(spr.value);
        let mr2Value = Number(mr2.value);

        if(sprValue === 0){
            window.alert("Stężenie procentowe nie może wynosić 0!");
        }
        else if(sprValue <= 100 && mr2Value > 0){
            answer = sprValue / 100 * mr2Value;
            wynik2.textContent = answer.toFixed(2) + "g";
        }
        else{
            window.alert("Proszę podać właściwe procenty/gramy!");
        }
    }

const spr2 = document.getElementById("spr2");
const ms2 = document.getElementById("ms2");
const myButton3 = document.getElementById("myButton3");
const wyinik3 = document.getElementById("wynik3");

    myButton3.onclick = function(){
        let answer;
        let spr2Value = Number(spr2.value);
        let ms2Value = Number(ms2.value);

        if(spr2Value === 0){
            window.alert("Stężenie procentowe nie może wynosić 0!")
        }
        else if(spr2Value <= 100 && ms2Value > 0){
            answer = ms2Value * 100 / spr2Value;
            wyinik3.textContent = answer.toFixed(2) + "g";
        }
        else{
            window.alert("Proszę podać właściwe procenty/gramy!");
        }
    }