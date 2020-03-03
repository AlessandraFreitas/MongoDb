var ClienteMongo = require('mongodb').MongoClient;
var url = "mongodb:localhost/loja";
ClienteMongo.connect(url,function(erro,banco){
    if(erro) throw erro;
    console.log("banco criado...");
    banco.close();
});

ClienteMongo.connect(url,function(erro,banco){
    if(erro) throw erro;
    banco.createCollection("produtos", function(erro, resultado){
        if(erro) throw erro;

        console.log("Coleção criada com sucesso");
    });
    
    banco.close();
});

ClienteMongo.connect(url,function(erro,banco){
    if(erro) throw erro;
    var objetos = [
        {'nome':'Pão','Preço':'10','Quantidade':'8'},
        {'nome':'Queijo','Preço':'16','Quantidade':'1'},
        {'nome':'Presunto','Preço':'18','Quantidade':'1'},
        {'nome':'Manteiga','Preço':'9','Quantidade':'1'},
        {'nome':'Leite','Preço':'5','Quantidade':'2'}
    ];
    banco.collection('produtos').insertOne(objeto, function(erro, resultado){
        
        if(erro) throw erro;

        console.log('Vários produtos inseridos com sucesso');
    });
    
    banco.close();
});
ClienteMongo.connect(url, function(erro, banco){
    if(erro) throw erro;
    banco.collection('produtos').find({}).toArray(function(erro, resultado){
        
        if(erro) throw erro;
        console.log(resultado);
    });
    banco.close();
});
