/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fjajds4wor5yikn",
    "created": "2023-10-24 23:22:29.010Z",
    "updated": "2023-10-24 23:22:29.010Z",
    "name": "materiau",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "klf3uwhp",
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
  const collection = dao.findCollectionByNameOrId("fjajds4wor5yikn");

  return dao.deleteCollection(collection);
})
