const ms = document.getElementById("ms");
const mr = document.getElementById("mr");
const myButton = document.getElementById("myButton");
const wynik = document.getElementById("wynik");
const paragraph = document.querySelectorAll("p");

myButton.onclick = function(){
    let answer;
    let msValue = Number(ms.value);
    let mrValue = Number(mr.value);

    if(msValue > mrValue && msValue > 0 && mrValue > 0){
        paragraph[0].textContent = "ERROR: ";
        paragraph[0].style.color = "hsl(0, 85%, 60%)";
        wynik.textContent = "Masa substancji rozpuszczonej nie może być większa niż masa całego roztworu!";
        wynik.style.color = "hsl(0, 85%, 60%)";
    }
    else if(msValue > 0 && mrValue > 0){
        paragraph[0].textContent = "Wynik: ";
        paragraph[0].style.color = "hsl(78, 12%, 80%)";
        answer = msValue / mrValue * 100;
        wynik.textContent = answer.toFixed(2) + "%";
        wynik.style.color = "hsl(78, 12%, 80%)";
    }
    else{
        paragraph[0].textContent = "ERROR: ";
        paragraph[0].style.color = "hsl(0, 85%, 60%)";
        wynik.textContent = "Proszę podać prawidłowe liczby!";
        wynik.style.color = "hsl(0, 85%, 60%)";
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
            paragraph[1].textContent = "ERROR: ";
            paragraph[1].style.color = "hsl(0, 85%, 60%)";
            wynik2.textContent = "Stężenie procentowe nie może wynosić 0!";
            wynik2.style.color = "hsl(0, 85%, 60%)";
        }
        else if(sprValue <= 100 && mr2Value > 0){
            paragraph[1].textContent = "Wynik: ";
            paragraph[1].style.color = "hsl(78, 12%, 80%)";
            answer = sprValue / 100 * mr2Value;
            wynik2.textContent = answer.toFixed(2) + "g";
            wynik2.style.color = "hsl(78, 12%, 80%)";
        }
        else{
            paragraph[1].textContent = "ERROR: ";
            paragraph[1].style.color = "hsl(0, 85%, 60%)";
            wynik2.textContent = "Proszę podać właściwe procenty/gramy!";
            wynik2.style.color = "hsl(0, 85%, 60%)";
        }
    }

const spr2 = document.getElementById("spr2");
const ms2 = document.getElementById("ms2");
const myButton3 = document.getElementById("myButton3");
const wynik3 = document.getElementById("wynik3");

    myButton3.onclick = function(){
        let answer;
        let spr2Value = Number(spr2.value);
        let ms2Value = Number(ms2.value);

        if(spr2Value === 0){
            paragraph[2].textContent = "ERROR: ";
            paragraph[2].style.color = "hsl(0, 85%, 60%)";
            wynik3.textContent = "Stężenie procentowe nie może wynosić 0!";
            wynik3.style.color = "hsl(0, 85%, 60%)";
        }
        else if(spr2Value <= 100 && ms2Value > 0){
            paragraph[2].textContent = "Wynik: ";
            paragraph[2].style.color = "hsl(78, 12%, 80%)";
            answer = ms2Value * 100 / spr2Value;
            wynik3.textContent = answer.toFixed(2) + "g";
            wynik3.style.color = "hsl(78, 12%, 80%)";
        }
        else{
            paragraph[2].textContent = "ERROR: ";
            paragraph[2].style.color = "hsl(0, 85%, 60%)";
            wynik3.textContent = "Proszę podać właściwe procenty/gramy!";
            wynik3.style.color = "hsl(0, 85%, 60%)";
        }
    }