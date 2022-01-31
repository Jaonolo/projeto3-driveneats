const json = JSON.parse(`
{
    "whatsappNumber": 5517997652657,
    "content" : [
        {
            "name": "Prato",
            "dataIdentifier": "dishes",
            "title": "Primeiro, seu prato",
            "values": [
                {
                    "name": "Excaliburguer",
                    "description": "El grand burgon",
                    "price": 23.40
                },
                {
                    "name": "Japacama",
                    "description": "El grand burgon",
                    "price": 23.40
                },
                {
                    "name": "Obra de arte",
                    "description": "El grand burgon",
                    "price": 23.40
                }
            ]
        },
        {
            "name": "Bebida",
            "dataIdentifier": "drinks",
            "title": "Depois, a bebida",
            "values": [
                {
                    "name": "Excaliburguer",
                    "description": "El grand burgon",
                    "price": 23.40
                },
                {
                    "name": "Japacama",
                    "description": "El grand burgon",
                    "price": 23.40
                },
                {
                    "name": "Obra de arte",
                    "description": "El grand burgon",
                    "price": 23.40
                }
            ]
        },
        {
            "name": "Sobremesa",
            "dataIdentifier": "desserts",
            "title": "Por ultimo, a sobremesa",
            "values": [
                {
                    "name": "Excaliburguer",
                    "description": "El grand burgon, lu ma gran dos mas gran de todos",
                    "price": 23.40
                },
                {
                    "name": "Japacama",
                    "description": "El grand burgon",
                    "price": 23.40
                },
                {
                    "name": "Obra de arte",
                    "description": "El grand burgon",
                    "price": 23.40
                }
            ]
        }
    ]
}`
)

const contentSource = json.content
const whatsappNumber = json.whatsappNumber

let selectedButtons = Array(contentSource.length).fill(null)