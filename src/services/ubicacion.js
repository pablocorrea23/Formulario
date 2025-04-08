export default function getData() {
    const countries = [
        // eslint-disable-next-line
        {
            name: "Argentina",
            provinces: [
                {
                    name: "Buenos Aires",
                    cities: ["La Plata", "CABA", "Mar del Plata"]
                },
                {
                    name: "Córdoba",
                    cities: ["Córdoba", "Villa Allende", "Río Cuarto"]
                },
                {
                    name: "Mendoza",
                    cities: ["Mendoza", "San Rafael", "La Bosque"]
                }
            ],
        },
        {
            name: "Brasil",
            provinces: [
                {
                    name: "São Paulo",
                    cities: ["São Paulo", "Campinas", "Santos"]
                },
                {
                    name: "Rio de Janeiro",
                    cities: ["Rio de Janeiro", "Niterói", "São Gonçalo"]
                },
                {
                    name: "Minas Gerais",
                    cities: ["Belo Horizonte", "Uberlândia", "Contagem"]
                }
            ],
        },
        {
            name: "Uruguay",
            provinces: [
                {
                    name: "Montevideo",
                    cities: ["Montevideo", "Punta del Este", "Colonia"]
                },
                {
                    name: "Canelones",
                    cities: ["Canelones", "Santa Lucía", "Paso de los Toros"]
                },
                {
                    name: "Maldonado",
                    cities: ["Maldonado", "Punta del Este", "Río Branco"]
                }
            ],
        },
        {
            name: "Chile",
            provinces: [
                {
                    name: "Santiago",
                    cities: ["Santiago", "Puente Alto", "Las Condes"]
                },
                {
                    name: "Valparaíso",
                    cities: ["Valparaíso", "Viña del Mar", "Quilpué"]
                },
                {
                    name: "Concepción",
                    cities: ["Concepción", "Coronel", "Talcahuano"]
                }
            ],
        
        },
        {
            name: "Mexico",
            provinces: [
                {
                    name: "Ciudad de Mexico",
                    cities: ["Ciudad de Mexico", "Tijuana", "Ecatepec"]
                },
                {
                    name: "Jalisco",
                    cities: ["Guadalajara", "Zapopan", "Tlaquepaque"]
                },
                {
                    name: "Nuevo Leon",
                    cities: ["Monterrey", "Apodaca", "San Nicolas"]
                }
            ],
        },
        {
            name: "Ecuador",
            provinces: [
                {
                    name: "Quito",
                    cities: ["Quito", "Cayambe", "Ibarra"]
                },
                {
                    name: "Pichincha",
                    cities: ["Quito", "Cayambe", "Ibarra"]
                },
                {
                    name: "Guayas",
                    cities: ["Quito", "Cayambe", "Ibarra"]
                }
            ],
        },
        {
            name: "Peru",
            provinces: [
                {
                    name: "Lima",
                    cities: ["Lima", "Arequipa", "Cusco"]
                },
                {
                    name: "Arequipa",
                    cities: ["Lima", "Arequipa", "Cusco"]
                },
                {
                    name: "Cusco",
                    cities: ["Lima", "Arequipa", "Cusco"]
                }
            ],
        },
        {
            name: "Colombia",
            provinces: [
                {
                    name: "Bogota",
                    cities: ["Bogota", "Medellin", "Barranquilla"]
                },
                {
                    name: "Cali",
                    cities: ["Bogota", "Medellin", "Barranquilla"]
                },
                {
                    name: "Medellin",
                    cities: ["Bogota", "Medellin", "Barranquilla"]
                }
            ],
        }
    ]

    return countries
}