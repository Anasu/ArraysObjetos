window.onload = function ()
{
    document.write("<h1>Estadisticas centro médico ñuñoa</h1>");

    //Mostrar por pantalla la cantidad de consultas por cada listado 
    document.write("<h2>Estadisticas centro médico ñuñoa</h2>");
    document.write("<h3>Cantidad de consultas para Radiología:</h3>"+
        " "+radiologia.length);
    document.write("<h3>Cantidad de consultas para Traumatología:</h3>"+
        " "+traumatologia.length);
    document.write("<h3>Cantidad de consultas para Dental:</h3>"+
        " "+dental.length);
    //Mostrar primera y ultima atencion de cada listado, desplegando
    //nombre, rut y prevision separados por guión
    document.write("<h2>Primeras y últimas atenciones</h2>");
    //Radiología
    document.write("<h3>Atenciones de Radiología</h3>")
    document.write("<p>Primera atención: "+radiologia[0].paciente+
        " - "+radiologia[0].rut+" - "+radiologia[0].prevision+"</p>");
    document.write("<p>Última atención: "+radiologia[radiologia.length - 1].paciente+
        " - "+radiologia[radiologia.length - 1].rut+" - "+
        radiologia[radiologia.length - 1].prevision+"</p>"); 
    //Traumatología
    document.write("<h3>Atenciones de Traumatología</h3>")
    document.write("<p>Primera atención: "+traumatologia[0].paciente+
        " - "+traumatologia[0].rut+" - "+traumatologia[0].prevision+"</p>");
    document.write("<p>Última atención: "+traumatologia[traumatologia.length - 1].paciente+
        " - "+traumatologia[traumatologia.length - 1].rut+" - "+
        traumatologia[traumatologia.length - 1].prevision+"</p>");
    //Dentales
    document.write("<h3>Atenciones Dentales</h3>")
    document.write("<p>Primera atención: "+dental[0].paciente+
        " - "+dental[0].rut+" - "+dental[0].prevision+"</p>");
    document.write("<p>Última atención: "+dental[dental.length - 1].paciente+
        " - "+dental[dental.length - 1].rut+" - "+
        dental[dental.length - 1].prevision+"</p>");    

    // Parte II: 

    // Agregar elementos al array de Traumatologia con concat :D
    traumatologia.concat(traumatologiaAdd);
    console.log(traumatologia);

    // Eliminar el primer (shift) y último (pop) elemento de radiología
    radiologia.shift();
    radiologia.pop();
    console.log(radiologia);

}