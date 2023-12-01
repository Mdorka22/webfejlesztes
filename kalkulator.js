document.getElementById("kalkulal").addEventListener
    ("click", kalkulator);
function kalkulator() {
    const poloar = 5000;
    const sapkaar = 3000;
    const cdar = 4000;
    let a = Number(document.getElementById("polodb1").value);
    let b = Number(document.getElementById("polodb2").value);
    let c = Number(document.getElementById("polodb3").value);
    let d = Number(document.getElementById("polodb4").value);
    let e = Number(document.getElementById("polodb5").value);
    let f = Number(document.getElementById("polodb6").value);
    let g = Number(document.getElementById("sapkadb1").value);
    let h = Number(document.getElementById("sapkadb2").value);
    let i = Number(document.getElementById("sapkadb3").value);
    let j = Number(document.getElementById("cddb1").value);
    let k = Number(document.getElementById("cddb2").value);
    let l = Number(document.getElementById("cddb3").value);
    let ar = ((a + b + c + d + e + f) * poloar + (g + h + i) * sapkaar + (j + k + l) * cdar);
    let db = (a + b + c + d + e + f + g + h + i + j + k + l);
    if (ar < 20000) {
        if (db >=10) {
            ar = ar * 0.8+1500;
        }
        else if (db>=5) {
            ar = ar * 0.9+1500;
        }
        else {ar = ar + 1500;}
    }
    else {
        if (db >= 10) {
            ar = ar * 0.8;
        }
        else if (db >=5) {
            ar = ar * 0.9;
        }
    }
    if ((a + b + c + d + e + f) >= 3 || (g + h + i) >= 3 || (j + k + l) >= 3) { document.getElementById("ajandek").value = "Ajándék CD-t kap"; }
    else if ((a + b + c + d + e + f) == 2 || (g + h + i) == 2 || (j + k + l) == 2) {
        if ((a + b + c + d + e + f) == 2 && (g + h + i) == 2 &&  (j + k + l) == 2){
            document.getElementById("ajandek").value = "A kedvezményhez még egy póló, egy CD vagy egy sapka kiválasztása szükséges";
        }
        else if ((a + b + c + d + e + f) == 2 && (j + k + l) == 2) {
            document.getElementById("ajandek").value = "A kedvezményhez még egy póló vagy egy CD kiválasztása szükséges";
        }
        else if ((g + h + i) == 2 && (j + k + l) == 2) {
            document.getElementById("ajandek").value = "A kedvezményhez még egy sapka vagy egy CD kiválasztása szükséges"; 
        }
        else if ((g + h + i) == 2  && (a + b + c + d + e + f) == 2)  {
            document.getElementById("ajandek").value = "A kedvezményhez még egy póló vagy egy sapka kiválasztása szükséges"; 
        }
        else if ((a + b + c + d + e + f) == 2) {
            document.getElementById("ajandek").value = "A kedvezményhez még egy póló kiválasztása szükséges";
        }
        else if ((g + h + i) == 2) {
            document.getElementById("ajandek").value = "A kedvezményhez még egy sapka kiválasztása szükséges";
        }
        else {
            document.getElementById("ajandek").value = "A kedvezményhez még egy CD kiválasztása szükséges";
        }
    }
    else { document.getElementById("ajandek").value = "Sajnos nem részesül ajándékban" }



    document.getElementById("osszeg").value = ar;
}
