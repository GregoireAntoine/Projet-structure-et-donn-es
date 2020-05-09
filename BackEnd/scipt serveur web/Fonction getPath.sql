CREATE FUNCTION "DBA"."getPath"() /* [IN] nom_paramètre type_paramètre [DEFAULT valeur_par_défaut], ... */
returns long varchar
deterministic
begin
  declare dbpath long varchar;
  declare dbname long varchar;
  set dbpath = (select db_property('file'));
  set dbname = (select db_property('name'))+'.db';
  set dbpath = "left"(dbpath,length(dbpath)-length(dbname));
  return dbpath
end