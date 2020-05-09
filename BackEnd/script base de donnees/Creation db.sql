CREATE DATABASE 'C:\Projet Bac1\FrontEnd\projet.db' LOG ON 'projet.log' COLLATION 'UTF8BIN' NCHAR COLLATION 'UCA';



create table enregistrement (
id integer not null default autoincrement ,
prenom char(50),
nom char(50),
addresse char(50),
primary key (id),


);

create table commande (
id integer not null default autoincrement  ,
primary key (id),
pain  int,
croi int,
pis int,
couque int,
brio int,
constraint fk_enregistrement_commande foreign key(id) references DBA.enregistrement(id),
);

create table avis (
id integer not null  default autoincrement ,
primary key (id),
avis int,
constraint fk_enregistrement_avis foreign key(id) references DBA.enregistrement(id)
);


create table produits(
prod char(25),
prix int);

