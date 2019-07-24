create table people ( id int auto_increment not null primary key, peoplename varchar(100) );
create table race ( id int auto_increment not null primary key, racename varchar(100) );
create table result ( id int auto_increment not null primary key, year int, racename int, people_id1 int, people_id2 int, people_id3 int );
load data local infile 'people.csv' into table people fields terminated by ',' enclosed by '"';
load data local infile 'race.csv' into table race fields terminated by ',' enclosed by '"';
load data local infile 'result.csv' into table result fields terminated by ',' enclosed by '"';
