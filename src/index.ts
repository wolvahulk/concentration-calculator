const paragraphList = document.querySelectorAll("p");

function initApp() {

const ms = <HTMLInputElement>document.getElementById("ms");
const mr = <HTMLInputElement>document.getElementById("mr");
const myButton = document.getElementById("myButton");
const wynik = document.getElementById("wynik");
const paragraph = paragraphList[0];


if(!ms || !mr || !myButton || !wynik || !paragraph){
    console.error("Wymagane elementy nie zostały znalezione!")
    return;
}

myButton.onclick = function(){
    let answer;
    let msValue = Number(ms.value);
    let mrValue = Number(mr.value);

    if(msValue > mrValue && msValue > 0 && mrValue > 0){
        paragraph.textContent = "ERROR: ";
        paragraph.style.color = "hsl(0, 85%, 60%)";
        wynik.textContent = "Masa substancji rozpuszczonej nie może być większa niż masa całego roztworu!";
        wynik.style.color = "hsl(0, 85%, 60%)";
    }
    else if(msValue > 0 && mrValue > 0){
        paragraph.textContent = "Wynik: ";
        paragraph.style.color = "hsl(78, 12%, 80%)";
        answer = msValue / mrValue * 100;
        wynik.textContent = answer.toFixed(2) + "%";
        wynik.style.color = "hsl(78, 12%, 80%)";
    }
    else{
        paragraph.textContent = "ERROR: ";
        paragraph.style.color = "hsl(0, 85%, 60%)";
        wynik.textContent = "Proszę podać prawidłowe liczby!";
        wynik.style.color = "hsl(0, 85%, 60%)";
    }
}
}

function initApp2() {

const spr = <HTMLInputElement>document.getElementById("spr");
const mr2 = <HTMLInputElement>document.getElementById("mr2");
const myButton2 = document.getElementById("myButton2");
const wynik2 = document.getElementById("wynik2");
const paragraph = paragraphList[1];

if(!spr || !mr2 || !myButton2 || !wynik2 || !paragraph){
    console.error("Wymagane elementy nie zostały znalezione!")
    return;
}

    myButton2.onclick = function(){
        let answer;
        let sprValue = Number(spr.value);
        let mr2Value = Number(mr2.value);

        if(sprValue === 0){
            paragraph.textContent = "ERROR: ";
            paragraph.style.color = "hsl(0, 85%, 60%)";
            wynik2.textContent = "Stężenie procentowe nie może wynosić 0!";
            wynik2.style.color = "hsl(0, 85%, 60%)";
        }
        else if(sprValue <= 100 && mr2Value > 0){
            paragraph.textContent = "Wynik: ";
            paragraph.style.color = "hsl(78, 12%, 80%)";
            answer = sprValue / 100 * mr2Value;
            wynik2.textContent = answer.toFixed(2) + "g";
            wynik2.style.color = "hsl(78, 12%, 80%)";
        }
        else{
            paragraph.textContent = "ERROR: ";
            paragraph.style.color = "hsl(0, 85%, 60%)";
            wynik2.textContent = "Proszę podać właściwe procenty/gramy!";
            wynik2.style.color = "hsl(0, 85%, 60%)";
        }
    }
}

function initApp3() {

const spr2 = <HTMLInputElement>document.getElementById("spr2");
const ms2 = <HTMLInputElement>document.getElementById("ms2");
const myButton3 = document.getElementById("myButton3");
const wynik3 = document.getElementById("wynik3");
const paragraph = paragraphList[2];

if(!spr2 || !ms2 || !myButton3 || !wynik3 || !paragraph){
    console.error("Wymagane elementy nie zostały znalezione!")
    return;
}
    myButton3.onclick = function(){
        let answer;
        let spr2Value = Number(spr2.value);
        let ms2Value = Number(ms2.value);

        if(spr2Value === 0){
            paragraph.textContent = "ERROR: ";
            paragraph.style.color = "hsl(0, 85%, 60%)";
            wynik3.textContent = "Stężenie procentowe nie może wynosić 0!";
            wynik3.style.color = "hsl(0, 85%, 60%)";
        }
        else if(spr2Value <= 100 && ms2Value > 0){
            paragraph.textContent = "Wynik: ";
            paragraph.style.color = "hsl(78, 12%, 80%)";
            answer = ms2Value * 100 / spr2Value;
            wynik3.textContent = answer.toFixed(2) + "g";
            wynik3.style.color = "hsl(78, 12%, 80%)";
        }
        else{
            paragraph.textContent = "ERROR: ";
            paragraph.style.color = "hsl(0, 85%, 60%)";
            wynik3.textContent = "Proszę podać właściwe procenty/gramy!";
            wynik3.style.color = "hsl(0, 85%, 60%)";
        }
    }

}

initApp();
initApp2();
initApp3();