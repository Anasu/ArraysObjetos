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

    // Escribir con document.write la lista de consultas médicas de Dental
    //cada dato debe estar separado por guión
    document.write("<h2>Pacientes de sector Dental</h2>");
    printInfo(dental);
    // Imprimir un listado de todos los pacientes que se atendieron en el centro médico:
    document.write("<h2>Asistentes al centro médico:</h2>");
    document.write("<h3>Radiología:</h3>");
    printPaciente(radiologia);
    document.write("<h3>Traumatología:</h3>");
    printPaciente(traumatologia);
    document.write("<h3>Dental:</h3>");
    printPaciente(dental);

    // Modificar previsiones de Dental. Cambiar isapre-fonasa. Usar forEach e ifs
    cambiarPrevision(dental);
    console.log(dental);
}
const printInfo = function(sector)
{
    let keys = ["hora", "especialista", "paciente", "rut", "prevision"];
    for(let i in sector)
    {
        let ob = sector[i];
        let writeString = "<p>";
        for(let j in keys)
        {
            let key = keys[j];
            if(j > 0)
            {
                writeString += " - ";
            }
            writeString += ob[key];
        }
        writeString += "</p>";
        document.write(writeString);
    }
}
const printPaciente = function(sector)
{
    sector.forEach(
        function(objeto)
        {
            document.write(`<p>${objeto.paciente}</p>`);
        });
}
const cambiarPrevision = function(sector)
{
    sector.forEach(
        function(objeto)
        {
            switch (objeto.prevision)
            {
                case "ISAPRE":
                    objeto.prevision = "FONASA";
                    break;
                case "FONASA":
                    objeto.prevision = "ISAPRE";
                    break;
                default:
                    console.log("La prevision no calza con nada");
                    break;
            }
        });
}