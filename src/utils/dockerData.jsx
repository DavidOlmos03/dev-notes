const sectionsCol1 = [
    {
        code: `docker network create name_network`,
        language: "typescript",
        title: "Crear Network",
    },
    {
        code: `docker compose -f .dockerdocker-compose.dev.yml up --build`,
        language: "typescript",
        title: "Subir compose",
    },
    {
        code: `docker compose -f .dockerdocker-compose.dev.yml down`,
        language: "typescript",
        title: "Bajar compose",
    },
];


const sectionsCol2 = [
    {
        code: `docker run –rm -v nameVolume:/mnt alpine sh “du -sh /mnt"`,
        language: "typescript",
        title: "Ver el tamaño de un volumen",
    },
    {
        code: `docker network inspect world-app`,
        language: "typescript",
        title: "Conectar contenedor a una red",
    },
    {
        code: `docker network connect red_name container_id`,
        language: "typescript",
        title: "Inspeccionar network creada",
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