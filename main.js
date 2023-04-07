window.onload = function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
}

const select =  document.querySelector('#select');
const options =  document.querySelector('#options');
const contentSelect =  document.querySelector('#select .content-select');
const hiddenInput =  document.querySelector('#input-medida');

document.querySelectorAll('#options > .option').forEach((option) => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        contentSelect.innerHTML = e.currentTarget.innerHTML;
        select.classList.toggle('active');
        options.classList.toggle('active');
        hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
    });
});

select.addEventListener('click', () =>{
    select.classList.toggle('active');
    options.classList.toggle('active');
});

const valLongitud = document.querySelector('#valLongitud');
const longitud = document.querySelector('#longitud');
const calLongitud = document.querySelector('#calLongitud');
const preLongitud = document.querySelector('#preLongitud');
const valMasa = document.querySelector('#valMasa');
const masa = document.querySelector('#masa');
const preMasa = document.querySelector('#preMasa');
const calMasa = document.querySelector('#calMasa');
const valTiempo = document.querySelector('#valTiempo');
const tiempo = document.querySelector('#tiempo');
const preTiempo = document.querySelector('#preTiempo');
const calTiempo = document.querySelector('#calTiempo');
const valFuerza = document.querySelector('#valFuerza');
const fuerza = document.querySelector('#fuerza');
const preFuerza = document.querySelector('#preFuerza');
const calFuerza = document.querySelector('#calFuerza');
const valPresion = document.querySelector('#valPresion');
const presion = document.querySelector('#presion');
const prePresion = document.querySelector('#prePresion');
const calPresion = document.querySelector('#calPresion');
const valPotencia = document.querySelector('#valPotencia');
const potencia = document.querySelector('#potencia');
const prePotencia = document.querySelector('#prePotencia');
const calPotencia = document.querySelector('#calPotencia');

valLongitud.addEventListener('click', () =>{
    longitud.classList.toggle('active');
    preLongitud.classList.toggle('active');
    calLongitud.classList.toggle('active');
    masa.classList.remove('active');
    preMasa.classList.remove('active');
    calMasa.classList.remove('active');
    tiempo.classList.remove('active');
    preTiempo.classList.remove('active');
    calTiempo.classList.remove('active');
    fuerza.classList.remove('active');
    preFuerza.classList.remove('active');
    calFuerza.classList.remove('active');
    presion.classList.remove('active');
    calPresion.classList.remove('active');
    prePresion.classList.remove('active');
    potencia.classList.remove('active');
    prePotencia.classList.remove('active');
    calPotencia.classList.remove('active');
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

valMasa.addEventListener('click', () =>{
    longitud.classList.remove('active');
    preLongitud.classList.remove('active');
    calLongitud.classList.remove('active');
    masa.classList.toggle('active');
    preMasa.classList.toggle('active');
    calMasa.classList.toggle('active');
    tiempo.classList.remove('active');
    preTiempo.classList.remove('active');
    calTiempo.classList.remove('active');
    fuerza.classList.remove('active');
    preFuerza.classList.remove('active');
    calFuerza.classList.remove('active');
    presion.classList.remove('active');
    calPresion.classList.remove('active');
    prePresion.classList.remove('active');
    calPotencia.classList.remove('active');
    potencia.classList.remove('active');
    prePotencia.classList.remove('active');
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

valTiempo.addEventListener('click', () =>{
    longitud.classList.remove('active');
    preLongitud.classList.remove('active');
    calLongitud.classList.remove('active');
    masa.classList.remove('active');
    preMasa.classList.remove('active');
    calMasa.classList.remove('active');
    tiempo.classList.toggle('active');
    preTiempo.classList.toggle('active');
    calTiempo.classList.toggle('active');
    fuerza.classList.remove('active');
    preFuerza.classList.remove('active');
    calFuerza.classList.remove('active');
    presion.classList.remove('active');
    prePresion.classList.remove('active');
    calPresion.classList.remove('active');
    potencia.classList.remove('active');
    prePotencia.classList.remove('active');
    calPotencia.classList.remove('active');
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

valFuerza.addEventListener('click', () =>{
    longitud.classList.remove('active');
    preLongitud.classList.remove('active');
    calLongitud.classList.remove('active');
    masa.classList.remove('active');
    preMasa.classList.remove('active');
    calMasa.classList.remove('active');
    tiempo.classList.remove('active');
    preTiempo.classList.remove('active');
    calTiempo.classList.remove('active');
    fuerza.classList.toggle('active');
    calFuerza.classList.toggle('active');
    preFuerza.classList.toggle('active');
    presion.classList.remove('active');
    prePresion.classList.remove('active');
    calPresion.classList.remove('active');
    potencia.classList.remove('active');
    prePotencia.classList.remove('active');
    calPotencia.classList.remove('active');
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

valPresion.addEventListener('click', () =>{
    longitud.classList.remove('active');
    preLongitud.classList.remove('active');
    calLongitud.classList.remove('active');
    masa.classList.remove('active');
    preMasa.classList.remove('active');
    calMasa.classList.remove('active');
    tiempo.classList.remove('active');
    preTiempo.classList.remove('active');
    calTiempo.classList.remove('active');
    fuerza.classList.remove('active');
    preFuerza.classList.remove('active');
    calFuerza.classList.remove('active');
    presion.classList.toggle('active');
    prePresion.classList.toggle('active');
    calPresion.classList.toggle('active');
    potencia.classList.remove('active');
    prePotencia.classList.remove('active');
    calPotencia.classList.remove('active');
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

valPotencia.addEventListener('click', () =>{
    longitud.classList.remove('active');
    preLongitud.classList.remove('active');
    calLongitud.classList.remove('active');
    masa.classList.remove('active');
    preMasa.classList.remove('active');
    calMasa.classList.remove('active');
    tiempo.classList.remove('active');
    preTiempo.classList.remove('active');
    calTiempo.classList.remove('active');
    fuerza.classList.remove('active');
    preFuerza.classList.remove('active');
    calFuerza.classList.remove('active');
    presion.classList.remove('active');
    prePresion.classList.remove('active');
    calPresion.classList.remove('active');
    potencia.classList.toggle('active');
    prePotencia.classList.toggle('active');
    calPotencia.classList.toggle('active');
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

const seleccion =  document.querySelector('#seleccion');
const opciones =  document.querySelector('#opciones');
const contentSeleccion =  document.querySelector('#seleccion .content-seleccion');
const hiddenInputL =  document.querySelector('#input-medida');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contentSeleccion.innerHTML = e.currentTarget.innerHTML;
        seleccion.classList.toggle('active');
        opciones.classList.toggle('active');
        hiddenInputL.value = e.currentTarget.querySelector('.titulo').innerText;
    });
});

seleccion.addEventListener('click', () =>{
    seleccion.classList.toggle('active');
    opciones.classList.toggle('active');
});

const seleccionM =  document.querySelector('#seleccionM');
const opcionesM =  document.querySelector('#opcionesM');
const contentSeleccionM =  document.querySelector('#seleccionM .content-seleccionM');
const hiddenInputM =  document.querySelector('#input-medida');

document.querySelectorAll('#opcionesM > .opcionM').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contentSeleccionM.innerHTML = e.currentTarget.innerHTML;
        seleccionM.classList.toggle('active');
        opcionesM.classList.toggle('active');
        hiddenInputM.value = e.currentTarget.querySelector('.titulo').innerText;
    });
});

seleccionM.addEventListener('click', () =>{
    seleccionM.classList.toggle('active');
    opcionesM.classList.toggle('active');
});

const seleccionT = document.querySelector('#seleccionT');
const opcionesT = document.querySelector('#opcionesT');
const contentSeleccionT = document.querySelector('#seleccionT .content-seleccionT');
const hiddenInputT = document.querySelector('#input-medida');

document.querySelectorAll('#opcionesT > .opcionT').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contentSeleccionT.innerHTML = e.currentTarget.innerHTML;
        seleccionT.classList.toggle('active');
        opcionesT.classList.toggle('active');
        hiddenInputT.value = e.currentTarget.querySelector('.titulo').innerText;
    });
});

seleccionT.addEventListener('click', () =>{
    seleccionT.classList.toggle('active');
    opcionesT.classList.toggle('active');
});

const seleccionF =  document.querySelector('#seleccionF');
const opcionesF =  document.querySelector('#opcionesF');
const contentSeleccionF =  document.querySelector('#seleccionF .content-seleccionF');
const hiddenInputF =  document.querySelector('#input-medida');

document.querySelectorAll('#opcionesF > .opcionF').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contentSeleccionF.innerHTML = e.currentTarget.innerHTML;
        seleccionF.classList.toggle('active');
        opcionesF.classList.toggle('active');
        hiddenInputF.value = e.currentTarget.querySelector('.titulo').innerText;
    });
});

seleccionF.addEventListener('click', () =>{
    seleccionF.classList.toggle('active');
    opcionesF.classList.toggle('active');
});

const seleccionP =  document.querySelector('#seleccionP');
const opcionesP =  document.querySelector('#opcionesP');
const contentSeleccionP =  document.querySelector('#seleccionP .content-seleccionP');
const hiddenInputP =  document.querySelector('#input-medida');

document.querySelectorAll('#opcionesP > .opcionP').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contentSeleccionP.innerHTML = e.currentTarget.innerHTML;
        seleccionP.classList.toggle('active');
        opcionesP.classList.toggle('active');
        hiddenInputP.value = e.currentTarget.querySelector('.titulo').innerText;
    });
});

seleccionP.addEventListener('click', () =>{
    seleccionP.classList.toggle('active');
    opcionesP.classList.toggle('active');
});

const seleccionPO =  document.querySelector('#seleccionPO');
const opcionesPO =  document.querySelector('#opcionesPO');
const contentSeleccionPO =  document.querySelector('#seleccionPO .content-seleccionPO');
const hiddenInputPO =  document.querySelector('#input-medida');

document.querySelectorAll('#opcionesPO > .opcionPO').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contentSeleccionPO.innerHTML = e.currentTarget.innerHTML;
        seleccionPO.classList.toggle('active');
        opcionesPO.classList.toggle('active');
        hiddenInputPO.value = e.currentTarget.querySelector('.titulo').innerText;
    });
});

seleccionPO.addEventListener('click', () =>{
    seleccionPO.classList.toggle('active');
    opcionesPO.classList.toggle('active');
});

const calPulgada = document.querySelector('#calPulgada');
const calPie = document.querySelector('#calPie');
const calYarda = document.querySelector('#calYarda');
const calBraza = document.querySelector('#calBraza');
const calMilla = document.querySelector('#calMilla');
const calOnza = document.querySelector('#calOnza');
const calLibra = document.querySelector('#calLibra');
const calAño = document.querySelector('#calAño');
const calDia = document.querySelector('#calDia');
const calHora = document.querySelector('#calHora');
const calMin = document.querySelector('#calMin');
const calHZ = document.querySelector('#calHZ');
const calLibraF = document.querySelector('#calLibraF');
const calPoundal = document.querySelector('#calPoundal');
const calPascal = document.querySelector('#calPascal');
const calAtmosfera = document.querySelector('#calAtmosfera');
const calNewtonM = document.querySelector('#calNewtonM');
const calPoundI = document.querySelector('#calPoundI');
const calBar = document.querySelector('#calBar');
const calHose = document.querySelector('#calHose');
const calculadoraL1 = document.querySelector('#calculadoraL1');
const calculadoraL2 = document.querySelector('#calculadoraL2');
const calculadoraL3 = document.querySelector('#calculadoraL3');
const calculadoraL4 = document.querySelector('#calculadoraL4');
const calculadoraL5 = document.querySelector('#calculadoraL5');
const calculadoraM1 = document.querySelector('#calculadoraM1');
const calculadoraM2 = document.querySelector('#calculadoraM2');
const calculadoraT1 = document.querySelector('#calculadoraT1');
const calculadoraT2 = document.querySelector('#calculadoraT2');
const calculadoraT3 = document.querySelector('#calculadoraT3');
const calculadoraT4 = document.querySelector('#calculadoraT4');
const calculadoraT5 = document.querySelector('#calculadoraT5');
const calculadoraF1 = document.querySelector('#calculadoraF1');
const calculadoraF2 = document.querySelector('#calculadoraF2');
const calculadoraP1 = document.querySelector('#calculadoraP1');
const calculadoraP2 = document.querySelector('#calculadoraP2');
const calculadoraP3 = document.querySelector('#calculadoraP3');
const calculadoraP4 = document.querySelector('#calculadoraP4');
const calculadoraP5 = document.querySelector('#calculadoraP5');
const calculadoraPO = document.querySelector('#calculadoraPO');

calPulgada.addEventListener('click', () =>{
    calculadoraL1.classList.toggle('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

calPie.addEventListener('click', () =>{
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.toggle('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

calYarda.addEventListener('click', () =>{
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.toggle('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

calBraza.addEventListener('click', () =>{
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.toggle('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

calMilla.addEventListener('click', () =>{
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.toggle('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

calOnza.addEventListener('click', () =>{
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.toggle('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

calLibra.addEventListener('click', () =>{
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.toggle('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

calAño.addEventListener('click', () =>{
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.toggle('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

calDia.addEventListener('click', () =>{
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.toggle('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

calHora.addEventListener('click', () =>{
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.toggle('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

calMin.addEventListener('click', () =>{
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.toggle('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

calHZ.addEventListener('click', () =>{
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.toggle('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

calLibraF.addEventListener('click', () =>{
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.toggle('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

calPoundal.addEventListener('click', () =>{
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.toggle('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

calPascal.addEventListener('click', () =>{
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.toggle('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

calAtmosfera.addEventListener('click', () =>{
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.toggle('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

calNewtonM.addEventListener('click', () =>{
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.toggle('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

calPoundI.addEventListener('click', () =>{
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.toggle('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.remove('active');
});

calBar.addEventListener('click', () =>{
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.toggle('active');
    calculadoraPO.classList.remove('active');
});

calHose.addEventListener('click', () =>{
    calculadoraL1.classList.remove('active');
    calculadoraL2.classList.remove('active');
    calculadoraL3.classList.remove('active');
    calculadoraL4.classList.remove('active');
    calculadoraL5.classList.remove('active');
    calculadoraM1.classList.remove('active');
    calculadoraM2.classList.remove('active');
    calculadoraT1.classList.remove('active');
    calculadoraT2.classList.remove('active');
    calculadoraT3.classList.remove('active');
    calculadoraT4.classList.remove('active');
    calculadoraT5.classList.remove('active');
    calculadoraF1.classList.remove('active');
    calculadoraF2.classList.remove('active');
    calculadoraP1.classList.remove('active');
    calculadoraP2.classList.remove('active');
    calculadoraP3.classList.remove('active');
    calculadoraP4.classList.remove('active');
    calculadoraP5.classList.remove('active');
    calculadoraPO.classList.toggle('active');
});

let metroP = document.getElementById('metrosP');
let pulgada = document.getElementById('pulgada');
let metroPI = document.getElementById('metrosPI');
let pie = document.getElementById('pies');
let metroY = document.getElementById('metrosY');
let yarda = document.getElementById('yarda');
let metroB = document.getElementById('metrosB');
let braza = document.getElementById('braza');
let metroM = document.getElementById('metrosM');
let milla = document.getElementById('milla');

pulgada.oninput = () => {
    let output = (parseFloat(pulgada.value)/39.37);
    metroP.value = parseFloat(output.toFixed(3));
}

metroP.oninput = () => {
    let output = (parseFloat(metroP.value)*39.37);
    pulgada.value = parseFloat(output.toFixed(3));
}

pie.oninput = () => {
    let output = (parseFloat(pie.value)/3.281);
    metroPI.value = parseFloat(output.toFixed(3));
}

metroPI.oninput = () => {
    let output = (parseFloat(metroPI.value)*3.281);
    pie.value = parseFloat(output.toFixed(3));
}

yarda.oninput = () => {
    let output = (parseFloat(yarda.value)/1.094);
    metroY.value = parseFloat(output.toFixed(3));
}

metroY.oninput = () => {
    let output = (parseFloat(metroY.value)*1.094);
    yarda.value = parseFloat(output.toFixed(3));
}

braza.oninput = () => {
    let output = (parseFloat(braza.value)*1.829);
    metroB.value = parseFloat(output.toFixed(3));
}

metroB.oninput = () => {
    let output = (parseFloat(metroB.value)/1.829);
    braza.value = parseFloat(output.toFixed(3));
}

milla.oninput = () => {
    let output = (parseFloat(milla.value)*1609.340);
    metroM.value = parseFloat(output.toFixed(3));
}

metroM.oninput = () => {
    let output = (parseFloat(metroM.value)/1609.340);
    milla.value = parseFloat(output.toFixed(3));
}

let kilogramosO = document.getElementById('kilogramosO');
let onza = document.getElementById('onza');
let kilogramosL = document.getElementById('kilogramosL');
let libra = document.getElementById('libra');

onza.oninput = () => {
    let output = (parseFloat(onza.value)*0.028);
    kilogramosO.value = parseFloat(output.toFixed(3));
}

kilogramosO.oninput = () => {
    let output = (parseFloat(kilogramosO.value)/0.028);
    onza.value = parseFloat(output.toFixed(3));
}

libra.oninput = () => {
    let output = (parseFloat(libra.value)* 0.454);
    kilogramosL.value = parseFloat(output.toFixed(3));
}

kilogramosL.oninput = () => {
    let output = (parseFloat(kilogramosL.value)/0.454);
    libra.value = parseFloat(output.toFixed(3));
}

let segundoA = document.getElementById('segundoA');
let año = document.getElementById('año');
let segundoD = document.getElementById('segundoD');
let dia = document.getElementById('dia');
let segundoH = document.getElementById('segundoH');
let hora = document.getElementById('hora');
let segundoM = document.getElementById('segundoM');
let minuto = document.getElementById('minuto');
let segundoHZ = document.getElementById('segundoHZ');
let hercio = document.getElementById('hercio');

año.oninput = () => {
    let output = (parseFloat(año.value)*31556000);
    segundoA.value = parseFloat(output.toFixed(3));
}

segundoA.oninput = () => {
    let output = (parseFloat(segundoA.value)/31556000);
    año.value = parseFloat(output.toFixed(3));
}

dia.oninput = () => {
    let output = (parseFloat(dia.value)*86400);
    segundoD.value = parseFloat(output.toFixed(3));
}

segundoD.oninput = () => {
    let output = (parseFloat(segundoD.value)/86400);
    dia.value = parseFloat(output.toFixed(3));
}

hora.oninput = () => {
    let output = (parseFloat(hora.value)*3600);
    segundoH.value = parseFloat(output.toFixed(3));
}

segundoH.oninput = () => {
    let output = (parseFloat(segundoH.value)/3600);
    hora.value = parseFloat(output.toFixed(3));
}

minuto.oninput = () => {
    let output = (parseFloat(minuto.value)*60);
    segundoM.value = parseFloat(output.toFixed(3));
}

segundoM.oninput = () => {
    let output = (parseFloat(segundoM.value)/60);
    minuto.value = parseFloat(output.toFixed(3));
}

hercio.oninput = () => {
    let output = (parseFloat(hercio.value)*1);
    segundoHZ.value = parseFloat(output.toFixed(3));
}

segundoHZ.oninput = () => {
    let output = (parseFloat(segundoHZ.value)/1);
    hercio.value = parseFloat(output.toFixed(3));
}

let newtonL = document.getElementById('newtonL');
let librafuerza = document.getElementById('librafuerza');
let newtonP = document.getElementById('newtonP');
let poudal = document.getElementById('poudal');

librafuerza.oninput = () => {
    let output = (parseFloat(librafuerza.value)*4.448);
    newtonL.value = parseFloat(output.toFixed(3));
}

newtonL.oninput = () => {
    let output = (parseFloat(newtonL.value)/4.448);
    librafuerza.value = parseFloat(output.toFixed(3));
}

poudal.oninput = () => {
    let output = (parseFloat(poudal.value)/7.233);
    newtonP.value = parseFloat(output.toFixed(3));
}

newtonP.oninput = () => {
    let output = (parseFloat(newtonP.value)*7.233);
    poudal.value = parseFloat(output.toFixed(3));
}

let librapulgadaPA = document.getElementById('librapulgadaPA');
let pascal = document.getElementById('pascal');
let librapulgadaATM = document.getElementById('librapulgadaATM');
let atmosfera = document.getElementById('atmosfera');
let librapulgadaNM = document.getElementById('librapulgadaNM');
let newtonmetros = document.getElementById('newtonmetros');
let librapulgadaPQI = document.getElementById('librapulgadaPQI');
let poundForce = document.getElementById('poundForce');
let librapulgadaB = document.getElementById('librapulgadaB');
let bar = document.getElementById('bar');

librapulgadaPA.oninput = () => {
    let output = (parseFloat(librapulgadaPA.value)*6896.550);
    pascal.value = parseFloat(output.toFixed(3));
}

pascal.oninput = () => {
    let output = (parseFloat(pascal.value)/66896.550);
    librapulgadaPA.value = parseFloat(output.toFixed(3));
}

librapulgadaATM.oninput = () => {
    let output = (parseFloat(librapulgadaATM.value)/14.7);
    atmosfera.value = parseFloat(output.toFixed(3));
}

atmosfera.oninput = () => {
    let output = (parseFloat(atmosfera.value)*14.7);
    librapulgadaATM.value = parseFloat(output.toFixed(3));
}

librapulgadaNM.oninput = () => {
    let output = (parseFloat(librapulgadaNM.value)*6896.550);
    newtonmetros.value = parseFloat(output.toFixed(3));
}

newtonmetros.oninput = () => {
    let output = (parseFloat(newtonmetros.value)/6896.550);
    librapulgadaNM.value = parseFloat(output.toFixed(3));
}

librapulgadaPQI.oninput = () => {
    let output = (parseFloat(librapulgadaPQI.value)*0.999);
    poundForce.value = parseFloat(output.toFixed(3));
}

poundForce.oninput = () => {
    let output = (parseFloat(poundForce.value)/0.999);
    librapulgadaPQI.value = parseFloat(output.toFixed(3));
}

librapulgadaB.oninput = () => {
    let output = (parseFloat(librapulgadaB.value)* 0.069);
    bar.value = parseFloat(output.toFixed(3));
}

bar.oninput = () => {
    let output = (parseFloat(bar.value)/ 0.069);
    librapulgadaB.value = parseFloat(output.toFixed(3));
}

let hose = document.getElementById('hose');
let vatio = document.getElementById('vatio');

hose.oninput = () => {
    let output = (parseFloat(hose.value)*745.700);
    vatio.value = parseFloat(output.toFixed(3));
}

vatio.oninput = () => {
    let output = (parseFloat(vatio.value)/745.700);
    hose.value = parseFloat(output.toFixed(3));
}

let ej1 = document.getElementById('ej1');
const ej1V = document.querySelector('#ej1');

ej1.oninput = () => {
    let output = (parseFloat(ej1.value));
    if(output == 0.025){
        ej1V.classList.toggle('true');
        ej1V.classList.remove('false');
    }else{
        ej1V.classList.toggle('false');
        ej1V.classList.remove('true');
    }
}

let ej2 = document.getElementById('ej2');
const ej2V = document.querySelector('#ej2');

ej2.oninput = () => {
    let output = (parseFloat(ej2.value));
    if(output == 0.028){
        ej2V.classList.toggle('true');
        ej2V.classList.remove('false');
    }else{
        ej2V.classList.toggle('false');
        ej2V.classList.remove('true');
    }
}

let ej3 = document.getElementById('ej3');
const ej3V = document.querySelector('#ej3');

ej3.oninput = () => {
    let output = (parseFloat(ej3.value));
    if(output == 31556000){
        ej3V.classList.toggle('true');
        ej3V.classList.remove('false');
    }else{
        ej3V.classList.toggle('false');
        ej3V.classList.remove('true');
    }
}

let ej4 = document.getElementById('ej4');
const ej4V = document.querySelector('#ej4');

ej4.oninput = () => {
    let output = (parseFloat(ej4.value));
    if(output == 0.138){
        ej4V.classList.toggle('true');
        ej4V.classList.remove('false');
    }else{
        ej4V.classList.toggle('false');
        ej4V.classList.remove('true');
    }
}

let ej5 = document.getElementById('ej5');
const ej5V = document.querySelector('#ej5');

ej5.oninput = () => {
    let output = (parseFloat(ej5.value));
    if(output == 6896.55){
        ej5V.classList.toggle('true');
        ej5V.classList.remove('false');
    }else{
        ej5V.classList.toggle('false');
        ej5V.classList.remove('true');
    }
}

let ej6 = document.getElementById('ej6');
const ej6V = document.querySelector('#ej6');

ej6.oninput = () => {
    let output = (parseFloat(ej6.value));
    if(output == 745.7){
        ej6V.classList.toggle('true');
        ej6V.classList.remove('false');
    }else{
        ej6V.classList.toggle('false');
        ej6V.classList.remove('true');
    }
}

let ej7 = document.getElementById('ej7');
const ej7V = document.querySelector('#ej7');

ej7.oninput = () => {
    let output = (parseFloat(ej7.value));
    if(output == 4828.02){
        ej7V.classList.toggle('true');
        ej7V.classList.remove('false');
    }else{
        ej7V.classList.toggle('false');
        ej7V.classList.remove('true');
    }
}

let ej8 = document.getElementById('ej8');
const ej8V = document.querySelector('#ej8');

ej8.oninput = () => {
    let output = (parseFloat(ej8.value));
    if(output == 183.736){
        ej8V.classList.toggle('true');
        ej8V.classList.remove('false');
    }else{
        ej8V.classList.toggle('false');
        ej8V.classList.remove('true');
    }
}

let ej9 = document.getElementById('ej9');
const ej9V = document.querySelector('#ej9');

ej9.oninput = () => {
    let output = (parseFloat(ej9.value));
    if(output == 10.896){
        ej9V.classList.toggle('true');
        ej9V.classList.remove('false');
    }else{
        ej9V.classList.toggle('false');
        ej9V.classList.remove('true');
    }
}

let ej10 = document.getElementById('ej10');
const ej10V = document.querySelector('#ej10');

ej10.oninput = () => {
    let output = (parseFloat(ej10.value));
    if(output == 3.472){
        ej10V.classList.toggle('true');
        ej10V.classList.remove('false');
    }else{
        ej10V.classList.toggle('false');
        ej10V.classList.remove('true');
    }
}

let ej11 = document.getElementById('ej11');
const ej11V = document.querySelector('#ej11');

ej11.oninput = () => {
    let output = (parseFloat(ej11.value));
    if(output == 10800){
        ej11V.classList.toggle('true');
        ej11V.classList.remove('false');
    }else{
        ej11V.classList.toggle('false');
        ej11V.classList.remove('true');
    }
}

let ej12 = document.getElementById('ej12');
const ej12V = document.querySelector('#ej12');

ej12.oninput = () => {
    let output = (parseFloat(ej12.value));
    if(output == 432000){
        ej12V.classList.toggle('true');
        ej12V.classList.remove('false');
    }else{
        ej12V.classList.toggle('false');
        ej12V.classList.remove('true');
    }
}

let ej13 = document.getElementById('ej13');
const ej13V = document.querySelector('#ej13');

ej13.oninput = () => {
    let output = (parseFloat(ej13.value));
    if(output == 23.574){
        ej13V.classList.toggle('true');
        ej13V.classList.remove('false');
    }else{
        ej13V.classList.toggle('false');
        ej13V.classList.remove('true');
    }
}

let ej14 = document.getElementById('ej14');
const ej14V = document.querySelector('#ej14');

ej14.oninput = () => {
    let output = (parseFloat(ej14.value));
    if(output == 4.899){
        ej14V.classList.toggle('true');
        ej14V.classList.remove('false');
    }else{
        ej14V.classList.toggle('false');
        ej14V.classList.remove('true');
    }
}

let ej15 = document.getElementById('ej15');
const ej15V = document.querySelector('#ej15');

ej15.oninput = () => {
    let output = (parseFloat(ej15.value));
    if(output == 0.074){
        ej15V.classList.toggle('true');
        ej15V.classList.remove('false');
    }else{
        ej15V.classList.toggle('false');
        ej15V.classList.remove('true');
    }
}

let ej16 = document.getElementById('ej16');
const ej16V = document.querySelector('#ej16');

ej16.oninput = () => {
    let output = (parseFloat(ej16.value));
    if(output == 0.01){
        ej16V.classList.toggle('true');
        ej16V.classList.remove('false');
    }else{
        ej16V.classList.toggle('false');
        ej16V.classList.remove('true');
    }
}

let ej17 = document.getElementById('ej17');
const ej17V = document.querySelector('#ej17');

ej17.oninput = () => {
    let output = (parseFloat(ej17.value));
    if(output == 100){
        ej17V.classList.toggle('true');
        ej17V.classList.remove('false');
    }else{
        ej17V.classList.toggle('false');
        ej17V.classList.remove('true');
    }
}

let ej18 = document.getElementById('ej18');
const ej18V = document.querySelector('#ej18');

ej18.oninput = () => {
    let output = (parseFloat(ej18.value));
    if(output == 1000){
        ej18V.classList.toggle('true');
        ej18V.classList.remove('false');
    }else{
        ej18V.classList.toggle('false');
        ej18V.classList.remove('true');
    }
}

let ej19 = document.getElementById('ej19');
const ej19V = document.querySelector('#ej19');

ej19.oninput = () => {
    let output = (parseFloat(ej19.value));
    if(output == 0.001){
        ej19V.classList.toggle('true');
        ej19V.classList.remove('false');
    }else{
        ej19V.classList.toggle('false');
        ej19V.classList.remove('true');
    }
}

let ej20 = document.getElementById('ej20');
const ej20V = document.querySelector('#ej20');

ej20.oninput = () => {
    let output = (parseFloat(ej20.value));
    if(output == 10){
        ej20V.classList.toggle('true');
        ej20V.classList.remove('false');
    }else{
        ej20V.classList.toggle('false');
        ej20V.classList.remove('true');
    }
}

let ej21 = document.getElementById('ej21');
const ej21V = document.querySelector('#ej21');

ej21.oninput = () => {
    let output = (parseFloat(ej21.value));
    if(output == 0.01){
        ej21V.classList.toggle('true');
        ej21V.classList.remove('false');
    }else{
        ej21V.classList.toggle('false');
        ej21V.classList.remove('true');
    }
}