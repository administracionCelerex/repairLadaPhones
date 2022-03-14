# repairLadaPhones
este repositorio sirve para agregar la lada +52, quitar parentesis, o espacios,
a un numero. crea un Ecxel y un JSON(ver uso) con todo corregido


## prerequisitos

* nodejs
* typescript compiler para nodejs

## Como usarlo

1. Descargue el archivo .zip o clone el repositorio
2. descomprima el archivo en el lugar deseado
3. abra una terminar donde se descomprimio la carpeta
4. ejecute el comando **npm install** (esto descargara todas las dependecias, debe generarse el folder node_modules)
5. crear un folder llamado **data** al nivel de los otros folders:
6. Poner dentro de data el archivo con nombre **extension.xlsx**(este se genera manualmente con filtros en Ecxel al archivo de comparacion de contactos) debe ser como el siguiente

| **IDZOHO**          | **IDGMAIL**                 | **etagGmail**           | **nombreZoho**    | **celularesZoho** | **telefonosGmail** | **comparacionTelefonos** |
|---------------------|-----------------------------|-------------------------|-------------------|-------------------|--------------------|--------------------------|
| 3741693000014091860 | people/c1056772837870618207 | %EhQBAgUHCAkKCwwNEBMVFi | Amira Perez Rosas | 523312487735      | 3312487735         | TOCHECK/EXTENSION/       |
|                     |                             |                         |                   |                   |                    |                          |
|                     |                             |                         |                   |                   |                    |                          |


7. ejecutar el comando tsc en la terminar en la ruta donde esta el proyecto, esto debe crear los archivos con extension **.js**

8. ejecutar el comando **node app.js**
9. los resultados se iran a la carpeta data, se debieron crear
los archivos **data.json** y **extensionRepaired.xlsx**

---

## Estructura de los archivos


```
repairLadaPhones
│   README.md
│       
│
└───excelApis
│   │   excelApis.ts
│   │  
│   
│   
└───interfaces
|   │   interfaces.ts
|   │  
|
|
└───data
|   |   extension.xlsx(se debe pegar aqui)
|   |   data.json (se genera al correr el sistema)
|   |   extensionRepaired.xlsx
|
|
|
└───app.js
|
└───app.ts
```
  
# Ejemplos de Numeros 

3312217012 => +523312217012 //Agrega el +52

(33) 1525 7877 => +523315257877 // Elimina el parentesis, Espacio y agrega +52

+527771234567 => +527771234567 //El numero no necesita correciones por lo cual lo deja igual

51547 => 51547 // El numero es incorrecto y lo deja igual al no poder corregirlo
    



