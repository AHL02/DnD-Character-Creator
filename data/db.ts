import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("dnd.db");

db.execSync(`
    CREATE TABLE IF NOT EXISTS character (
    id INTEGER PRIMARY KEY,
    name TEXT,
    race Text,
    dndClass Text,
    level INTEGER
  );
`);

export function addCharacter(id: number, name: string, race: string, dndClass: string, level: number) {
    if(id == 0){

        db.execSync(
            `INSERT INTO character (name, race, dndClass, level) VALUES ("${name}", "${race}", "${dndClass}", ${level});`
        );
    }
    else{

        db.execSync(
            `UPDATE character SET name = "${name}", race = "${race}", dndClass = "${dndClass}", level = ${level} WHERE id = ${id};`
        );
    }
}
export async function getCharacters(): Promise<Character[]>{

    const allRows = await db.getAllAsync("SELECT * FROM character");
    for (const row of allRows) {

    }
    return allRows as Character[]
}

export interface Character{
    id: number,
    name: string,
    race: string, //temp
    dndClass: string,
    level: number
}

export interface DndClass {
    name: string,
    lv: number,
    subclass: string,
    choices: string,
    url: string,
    img: string,
};
/*
export const CharacterData : Character[] =  [
    {
        id: 1,
        name: "Gunnar",
        race: "Goblin",
        stats: "null",
        background: "null",
        dndClass: [
            {
                name: "Barbarian",
                lv: 5,
                subclass: "null",
                choices: "null",
                url: "",
                img: "",
            },
        ],
    },
     {
        id: 2,
        name: "Seraphine",
        race: "Tiefling",
        stats: "null",
        background: "null",
        dndClass: [
            {
                name: "Warlock",
                lv: 4,
                subclass: "null",
                choices: "null",
                url: "",
                img: ""
            }
        ]
    },
    {
        id: 3,
        name: "Thalric",
        race: "Dwarf",
        stats: "null",
        background: "null",
        dndClass: [
            {
                name: "Cleric",
                lv: 6,
                subclass: "null",
                choices: "null",
                url: "",
                img: ""
            }
        ]
    },
    {
        id: 4,
        name: "Lyra",
        race: "Half-Elf",
        stats: "null",
        background: "null",
        dndClass: [
            {
                name: "Rogue",
                lv: 3,
                subclass: "null",
                choices: "null",
                url: "",
                img: ""
            }
        ]
    }
]
*/    
