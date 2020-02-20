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
    
}