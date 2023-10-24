/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8fuod1zfz74lava",
    "created": "2023-10-24 23:21:05.067Z",
    "updated": "2023-10-24 23:21:05.067Z",
    "name": "lunettes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hscnajdl",
        "name": "libelle",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "y8s3uxxq",
        "name": "prix",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8fuod1zfz74lava");

  return dao.deleteCollection(collection);
})
