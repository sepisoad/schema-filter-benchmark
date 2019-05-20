const schemaArray = {
    "type": "array",
    "items": {
        "$ref": "#/definitions/LightSchema"
    },
    "definitions": {
        "LightSchema": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "age": {
                    "type": "integer"
                },
                "city": {
                    "type": "string"
                }
            },
            "required": [
                "age",
                "city"
            ],
            "title": "LightSchema"
        }
    }
}

const schemaRow = {
    "$ref": "#/definitions/UsersLight",
    "definitions": {
        "UsersLight": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "age": {
                    "type": "integer"
                },
                "city": {
                    "type": "string"
                }
            },
            "required": [
                "age",
                "city"
            ],
            "title": "UsersLight"
        }
    }
}

module.exports = {
  array: schemaArray,
  row: schemaRow
}