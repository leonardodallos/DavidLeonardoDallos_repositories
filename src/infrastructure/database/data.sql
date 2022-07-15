
INSERT INTO tribe (id_organization, name, status) VALUES (779122101033172993,'Centro Digital',604);--779134643751354370
INSERT INTO tribe (id_organization, name, status) VALUES (779122101033172993,'Asistente Banca',604);--779134794040049666
INSERT INTO tribe (id_organization, name, status) VALUES (779076130417147906,'Tech Digital',604);--779134794300915714

INSERT INTO repository (id_tribe, name, state, create_time, status) VALUES (779134643751354370,'cd-common-utils','E',CURRENT_DATE, 'A');--779135898730528769 
INSERT INTO repository (id_tribe, name, state, create_time, status) VALUES (779134643751354370,'cd-common-text','E',CURRENT_DATE, 'A');--779135898970128385 
INSERT INTO repository (id_tribe, name, state, create_time, status) VALUES (779134643751354370,'cd-common-images','E',CURRENT_DATE, 'A');--779135899208089601 
INSERT INTO repository (id_tribe, name, state, create_time, status) VALUES (779134643751354370,'cd-common-files','E',CURRENT_DATE, 'A');--779135899459649537 
INSERT INTO repository (id_tribe, name, state, create_time, status) VALUES (779134794040049666,'cd-common-http','E',CURRENT_DATE, 'A');--779135899695644673 

INSERT INTO metrics VALUES (779135898730528769,80, 0, 2, 2, 1);
INSERT INTO metrics VALUES (779135898970128385,96, 0, 2, 2, 1);
INSERT INTO metrics VALUES (779135899208089601,70, 0, 2, 2, 1);
INSERT INTO metrics VALUES (779135899459649537,78, 0, 2, 2, 1);
INSERT INTO metrics VALUES (779135899695644673,23, 0, 2, 2, 1);