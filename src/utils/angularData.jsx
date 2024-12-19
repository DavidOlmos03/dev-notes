const sectionsCol1 = [
    {
        code: `ng new path/to/new_project`,
        language: "typescript",
        title: "Crear un nuevo proyecto",
    },
    {
        code: `ng g s path/to/new_service --skip-tests`,
        language: "typescript",
        title: "Crear un servicio",
    },
    {
        code: `ng generate module path/to/new_module`,
        language: "typescript",
        title: "Crear un módulo",
    },
];


const sectionsCol2 = [
    {
        code: `ng g m path/to/new_module --routing`,
        language: "typescript",
        title: "Crear un módulo con rutas",
    },
    {
        code: `ng generate component path/to/new_component`,
        language: "typescript",
        title: "Crear un componente",
    },
    {
        code: `ng g c path/to/new_component --skip-tests`,
        language: "typescript",
        title: "Crear un componente sin espect",
    },
];

const sectionsCol3 = [
    {
        code:  `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`,
        language: "typescript",
        title: "Cambiar la política de ejecución",
    },
    {
        code:  `ng build --output-path docs --base-href=https://example.github.io/project_name/`,
        language: "typescript",
        title: "Github Pages",
    },
    {
        code:  `npm run build`,
        language: "typescript",
        title: "Netlify",
    }

];


export {
    sectionsCol1, 
    sectionsCol2, 
    sectionsCol3
    
};