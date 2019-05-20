
const schemaArray = {
    "type": "array",
    "items": {
        "$ref": "#/definitions/FullSchema"
    },
    "definitions": {
        "FullSchema": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "seq": {
                    "type": "integer"
                },
                "name": {
                    "$ref": "#/definitions/Name"
                },
                "age": {
                    "type": "integer"
                },
                "street": {
                    "type": "string"
                },
                "city": {
                    "type": "string"
                },
                "state": {
                    "type": "string"
                },
                "zip": {
                    "type": "integer"
                },
                "dollar": {
                    "type": "string"
                },
                "pick": {
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
                "pick",
                "seq",
                "state",
                "street",
                "zip"
            ],
            "title": "FullSchema"
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
                "seq": {
                    "type": "integer"
                },
                "name": {
                    "$ref": "#/definitions/Name"
                },
                "age": {
                    "type": "integer"
                },
                "street": {
                    "type": "string"
                },
                "city": {
                    "type": "string"
                },
                "state": {
                    "type": "string"
                },
                "zip": {
                    "type": "integer"
                },
                "dollar": {
                    "type": "string"
                },
                "pick": {
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
                "pick",
                "seq",
                "state",
                "street",
                "zip"
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
