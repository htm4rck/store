import { NavigationLink } from '../app/shared/interfaces/navigation-link';

export const departments: NavigationLink[] = [
    //##### TABLERO#01 ####################################################################################
    {
        label: 'Construcción y Ferreteria', url: '/shop/catalog', menu: {
            type: "megamenu",
            size: 'xl',
            image: 'assets/images/megamenu/images.jpg',
            columns: [
                {
                    size: 4, items: [
                        {
                            label: 'Materiales de Construcción', url: '/shop/catalog', items: [
                                { label: 'Ferreteria', url: '/shop/catalog' },
                                { label: 'Techos', url: '/shop/catalog' },
                                { label: 'Escaleras', url: '/shop/catalog' },
                                { label: 'Cemento y Complementos', url: '/shop/catalog' },
                                { label: 'Ladrillos y Bloques', url: '/shop/catalog' },
                            ]
                        },
                        {
                            label: 'Fijaciones y Adhesivos', url: '/shop/catalog', items: [
                                { label: 'Adhesivos', url: '/shop/catalog' },
                                { label: 'Accesorios para Colgar', url: '/shop/catalog' },
                                { label: 'Cintas Aislantes', url: '/shop/catalog' },
                                { label: 'Tornillos, Clavos y Tarugos', url: '/shop/catalog' },
                            ]
                        }

                    ]
                },
                {
                    size: 4, items: [
                        {
                            label: 'Electricidad', url: '/shop/catalog', items: [
                                { label: 'Cables y Alambres', url: '/shop/catalog' },
                                { label: 'Linternas', url: '/shop/catalog' },
                                { label: 'Interruptor y Tomacorriente', url: '/shop/catalog' },
                                { label: 'Canaletas', url: '/shop/catalog' },
                                { label: 'Tubos Eléctricos', url: '/shop/catalog' },
                            ]
                        },
                        {
                            label: 'Pinturas', url: '/shop/catalog', items: [
                                { label: 'Pinturas de Exterior', url: '/shop/catalog' },
                                { label: 'Pinturas de Interior', url: '/shop/catalog' },
                                { label: 'Pinturas de Madera', url: '/shop/catalog' },
                                { label: 'Siliconas y Selladores', url: '/shop/catalog' },
                            ]
                        }
                    ]
                },
                {
                    size: 4, items: [
                        {
                            label: 'Gasfiteria', url: '/shop/catalog', items: [
                                { label: 'Tanques de Agua', url: '/shop/catalog' },
                                { label: 'Cisternas', url: '/shop/catalog' },
                                { label: 'Bombas y Motobombas', url: '/shop/catalog' },
                                { label: 'Tubos de PVC', url: '/shop/catalog' },
                                { label: 'Valvulas y Laves de Paso', url: '/shop/catalog' },
                                { label: 'Termas y Calentadores', url: '/shop/catalog' },
                            ]
                        }
                    ]
                }
            ]
        }
    },
    //##### TABLERO#02 ####################################################################################
    {
        label: 'Herramientas y Maquinas', url: '/shop/catalog', menu: {
            type: "megamenu",
            size: 'xl',
            image: 'assets/images/megamenu/images.jpg',
            columns: [
                {
                    size: 4, items: [
                        {
                            label: 'Herramientas Electricas', url: '/shop/catalog', items: [
                                { label: 'Taladros', url: '/shop/catalog' },
                                { label: 'Atornilladores', url: '/shop/catalog' },
                                { label: 'Sierras', url: '/shop/catalog' },
                                { label: 'Lijadoras', url: '/shop/catalog' },
                                { label: 'Cepillos Eléctricos', url: '/shop/catalog' },
                            ]
                        },
                        {
                            label: 'Herramientas para Construcción', url: '/shop/catalog', items: [
                                { label: 'Rotomartillos y Demoledores', url: '/shop/catalog' },
                                { label: 'Grupo Electrógeno y Generador', url: '/shop/catalog' },
                                { label: 'Carretillas y Ruedas', url: '/shop/catalog' },
                                { label: 'Puntos, Cinceles y Combas', url: '/shop/catalog' },
                                //{ label: 'Palas y Llanas', url: '/shop/catalog' },
                            ]
                        }

                    ]
                },
                {
                    size: 4, items: [
                        {
                            label: 'Cajas de Herramientas y Organizadores', url: '/shop/catalog', items: [
                                { label: 'Cajas y Maletas de Herramientas', url: '/shop/catalog' },
                                { label: 'Organizadores de Herramentas', url: '/shop/catalog' },
                                { label: 'Porta Herramientas', url: '/shop/catalog' },
                                { label: 'Bancos de Trabajo', url: '/shop/catalog' },
                                { label: 'Estanterias', url: '/shop/catalog' },
                            ]
                        },
                        {
                            label: 'Herramientas de Medición', url: '/shop/catalog', items: [
                                { label: 'Cintas Métricas, Reglas y Escuadras', url: '/shop/catalog' },
                                { label: 'Plomadas, Niveles y Trazadores', url: '/shop/catalog' },
                            ]
                        }
                    ]
                },
                {
                    size: 4, items: [
                        {
                            label: 'Herramientas Manuales', url: '/shop/catalog', items: [
                                { label: 'Serruchos, Cepillos y Formones', url: '/shop/catalog' },
                                { label: 'Martillos y Mazos', url: '/shop/catalog' },
                                { label: 'Dados y Llaves', url: '/shop/catalog' },
                                { label: 'Cintas Metricas, Reglas y Escuadras', url: '/shop/catalog' },
                                { label: 'Desarmadores', url: '/shop/catalog' },
                                { label: 'Alicates, Prensas y Torquineros', url: '/shop/catalog' },
                            ]
                        }
                    ]
                }
            ]
        }
    },
    //##### TABLERO#03 ####################################################################################
    {
        label: 'Pisos y Detalles', url: '/shop/catalog', menu: {
            type: "megamenu",
            size: 'xl',
            image: 'assets/images/megamenu/images.jpg',
            columns: [
                {
                    size: 4, items: [
                        {
                            label: 'Pisos y Revestimientos', url: '/shop/catalog', items: [
                                { label: 'Cerámicos', url: '/shop/catalog' },
                                { label: 'Porcelanatos', url: '/shop/catalog' },
                                { label: 'Pisos de Madera', url: '/shop/catalog' },
                                { label: 'Pisos Vinilicos', url: '/shop/catalog' },
                                { label: 'Zócalos', url: '/shop/catalog' },
                                { label: 'Listelos y Decorados', url: '/shop/catalog' },
                                //{ label: 'Pisos de Piedra y Enchape', url: '/shop/catalog' },
                            ]
                        },
                        {
                            label: 'Elementos de Seguridad', url: '/shop/catalog', items: [
                                { label: 'Cadenas, Cuerdas y Accesorios', url: '/shop/catalog' },
                                { label: 'Cajas Fuertes', url: '/shop/catalog' },
                                { label: 'Elementos de Proteccion Personal', url: '/shop/catalog' },
                            ]
                        }
                    ]
                },
                {
                    size: 4, items: [
                        {
                            label: 'Pegamentos, Fraguas y Adhesivos', url: '/shop/catalog', items: [
                                { label: 'Pegamento en Polvo', url: '/shop/catalog' },
                                { label: 'Pegamento Asfáltico', url: '/shop/catalog' },
                                { label: 'Fraguas', url: '/shop/catalog' },
                                { label: 'Fraguador', url: '/shop/catalog' },
                                //{ label: 'Adhesivos', url: '/shop/catalog' },
                            ]
                        },
                        {
                            label: 'Limpieza', url: '/shop/catalog', items: [
                                { label: 'Ambientadores, Aerosoles y Antihumedad', url: '/shop/catalog' },
                                { label: 'Limpieza Industrial', url: '/shop/catalog' },
                                { label: 'Basureros, Contenedores y Bolsas', url: '/shop/catalog' },
                            ]
                        }
                    ]
                },
                {
                    size: 4, items: [
                        {
                            label: 'Puertas, Ventanas y Cerraduras', url: '/shop/catalog', items: [
                                { label: 'Puertas de Interior', url: '/shop/catalog' },
                                { label: 'Puertas de Exteiror', url: '/shop/catalog' },
                                { label: 'Puertas Plegables', url: '/shop/catalog' },
                                { label: 'Marcos de Puerta', url: '/shop/catalog' },
                                { label: 'Chapas para Puertas y Cerraduras', url: '/shop/catalog' },
                            ]
                        }
                    ]
                }
            ]
        }
    },
    //##### TABLERO#04 ####################################################################################

    { label: 'Dormitorio', url: '/shop/catalog' },
    { label: 'Terrazas', url: '/shop/catalog' },
    { label: 'Aire Libre', url: '/shop/catalog' },
    { label: 'Electro Hogar', url: '/shop/catalog' },
    { label: 'Baño', url: '/shop/catalog' },
    { label: 'Iluminación', url: '/shop/catalog' },
    { label: 'Infantil', url: '/shop/catalog' },
];
