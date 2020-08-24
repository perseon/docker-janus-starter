INSTRUCTIUNI DE INSTALARE APLICATIE

Observatii generale:

- aplicatia este compusa din multe componente si pentru simplificarea exploatarii si reproductibilitate este dockerizata.
- in mijlocul sistemului sta un server de reverse proxy (nginx) care redirectioneaza traficul intre containere. Tot el face upgrade-ul pe HTTPS
- aplicatia asculta pe porturile http si https la ip-ul 192.168.99.23 sau https://rtc.local
- aplicatia nu va rula decat dupa instalarea unui certificat root pe fiecare terminal (data/cert/rootCA.crt); 
certificatul este self-signed si are 10 ani valabilitate.

Pregatirea hostului:
 - hostul trebuie sa fie un linux recent. A fost testat pe ubuntu dar ar trebui sa functioneze pe orice distributie recenta.
 - ip 192.168.99.23
 - se instaleaza docker (eu am versiunea 19.03.12) https://docs.docker.com/engine/install/
 - se instaleaza docker-compose (eu am versiunea 1.24.0) https://docs.docker.com/compose/install/
 - daca nu exista comanda git, se instaleaza
Eu rulez docker ca non-root si atunci se adauga userul care ruleaza aplicatia in grupul docker (pentru a da comenzile fara sudo);
ar trebui sa mearga si ca root dar nu am testat.

se cloneaza aplicatia in directorul home:

dupa clonare, in directorul proiectului se ruleaza comanda 

docker-compose up

comanda va dura mult pe un calculator rapid si foarte mult pe unul incet (compileaza o gramada de cod - din pacate alta solutie nu exista)

Daca toate sunt in regula aplicatia poate fi vizitata in browser folosind ip-ul https://192.168.99.23 sau https://rtc.local

