function test() {

var str = document.F1.buki.value;
 var at1 = str.substr(0,3);
 var at2 = str.substr(3,3);
 var zok = str.substr(6,1);
 var c2 = parseInt(str.substr(8,1),16);
 var c3 = parseInt(str.substr(9,1),16);
 var c4 = parseInt(str.substr(10,1),16);

if (zok == "-"){
 at1 = document.F1.A1.value;
 at2 = document.F1.A2.value;
 }

str = document.F1.bui.value;
 var nik1 = str.substr(8,3);
 var nik2 = (zok == 0) ? "0" : str.substr(8 + zok * 4,3);

if (nik2 == "--"){
 nik1 = document.F1.N2.value;
 nik2 = document.F1.N3.value;
 }

var dn2 = at[c2] * at1 / 1.2 * cn[2] * nik1 / 10000;
var dn3 = at[c3] * at1 / 1.2 * cn[3] * nik1 / 10000;
var dn4 = at[c4] * at1 / 1.2 * cn[4] * nik1 / 10000;

var dz2 = at2 * nik2 * cz[2] * h[c2] / 1000;
var dz3 = at2 * nik2 * cz[3] * h[c3] / 1000;
var dz4 = at2 * nik2 * cz[4] * h[c4] / 1000;

document.F1.TY2.value = type[c2];
document.F1.TY3.value = type[c3];
document.F1.TY4.value = type[c4];

document.F1.D21.value = dn2;
document.F1.D31.value = dn3;
document.F1.D41.value = dn4;

document.F1.D22.value = dz2;
document.F1.D32.value = dz3;
document.F1.D42.value = dz4;

document.F1.T2.value = Math.floor(dn2) + Math.floor(dz2);
document.F1.T3.value = Math.floor(dn3) + Math.floor(dz3);
document.F1.T4.value = Math.floor(dn4) + Math.floor(dz4);

document.F1.A1.value = parseFloat(at1);
document.F1.A2.value = parseFloat(at2);
document.F1.N2.value = nik1;
document.F1.N3.value = nik2;
document.F1.N1.value = str;

}