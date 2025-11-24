const Ms = document.getElementById("Ms");
const Mr = document.getElementById("Mr");
const myButton = document.getElementById("myButton");
const wynik = document.getElementById("wynik");

myButton.onclick = function(){
    let answer;
    let MsValue = Number(Ms.value);
    let MrValue = Number(Mr.value);

    if(MsValue > MrValue && MsValue > 0 && MrValue > 0){
        window.alert("Masa substancji rozpuszczonej nie może być większa niż masa całego roztworu!");
    }
    else if(MsValue > 0 && MrValue > 0){
        answer = MsValue / MrValue * 100;
        wynik.textContent = answer + "%";
    }
    else{
        window.alert("Proszę podać prawidłowe liczby!");
    }
}

const Spr = document.getElementById("Spr");
const Mr2 = document.getElementById("Mr2");
const myButton2 = document.getElementById("myButton2");
const wynik2 = document.getElementById("wynik2");

    myButton2.onclick = function(){
        let answer;
        let SprValue = Number(Spr.value);
        let Mr2Value = Number(Mr2.value);

        if(SprValue === 0){
            window.alert("Stężenie procentowe nie może wynosić 0!");
        }
        else if(SprValue <= 100 && Mr2Value > 0){
            answer = SprValue / 100 * Mr2Value;
            wynik2.textContent = answer + "g";
        }
        else{
            window.alert("Proszę podać właściwe procenty/gramy!");
        }
    }

const Spr2 = document.getElementById("Spr2");
const Ms2 = document.getElementById("Ms2");
const myButton3 = document.getElementById("myButton3");
const wyinik3 = document.getElementById("wynik3");

    myButton3.onclick = function(){
        let answer;
        let Spr2Value = Number(Spr2.value);
        let Ms2Value = Number(Ms2.value);

        if(Spr2Value === 0){
            window.alert("Stężenie procentowe nie może wynosić 0!")
        }
        else if(Spr2Value <= 100 && Ms2Value > 0){
            answer = Ms2Value * 100 / Spr2Value;
            wyinik3.textContent = answer + "g";
        }
        else{
            window.alert("Proszę podać właściwe procenty/gramy!");
        }
    }