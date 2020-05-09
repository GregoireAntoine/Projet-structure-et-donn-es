/*procédure js*/

CREATE PROCEDURE "DBA"."getjs"(in url char(255))
result (js long varchar) dynamic result sets 1 
BEGIN
	call sa_set_http_header('Content-Type','text/js');
select xp_read_file(dba.getPath() || 'JS\' || url)
END


/*service web js*/
create service "js"
type 'RAW'
authorization OFF 
user "DBA"
url on 
methods 'GET'
as call dba.getjs(:url);