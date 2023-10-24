/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "t4hbvki7mc9evs6",
    "created": "2023-10-24 23:21:58.939Z",
    "updated": "2023-10-24 23:21:58.939Z",
    "name": "couleur",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8guz12ag",
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
  const collection = dao.findCollectionByNameOrId("t4hbvki7mc9evs6");

  return dao.deleteCollection(collection);
})
