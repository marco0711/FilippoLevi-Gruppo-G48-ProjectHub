var data='[{"NomeProgetto":"Progetto-A", "Descrizione":"bla bla bla bla","CompetenzeRichieste" : "Comp.1,Comp.3"},{"NomeProgetto":"Progetto-B", "Descrizione":"bla bla bla bla","Competenze Richieste" : "Comp.2,Comp.4"},{"NomeProgetto":"Progetto-C", "Descrizione":"bla bla bla bla","Competenze Richieste" : "Comp.1,Comp.2"},{"NomeProgetto":"Progetto-D", "Descrizione":"bla bla bla bla","CompetenzeRichieste" : "Comp.4,Comp.5"},{"NomeProgetto":"Progetto-E", "Descrizione":"bla bla bla bla","CompetenzeRichieste" : "Comp.7,Comp.2"},{"NomeProgetto":"Progetto-F", "Descrizione":"bla bla bla bla","CompetenzeRichieste" : "Comp.2,Comp.1"}]';
data=JSON.parse(data);

function cerca()
{    
    var v = document.getElementById("idtext").value;
    var trovato=false;
    var i=0;
    while(!trovato && i<data.length)
    {
        if(v==data[i].NomeProgetto)
        {
            document.getElementById("idResult").innerHTML= "Nome Progetto: "+ data[i].NomeProgetto +"<br>"+ "Descrzione: "+ data[i].Descrizione +"<br>"+"Competenze Richieste: "+ data[i].CompetenzeRichieste +"<br>";
            trovato=true;
        }
        else
            document.getElementById("idResult").innerHTML= "Nessun Riscontro Trovato...";
        i++
    }
}

function inserisci()
{
    data.push({ NomeProgetto : document.getElementById("idNome").value, Descrizione : document.getElementById("idDesc").value, CompetenzeRichieste : document.getElementById("idComp").value});
    data = JSON.stringify(data);
}

function visualizza()
{
    var testo="";
    for(var i=0;i<data.length;i++)
    {
        testo+="Nome Progetto: "+ data[i].NomeProgetto +"<br>"+ "Descrzione: "+ data[i].Descrizione +"<br>"+"Competenze Richieste: "+ data[i].CompetenzeRichieste +"<br><br>";

    } 
    document.getElementById("idResult").innerHTML= testo;
}

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = { swaggerDefinition: {info: {title:"Customer API", description: "Uso di API nel file data.js", contact: {name: "Gruppo-G48"}, servers:["github.com/FilippoLevi/ProjectHub"]}}, apis:["data.js"]};
const swaggerDocs = swaggerJsDoc(swaggerOption);
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocs));