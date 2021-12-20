'use strict';
var test = require('tape');
var request = require ('supertest');
var app = require (".../server");

test('Correct users returned',function(x)
{
    request(app)
    .get(cerca())
    .except('Content-Type', /json/)
    .except(200)
    .end(function(err,res){
        var expectedReturn= ['NomeProgetto','Descrizione','CompetenzeRichieste'];
        x.error(err,'No error');
        x.same(res.body,expectedReturn,'Return che apettavo');
        x.end();
    });
});