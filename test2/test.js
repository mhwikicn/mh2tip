function test(at,bai,wep) {

// 武器　１切断　２打撃　３片手　４ランス　５ガンランス

var kc = document.F1.kire.value;

var str = document.F1.buki.value;
 var at1 = str.substr(0,4);
 var at2 = str.substr(4,3);
 var zok = str.substr(7,1);

if (zok == "-"){
 at1 = document.F1.T1.value;
 at2 = document.F1.T2.value;
 }

str = document.F1.bui.value;
 var niks = str.substr(0,3);
 var nikd = str.substr(4,3);

 var nik2 = (zok == 0) ? "0" : str.substr(8 + zok * 4,3);

if (niks == "--"){
 niks = document.F1.T3.value;
 nikd = niks;
 nik2 = document.F1.T4.value;
 }

if (wep == 4){
   nik1 = Math.max(nikd * 0.72 , niks);
 } else {
   nik1 = (wep == 2) ? nikd : niks;
 }

var d1 = at * at1 / bai * hos[wep] * kn[kc] * nik1 / 10000;
var d2 = at2 * nik2 * kz[kc] / 1000;

document.F1.T1.value = parseFloat(at1);
document.F1.T2.value = parseFloat(at2);
document.F1.T3.value = nik1;
document.F1.T4.value = nik2;

document.F1.T5.value = d1;
document.F1.T6.value = d2;
document.F1.T7.value = Math.floor(d1) + Math.floor(d2);
document.F1.T8.value = str;

}