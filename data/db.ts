export interface Character{
    id: number,
    name: string,
    race: string, //temp
    stats: string, //temp
    background: string, //temp
    dndClass: DndClass[],
}

export interface DndClass {
    name: string,
    lv: number,
    subclass: string,
    choices: string,
    url: string,
    img: string,
};

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
    
