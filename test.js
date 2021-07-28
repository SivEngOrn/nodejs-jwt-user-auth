var obj = {
    "_original": {
        "name": "",
        "email": "",
        "password": ""
    },
    "details": [
        {
            "message": "\"name\" is not allowed to be empty",
            "path": [
                "name"
            ],
            "type": "string.empty",
            "context": {
                "label": "name",
                "value": "",
                "key": "name"
            }
        },
        {
            "message": "\"email\" is not allowed to be empty",
            "path": [
                "email"
            ],
            "type": "string.empty",
            "context": {
                "label": "email",
                "value": "",
                "key": "email"
            }
        },
        {
            "message": "\"password\" is not allowed to be empty",
            "path": [
                "password"
            ],
            "type": "string.empty",
            "context": {
                "label": "password",
                "value": "",
                "key": "password"
            }
        }
    ]
}
error.details.forEach((mes) => {
    console.log(mes.message)
})
