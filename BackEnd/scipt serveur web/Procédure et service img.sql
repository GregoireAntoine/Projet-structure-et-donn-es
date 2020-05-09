/*procédure img*/

CREATE PROCEDURE "DBA"."http_getIMG"(in url char(255))
result (img long BINARY ) 
BEGIN
	call sa_set_http_header('Content-Type','image/png');
    select xp_read_file(dba.getPath() || 'IMG\' || url);
END


/*service img*/

create service "img"
type 'RAW'
authorization OFF 
user "DBA"
url on 
methods 'GET'
as call dba.http_getIMG(:url);