/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "syldi3204c2kbcb",
    "created": "2023-10-26 14:36:28.180Z",
    "updated": "2023-10-26 14:36:28.180Z",
    "name": "all_lunettes",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ica9f0ov",
        "name": "id_lunettes",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "8fuod1zfz74lava",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "pfxqxugf",
        "name": "temps",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "efnak8io",
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
        "id": "c9gd61ks",
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
      },
      {
        "system": false,
        "id": "mcbgsoz6",
        "name": "forme_des_lunettes",
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
        "id": "jgcjgzom",
        "name": "couleur_du_cadre",
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
        "id": "rpsqjuw2",
        "name": "couleur_des_verres",
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
        "id": "dhpbi9tr",
        "name": "materiau_du_cadre",
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
        "id": "yagorb3m",
        "name": "couleur_des_branches",
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
        "id": "gsima9tf",
        "name": "materiau_des_branches",
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
        "id": "tjece1dr",
        "name": "materiau_des_verres",
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
        "id": "hlywyxee",
        "name": "utilisateur",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": "@request.auth.id != \"\"",
    "viewRule": "@request.auth.id != \"\"",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, \n       lunettes.id AS id_lunettes,\n       lunettes.updated as temps,\n       lunettes.libelle, \n       lunettes.prix, \n       forme.libelle AS forme_des_lunettes,\n       couleur_cadre.libelle AS couleur_du_cadre,\n       couleur_verres.libelle AS couleur_des_verres,\n       materiau_cadre.libelle AS materiau_du_cadre,\n       couleur_branches.libelle AS couleur_des_branches,\n       materiau_branches.libelle AS materiau_des_branches,\n       materiau_verres.libelle AS materiau_des_verres,\n       lunettes.users AS utilisateur\nFROM lunettes\nJOIN forme ON lunettes.forme = forme.id\nJOIN couleur couleur_cadre ON lunettes.couleur_cadre = couleur_cadre.id\nJOIN couleur couleur_verres ON lunettes.couleur_verres = couleur_verres.id\nJOIN materiau materiau_cadre ON lunettes.materiau_cadre = materiau_cadre.id\nJOIN materiau materiau_verres ON lunettes.materiau_verres = materiau_verres.id\nJOIN couleur couleur_branches ON lunettes.couleur_branches = couleur_branches.id\nJOIN materiau materiau_branches ON lunettes.materiau_branches = materiau_branches.id\nJOIN users ON lunettes.users = users.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("syldi3204c2kbcb");

  return dao.deleteCollection(collection);
})
