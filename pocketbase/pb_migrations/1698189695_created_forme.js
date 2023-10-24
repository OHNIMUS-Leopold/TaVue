/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "c60kt4ona9uhila",
    "created": "2023-10-24 23:21:35.290Z",
    "updated": "2023-10-24 23:21:35.290Z",
    "name": "forme",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "oy2nu8rh",
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
  const collection = dao.findCollectionByNameOrId("c60kt4ona9uhila");

  return dao.deleteCollection(collection);
})
