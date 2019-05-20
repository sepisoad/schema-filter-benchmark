
const schemaArray = {
    "type": "array",
    "items": {
        "$ref": "#/definitions/MediumSchema"
    },
    "definitions": {
        "MediumSchema": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "name": {
                    "$ref": "#/definitions/Name"
                },
                "age": {
                    "type": "integer"
                },
                "city": {
                    "type": "string"
                },
                "state": {
                    "type": "string"
                },
                "dollar": {
                    "type": "string"
                },
                "date": {
                    "type": "string"
                }
            },
            "required": [
                "age",
                "city",
                "date",
                "dollar",
                "name",
                "state"
            ],
            "title": "MediumSchema"
        },
        "Name": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "first": {
                    "type": "string"
                },
                "last": {
                    "type": "string"
                }
            },
            "required": [
                "first",
                "last"
            ],
            "title": "Name"
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
                "name": {
                    "$ref": "#/definitions/Name"
                },
                "age": {
                    "type": "integer"
                },
                "city": {
                    "type": "string"
                },
                "state": {
                    "type": "string"
                },
                "dollar": {
                    "type": "string"
                },
                "date": {
                    "type": "string"
                }
            },
            "required": [
                "age",
                "city",
                "date",
                "dollar",
                "name",
                "state"
            ],
            "title": "UsersLight"
        },
        "Name": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "first": {
                    "type": "string"
                },
                "last": {
                    "type": "string"
                }
            },
            "required": [
                "first",
                "last"
            ],
            "title": "Name"
        }
    }
}

module.exports = {
  array: schemaArray,
  row: schemaRow
}