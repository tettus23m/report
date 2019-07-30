const express = require('express');
const server = express();
const ejs = require('ejs');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'node',
    password: 'websystem',
    database: 'web'
});

server.get('/', function( req, res ) {
    connection.query(';', (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'sql.ejs', { content: rows });
    });
});

server.get('/result2019', function( req, res ) {
    connection.query('select race.racename, people.peoplename from result \
                     inner join race on result.racename = race.id \
                     inner join people on result.people_id1 = people.id \
                     where year = 2019;', (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'sql1.ejs', { content: rows });
    });
});

server.get('/result2018', function( req, res ) {
    connection.query('select race.racename, people.peoplename from result \
                     inner join race on result.racename = race.id \
                     inner join people on result.people_id1 = people.id \
                     where year = 2018;', (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'sql1.ejs', { content: rows });
    });
});

server.get('/result2017', function( req, res ) {
    connection.query('select race.racename, people.peoplename from result \
                     inner join race on result.racename = race.id \
                     inner join people on result.people_id1 = people.id \
                     where year = 2017;', (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'sql1.ejs', { content: rows });
    });
});

server.get('/result2016', function( req, res ) {
    connection.query('select race.racename, people.peoplename from result \
                     inner join race on result.racename = race.id \
                     inner join people on result.people_id1 = people.id \
                     where year = 2016;', (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'sql1.ejs', { content: rows });
    });
});

server.get('/result2015', function( req, res ) {
    connection.query('select race.racename, people.peoplename from result \
                     inner join race on result.racename = race.id \
                     inner join people on result.people_id1 = people.id \
                     where year = 2015;', (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'sql1.ejs', { content: rows });
    });
});

server.listen( 80, function() {
    console.log( 'listening on port 80' );
});
