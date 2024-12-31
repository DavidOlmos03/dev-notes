const sectionsCol1 = [
    {
        code: `python3 -m venv nombre_del_entorno`,
        language: "typescript",
        title: "Crear entorno virtual",
    },
    {
        code: `source nombre_del_entorno/bin/activate`,
        language: "typescript",
        title: "Activar entorno virtual",
    },
    {
        code: `deactivate`,
        language: "typescript",
        title: "Desactivar entorno virtual",
    },
];

const sectionsCol2 = [
    {
        code: `python -m venv nombre_del_entorno`,
        language: "typescript",
        title: "Crear entorno virtual",
    },
    {
        code: `nombre_del_entorno\\Scripts\\activate`,
        language: "typescript",
        title: "Activar entorno virtual",
    },
    {
        code: `deactivate`,
        language: "typescript",
        title: "Desactivar entorno virtual",
    },
];

const sectionsCol3 = [
    {
        code:  `pip list`,
        language: "typescript",
        title: "Listar paquetes instalados",
    },
    {
        code:  `pip freeze > requirements.txt`,
        language: "typescript",
        title: "Guardar paquetes instalados en archivo requirements.txt",
    },
    {
        code:  `pip install -r requirements.txt`,
        language: "typescript",
        title: "Instalar paquetes de un archivo requirements.txt",
    },
    {
        code:  `sudo apt install python3-venv`,
        language: "typescript",
        title: "Instalar python3-venv en linux",
    },
];

export {
    sectionsCol1, 
    sectionsCol2,
    sectionsCol3  
};