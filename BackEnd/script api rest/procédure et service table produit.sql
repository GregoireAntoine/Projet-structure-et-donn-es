/*procédure table produit*/

CREATE PROCEDURE "DBA"."getproduit"()
result (produ char(25), pri  int)
BEGIN
	call sa_set_http_header('Content-type','application:json; charset=utf-8');
select * from produits 
END

/*service web table produit*/
create service "GETproduit"
type 'JSON'
authorization OFF 
user "DBA"
url on 
methods 'GET'
as call dba.getproduit();