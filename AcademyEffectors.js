/*
Effects to AP:
Mod: Rule of Beyonders = pow(1.01, level)
Mod: Rule of Destruction = pow(3, level)
    BUGGED: = 3 * level
Mod: Combat Modifications = pow(1.1, level)
Mod: Zeus Crew Motivation = pow(0.005 * level + 1, Zeus Crew)
    Zeus: Crew = level
Zeus: Install 2 = 0.1 * level * Zeus Crew + 1
Zeus: Install 7 = 0.01 * level * Zeus Crew + 1
Shard Milestone: (18) Studying = pow(1.35, max(0, level - 70) * (level > 74))
Shard Milestone: (21) Targeting = pow(1.02, level)
Shard Milestone: (23) Layering = pow(1.07, max(0, level - 45) * (level > 49))
Shard Milestone: (26) Wonderous = pow(1.063, max(0, level - 25) * (level > 29))
    BUGGED: = pow(1.063, max(0, level - 8) * (level > 9))
Shard Milestone: (26) Wonderous = pow(1.15, max(0, level - 115) * (level > 119))
    NERFED: = [actual power unknown]
Research: Mission Analysis 1 = (level > 2 ? 1.3 : 1) * (level > 4 ? 1.3 : 1)
Research: Perfection Analysis 1 = level > 3 ? 10 : 1
Research: Mission Analysis 2 = (level > 2 ? 1.5 : 1) * (level > 4 ? 1.5 : 1)
Research: Perfection Analysis 2 = level > 3 ? 10 : 1
Research: Mission Analysis 3 = (level > 2 ? 2 : 1) * (level > 4 ? 3 : 1)
Research: Perfection Analysis 3 = level > 3 ? 50 : 1
Research: Mission Analysis 5 = (level > 2 ? 3 : 1) * (level > 4 ? 4 : 1)
    SPECULATIVE
Research: Perfection Analysis 4 = level > 3 ? 99 : 1
    SPECULATIVE
Construction Milestones: (take from menu)
Gear Set: Orange = 1.5
Gear Set: Red = 1.5
Gear Set: Green = 1.5
Gear Set: Blue = 1.5
Project: Warp-Drive = pow(1.25, level)
Exchange: Exodus = Data Cubes * 0.005 * Exodus Enhancement * All Exchanges Enhancement * pow(1.1, floor(Data Cubes / 100))
    Mod: Exodus Enhancement = pow(1.25, level)
    Mod: All Exchanges Enhancement = pow(1.5, level)

Effects to Materials:
Mod: Rule of Beyonders = pow(1.01, level)
Mod: Rule of Swarm = pow(1.25, level)
    BUGGED: = 1.25 * level + (level === 0)
Mod: Rule of Expansion = pow(1.01, level)
Mod: Material Hauling = pow(1.05, level)
Mod: Zeus Rank Benefits = pow(1.01, Zeus Rank)
    Zeus: Rank = level
Zeus: Install 3 = 0.25 * level * Zeus Crew + 1
    Zeus: Crew = level
Zeus: Install 6 = 0.1 * level * Zeus Crew + 1
Shard Milestone: (26) Wonderous = pow(1.043, max(0, level - 55) * (level > 59))
    BUGGED: = pow(1.043, max(0, level - 20) * (level > 24))
Research: Mission Analysis 1 = pow(1.5, floor(level / 2))
Research: Mission Analysis 2 = pow(1.75, floor(level / 2))
Research: Perfection Analysis 2 = 4 * (level > 1) + 1
Research: Mission Analysis 4 = (level > 1 ? 2 : 1) * (level > 3 ? 3 : 1) * (level > 5 ? 4 : 1)
Research: Perfection Analysis 3 = 4 * (level > 1) + 1
Research: Mission Analysis 5 = (level > 1 ? 3 : 1) * (level > 3 ? 4 : 1) * (level > 5 ? 5 : 1)
    SPECTULATIVE
Research: Perfection Analysis 4 = 8 * (level > 1) + 1
    SPECULATIVE

Effects to Mission Speed:
Mod: Rule of Swarm = pow(1.03, level)
    BUGGED: = 0.03 * level + 1
Research: Mission Analysis 3 = pow(1.05, floor((level + 1) / 2))
    BUGGED: = pow(1.05, floor((level + 1) / 2)) / (0.05 * (level === 6) + 1)
Research: Perfection Analysis 3 = (level > 4) + 1
Research: Perfection Analysis 4 = (level > 4) + 1
Academy: Engineering Badge = 2 * level

Unique Effectors:

MODS
1  Player: Level = level
2  Mod: Rule of Beyonders = [AP = pow(1.01, level), Materials = pow(1.01, level)]
3  Mod: Rule of Destruction = [AP = pow(3, level) || BUGGED = 3 * level]
4  Mod: Rule of Swarm = [Materials = pow(1.25, level) || BUGGED = 1.25 * level + (level === 0), Mission Speed = pow(1.03, level) || BUGGED = 0.03 * level + 1]
5  Mod: Rule of Expansion = [Materials = pow(1.01, level)]
6  Mod: Combat Modifications = [AP = pow(1.1, level)]
7  Mod: Material Hauling = [Materials = pow(1.05, level)]
8  Mod: Zeus Rank Benefits = [Materials = pow(1.01, Zeus Rank)]
9  Mod: Zeus Crew Motivation = [AP = pow(0.005 * level + 1, Zeus Crew)]
10 Mod: Exodus Enhancement = pow(1.25, level)
11 Mod: All Exchanges Enhancement = pow(1.5, level)
12 Mod: Accumulative Helion = [AP = pow(0.002 * level + 1, Player Level)]

ZEUS AND ACADEMY
1  Zeus: Crew = level
2  Zeus: Rank = level
3  Zeus: Install 2 = [AP = 0.1 * level * Zeus Crew + 1]
4  Zeus: Install 3 = [Materials = 0.25 * level * Zeus Crew + 1]
5  Zeus: Install 6 = [Materials = 0.1 * level * Zeus Crew + 1]
6  Zeus: Install 7 = [AP = 0.01 * level * Zeus Crew + 1]
7  Exchange: Exodus = [AP = Data Cubes * 0.005 * Exodus Enhancement * All Exchanges Enhancement * pow(1.1, floor(Data Cubes / 100))]
8  Project: Warp-Drive = [AP = pow(1.25, level)]
9  Gear Set: Orange = [AP = 0.5 * (Orange Gear === 4) + 1]
10 Gear Set: Red = [AP = 0.5 * (Red Gear === 5) + 1]
11 Gear Set: Green = [AP = 0.5 * (Green Gear === 5) + 1]
12 Gear Set: Blue = [AP = 0.5 * (Blue Gear === 5) + 1]
13 Construction Milestones: AP = Menu Value
14 Academy: Engineering Badge = [Mission Speed = Badge + 1]

SHARD MILESTONES AND RESEARCH
1  Shard Milestone: (18) Studying = [AP = pow(1.35, max(0, level - 70) * (level > 74))]
2  Shard Milestone: (21) Targeting = [AP = pow(1.02, level)]
3  Shard Milestone: (23) Layering = [AP = pow(1.07, max(0, level - 45) * (level > 49))]
4  Shard Milestone: (26) Wonderous =
    [
        AP = pow(1.063, max(0, level - 25) * (level > 29)) * pow(1.15, max(0, level - 115) * (level > 119)) || BUGGED = pow(1.063, max(0, level - 8) * (level > 9)) * [unknown],
        Materials = pow(1.043, max(0, level - 55) * (level > 59)) || BUGGED = pow(1.043, max(0, level - 20) * (level > 24))
    ]
5  Research: Mission Analysis 1 = [AP = (level > 2 ? 1.3 : 1) * (level > 4 ? 1.3 : 1), Materials = pow(1.5, floor(level / 2))]
6  Research: Perfection Analysis 1 = [AP = level > 3 ? 10 : 1]
7  Research: Mission Analysis 2 = [AP = (level > 2 ? 1.5 : 1) * (level > 4 ? 1.5 : 1), Materials = pow(1.75, floor(level / 2))]
8  Research: Perfection Analysis 2 = [AP = level > 3 ? 10 : 1, Materials = 4 * (level > 1) + 1]
9  Research: Mission Analysis 3 = [Mission Speed = pow(1.05, floor((level + 1) / 2)) || BUGGED = pow(1.05, floor((level + 1) / 2)) / (0.05 * (level === 6) + 1)]
10 Research: Mission Analysis 4 = [AP = (level > 2 ? 2 : 1) * (level > 4 ? 3 : 1), Materials = (level > 1 ? 2 : 1) * (level > 3 ? 3 : 1) * (level > 5 ? 4 : 1)]
11 Research: Perfection Analysis 3 = [AP = level > 3 ? 50 : 1, Materials = 4 * (level > 1) + 1, Mission Speed = (level > 4) + 1]
12 Research: Mission Analysis 5 = [AP = (level > 2 ? 3 : 1) * (level > 4 ? 4 : 1), Materials = (level > 1 ? 3 : 1) * (level > 3 ? 4 : 1) * (level > 5 ? 5 : 1)]
    SPECULATIVE
13 Research: Perfection Analysis 4 = [AP = level > 3 ? 99 : 1, Materials = 8 * (level > 1) + 1, Mission Speed = (level > 4) + 1]
    SPECULATIVE

*/

let academyEffectorPortal =
{
    verticalCells: 44,
    horizontalCells: 87,
    pageText: 1.8,
    headerText: 1.8,
    labelText: 0.9,
    displayText: 1.4,
    buttonText: 1.7,
    inputText: 1,
    // activePage: 'mods',
    activePage: 'default',
    pages: {
        // list: ['mods', 'zeus', 'sr'],
        list: ['default'],
        // mods: {
        default: {
            id: 'mods',
            text: 'Loop Mods',
            color: '#ff0054',
            pagerSize: { width: 15, height: 2 },
            pagerLeft: 1,
            headers: [
                // {
                //     text: 'Fleet Section',
                //     left: 1, top: 11,
                //     height: 3, width: 20
                // },
                // {
                //     text: 'Academy Section',
                //     left: 1, top: 22,
                //     height: 3, width: 23
                // },
                // {
                //     text: 'Accumulative Section',
                //     left: 31, top: 11,
                //     height: 3, width: 30
                // },
                // {
                //     text: 'Ultimas',
                //     left: 31, top: 19,
                //     height: 3, width: 9
                // }
            ],
            labels: [
                // {
                //     text: 'Player Level',
                //     left: 1, top: 7,
                //     height: 2, width: 9
                // },
                // {
                //     text: 'Loops Filled',
                //     left: 18, top: 7,
                //     height: 2, width: 9
                // },
                // {
                //     text: 'Zeus Rank Benefits',
                //     left: 2, top: 15,
                //     height: 2, width: 13
                // },
                // {
                //     text: '/ 10',
                //     left: 19, top: 15,
                //     height: 2, width: 3
                // },
                // {
                //     text: 'Zeus Crew Motivation',
                //     left: 2, top: 18,
                //     height: 2, width: 14
                // },
                // {
                //     text: '/ 10',
                //     left: 20, top: 18,
                //     height: 2, width: 3
                // },
                // {
                //     text: 'Combat Modifications',
                //     left: 2, top: 26,
                //     height: 2, width: 15
                // },
                // {
                //     text: '/ 200',
                //     left: 22, top: 26,
                //     height: 2, width: 4
                // },
                // {
                //     text: 'Material Hauling',
                //     left: 2, top: 29,
                //     height: 2, width: 12
                // },
                // {
                //     text: '/ 999',
                //     left: 19, top: 29,
                //     height: 2, width: 4
                // },
                // {
                //     text: 'Exodus Enhancement',
                //     left: 2, top: 32,
                //     height: 2, width: 15
                // },
                // {
                //     text: '/ 50',
                //     left: 20, top: 32,
                //     height: 2, width: 4
                // },
                // {
                //     text: 'All Exchanges Enhancement',
                //     left: 2, top: 35,
                //     height: 2, width: 19
                // },
                // {
                //     text: '/ 50',
                //     left: 24, top: 35,
                //     height: 2, width: 4
                // },
                // {
                //     text: 'Helion',
                //     left: 32, top: 15,
                //     height: 2, width: 5
                // },
                // {
                //     text: '/ 10',
                //     left: 41, top: 15,
                //     height: 2, width: 3
                // },
                // {
                //     text: 'Rule of the Beyonders',
                //     left: 32, top: 23,
                //     height: 2, width: 16
                // },
                // {
                //     text: 'Rule of Destruction',
                //     left: 32, top: 26,
                //     height: 2, width: 14
                // },
                // {
                //     text: '/ 10',
                //     left: 50, top: 26,
                //     height: 2, width: 3
                // },
                // {
                //     text: 'Rule of the Swarm',
                //     left: 32, top: 29,
                //     height: 2, width: 14
                // },
                // {
                //     text: '/ 30',
                //     left: 49, top: 29,
                //     height: 2, width: 4
                // },
                // {
                //     text: 'Rule of Expansion',
                //     left: 32, top: 32,
                //     height: 2, width: 13
                // },
                // {
                //     text: 'Rule of Productivity',
                //     left: 32, top: 35,
                //     height: 2, width: 15
                // },
                // {
                //     text: '/ 10',
                //     left: 50, top: 35,
                //     height: 2, width: 4
                // },
                // {
                //     text: 'Rule of Looping',
                //     left: 32, top: 38,
                //     height: 2, width: 12
                // },
                // {
                //     text: '/ 10',
                //     left: 47, top: 38,
                //     height: 2, width: 4
                // }
            ],
            inputs: [
                // {
                //     id: 'playerlevel',
                //     type: 'number',
                //     left: 11, top: 6.25,
                //     height: 2, width: 5
                // },
                // {
                //     id: 'loopsfilled',
                //     type: 'number',
                //     left: 28, top: 6.25,
                //     height: 2, width: 5
                // },
                // {
                //     id: 'zeusrankbenefits',
                //     type: 'number',
                //     left: 16, top: 14.25,
                //     height: 2, width: 3
                // },
                // {
                //     id: 'zeuscrewmotivation',
                //     type: 'number',
                //     left: 17, top: 17.25,
                //     height: 2, width: 3
                // },
                // {
                //     id: 'combatmod',
                //     type: 'number',
                //     left: 18, top: 25.25,
                //     height: 2, width: 4
                // },
                // {
                //     id: 'mathauling',
                //     type: 'number',
                //     left: 15, top: 28.25,
                //     height: 2, width: 4
                // },
                // {
                //     id: 'exodus',
                //     type: 'number',
                //     left: 18, top: 31.25,
                //     height: 2, width: 3
                // },
                // {
                //     id: 'allexchange',
                //     type: 'number',
                //     left: 22, top: 34.25,
                //     height: 2, width: 3
                // },
                // {
                //     id: 'helion',
                //     type: 'number',
                //     left: 38, top: 14.25,
                //     height: 2, width: 3
                // },
                // {
                //     id: 'beyonders',
                //     type: 'number',
                //     left: 49, top: 22.25,
                //     height: 2, width: 6
                // },
                // {
                //     id: 'destruction',
                //     type: 'number',
                //     left: 47, top: 25.25,
                //     height: 2, width: 3
                // },
                // {
                //     id: 'swarm',
                //     type: 'number',
                //     left: 47, top: 28.25,
                //     height: 2, width: 3
                // },
                // {
                //     id: 'expansion',
                //     type: 'number',
                //     left: 46, top: 31.25,
                //     height: 2, width: 6
                // },
                // {
                //     id: 'productivity',
                //     type: 'number',
                //     left: 48, top: 34.25,
                //     height: 2, width: 3
                // },
                // {
                //     id: 'looping',
                //     type: 'number',
                //     left: 45, top: 37.25,
                //     height: 2, width: 3
                // }
            ],
            checkboxes: [
            ],
            displays: [],
            buttons: [],
            toggles: [

            ]
        },
        zeus: {
            id: 'zeus',
            text: 'Zeus and Academy',
            color: '#556bca',
            pagerSize: { width: 26, height: 2 },
            pagerLeft: 17,
            headers: [
                {
                    text: 'Zeus',
                    left: 1, top: 7,
                    height: 3, width: 6
                },
                {
                    text: 'Installs',
                    left: 12, top: 7,
                    height: 3, width: 9
                },
                {
                    text: 'Academy',
                    left: 1, top: 25,
                    height: 3, width: 10
                },
                // {
                //     text: 'Gear',
                //     left: 32, top: 25,
                //     height: 3, width: 6
                // }
            ],
            labels: [
                {
                    text: 'Crew',
                    left: 2, top: 11,
                    height: 2, width: 4
                },
                {
                    text: 'Rank',
                    left: 2, top: 14,
                    height: 2, width: 4
                },
                {
                    text: 'To Next',
                    left: 2, top: 17,
                    height: 2, width: 6
                },
                {
                    text: '/',
                    left: 15, top: 17,
                    height: 2, width: 1
                },
                // {
                //     text: 'Evo',
                //     left: 2, top: 20,
                //     height: 2, width: 4
                // },
                // {
                //     text: '(2) Perfect Student Blueprint',
                //     left: 13, top: 11,
                //     height: 2, width: 19
                // },
                {
                    text: '(3) Material Scavenger Vehicles',
                    left: 13, top: 14,
                    height: 2, width: 21
                },
                {
                    text: '(6) Academy Auto-Scrappers',
                    left: 39, top: 11,
                    height: 2, width: 19
                },
                // {
                //     text: '(7) On-Site Auto Construction',
                //     left: 39, top: 14,
                //     height: 2, width: 19
                // },
                // {
                //     text: 'Exodus Exchange: Data Cubes',
                //     left: 2, top: 29,
                //     height: 2, width: 20
                // },
                // {
                //     text: 'Project: Warp-Drive Lab',
                //     left: 2, top: 32,
                //     height: 2, width: 16
                // },
                // {
                //     text: 'Construction Milestones: AP Bonus',
                //     left: 1, top: 35,
                //     height: 2, width: 24
                // },
                {
                    text: 'Badge: Engineering',
                    left: 2, top: 38,
                    height: 2, width: 13
                },
                // {
                //     text: 'Campaigns Complete',
                //     left: 1, top: 41,
                //     height: 2, width: 15
                // },
                // {
                //     text: 'Orange',
                //     left: 33, top: 29,
                //     height: 2, width: 6
                // },
                // {
                //     text: 'Red',
                //     left: 33, top: 32,
                //     height: 2, width: 4
                // },
                // {
                //     text: 'Green',
                //     left: 33, top: 35,
                //     height: 2, width: 5
                // },
                // {
                //     text: 'Blue',
                //     left: 33, top: 38,
                //     height: 2, width: 4
                // }
            ],
            inputs: [
                {
                    id: 'crew',
                    type: 'number',
                    left: 7, top: 10.25,
                    height: 2, width: 4
                },
                {
                    id: 'rank',
                    type: 'number',
                    left: 7, top: 13.25,
                    height: 2, width: 4
                },
                {
                    id: 'progress',
                    type: 'number',
                    left: 9, top: 16.25,
                    height: 2, width: 5
                },
                // {
                //     id: 'evo',
                //     type: 'number',
                //     left: 7, top: 19.25,
                //     height: 2, width: 3
                // },
                // {
                //     id: 'install2',
                //     type: 'number',
                //     left: 33, top: 10.25,
                //     height: 2, width: 2
                // },
                {
                    id: 'install3',
                    type: 'number',
                    left: 35, top: 13.25,
                    height: 2, width: 2
                },
                {
                    id: 'install6',
                    type: 'number',
                    left: 59, top: 10.25,
                    height: 2, width: 3
                },
                // {
                //     id: 'install7',
                //     type: 'number',
                //     left: 59, top: 13.25,
                //     height: 2, width: 3
                // },
                // {
                //     id: 'datacubes',
                //     type: 'text',
                //     left: 23, top: 28.25,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'warpdrive',
                //     type: 'number',
                //     left: 19, top: 31.25,
                //     height: 2, width: 4
                // },
                // {
                //     id: 'cm',
                //     type: 'number',
                //     left: 26, top: 34.25,
                //     height: 2, width: 5
                // },
                // {
                //     id: 'orange',
                //     type: 'number',
                //     left: 40, top: 28.25,
                //     height: 2, width: 2
                // },
                // {
                //     id: 'red',
                //     type: 'number',
                //     left: 38, top: 31.25,
                //     height: 2, width: 2
                // },
                // {
                //     id: 'green',
                //     type: 'number',
                //     left: 39, top: 34.25,
                //     height: 2, width: 2
                // },
                // {
                //     id: 'blue',
                //     type: 'number',
                //     left: 38, top: 37.25,
                //     height: 2, width: 2
                // },
                // {
                //     id: 'campaigns',
                //     type: 'number',
                //     left: 17, top: 40.25,
                //     height: 2, width: 3
                // }
            ],
            checkboxes: [
                {
                    id: 'engineering',
                    left: 16, top: 37.25,
                    width: 2, height: 2
                }
            ],
            displays: [
                {
                    id: 'rankrequirement',
                    left: 17, top: 16.75,
                    width: 7, height: 2
                }
            ],
            buttons: [

            ],
            toggles: [

            ]
        },
        sr: {
            id: 'sr',
            text: 'Shards, Research, Diamonds',
            color: '#ffffff',
            pagerSize: { width: 42, height: 2 },
            pagerLeft: 44,
            headers: [
                {
                    text: 'Shard Milestones',
                    left: 1, top: 7,
                    height: 3, width: 24
                },
                {
                    text: 'Researches',
                    left: 1, top: 19,
                    height: 3, width: 16
                },
                {
                    text: 'Diamonds',
                    left: 40, top: 7,
                    height: 3, width: 12
                }
            ],
            labels: [
                // {
                //     text: '(18) Studying',
                //     left: 2, top: 11,
                //     height: 2, width: 9
                // },
                // {
                //     text: '(21) Targeting',
                //     left: 2, top: 14,
                //     height: 2, width: 9
                // },
                {
                    text: '(26) Wonderous',
                    left: 18, top: 11,
                    height: 2, width: 11
                },
                {
                    text: '(29) Earthly',
                    left: 18, top: 14,
                    height: 2, width: 11
                },
                {
                    text: 'Mission Analysis',
                    left: 2, top: 23,
                    height: 2, width: 11
                },
                {
                    text: '(1)',
                    left: 2, top: 26,
                    height: 2, width: 3
                },
                {
                    text: '(2)',
                    left: 9, top: 26,
                    height: 2, width: 3
                },
                {
                    text: '(3)',
                    left: 16, top: 26,
                    height: 2, width: 3
                },
                {
                    text: '(4)',
                    left: 23, top: 26,
                    height: 2, width: 3
                },
                {
                    text: '(5)',
                    left: 30, top: 26,
                    height: 2, width: 3
                },
                {
                    text: 'Perfection Analysis',
                    left: 2, top: 29,
                    height: 2, width: 14
                },
                {
                    text: '(1)',
                    left: 2, top: 32,
                    height: 2, width: 3
                },
                {
                    text: '(2)',
                    left: 9, top: 32,
                    height: 2, width: 3
                },
                {
                    text: '(3)',
                    left: 16, top: 32,
                    height: 2, width: 3
                },
                {
                    text: '(4)',
                    left: 23, top: 32,
                    height: 2, width: 3
                },
                {
                    text: 'Construction Analysis',
                    left: 2, top: 35,
                    height: 2, width: 16
                },
                {
                    text: '(1)',
                    left: 2, top: 38,
                    height: 2, width: 3
                },
                {
                    text: '(2)',
                    left: 9, top: 38,
                    height: 2, width: 3
                },
                // {
                //     text: 'Special: AP',
                //     left: 41, top: 11,
                //     height: 2, width: 9
                // },
                {
                    text: 'Special: Mats',
                    left: 41, top: 14,
                    height: 2, width: 9
                },
                // {
                //     text: 'Nora Card',
                //     left: 41, top: 17,
                //     height: 2, width: 9
                // },
                // {
                //     text: 'Omega Card',
                //     left: 41, top: 20,
                //     height: 2, width: 9
                // },
                // {
                //     text: 'Rigel Card',
                //     left: 41, top: 23,
                //     height: 2, width: 9
                // },
                // {
                //     text: 'Utopia Card',
                //     left: 41, top: 26,
                //     height: 2, width: 9
                // },
                // {
                //     text: 'Zion Card',
                //     left: 41, top: 29,
                //     height: 2, width: 9
                // }
            ],
            inputs: [
                // {
                //     id: 'studying',
                //     type: 'number',
                //     left: 12, top: 10.25,
                //     height: 2, width: 4
                // },
                // {
                //     id: 'targeting',
                //     type: 'number',
                //     left: 12, top: 13.25,
                //     height: 2, width: 4
                // },
                {
                    id: 'wonderous',
                    type: 'number',
                    left: 30, top: 10.25,
                    height: 2, width: 4
                },
                {
                    id: 'earthly',
                    type: 'number',
                    left: 30, top: 13.25,
                    height: 2, width: 4
                },
                {
                    id: 'mission1',
                    type: 'number',
                    left: 6, top: 25.25,
                    height: 2, width: 2
                },
                {
                    id: 'mission2',
                    type: 'number',
                    left: 13, top: 25.25,
                    height: 2, width: 2
                },
                {
                    id: 'mission3',
                    type: 'number',
                    left: 20, top: 25.25,
                    height: 2, width: 2
                },
                {
                    id: 'mission4',
                    type: 'number',
                    left: 27, top: 25.25,
                    height: 2, width: 2
                },
                {
                    id: 'mission5',
                    type: 'number',
                    left: 34, top: 25.25,
                    height: 2, width: 2
                },
                {
                    id: 'perfection1',
                    type: 'number',
                    left: 6, top: 31.25,
                    height: 2, width: 2
                },
                {
                    id: 'perfection2',
                    type: 'number',
                    left: 13, top: 31.25,
                    height: 2, width: 2
                },
                {
                    id: 'perfection3',
                    type: 'number',
                    left: 20, top: 31.25,
                    height: 2, width: 2
                },
                {
                    id: 'perfection4',
                    type: 'number',
                    left: 27, top: 31.25,
                    height: 2, width: 2
                },
                {
                    id: 'construction1',
                    type: 'number',
                    left: 6, top: 37.25,
                    height: 2, width: 2
                },
                {
                    id: 'construction2',
                    type: 'number',
                    left: 13, top: 37.25,
                    height: 2, width: 2
                },
                // {
                //     id: 'specialap',
                //     type: 'number',
                //     left: 51, top: 10.25,
                //     height: 2, width: 3
                // },
                {
                    id: 'specialmats',
                    type: 'number',
                    left: 51, top: 13.25,
                    height: 2, width: 3
                },
            ],
            checkboxes: [
                // {
                //     id: 'nora',
                //     left: 51, top: 16.25,
                //     width: 2, height: 2
                // },
                // {
                //     id: 'omega',
                //     left: 51, top: 19.25,
                //     width: 2, height: 2
                // },
                // {
                //     id: 'rigel',
                //     left: 51, top: 22.25,
                //     width: 2, height: 2
                // },
                // {
                //     id: 'utopia',
                //     left: 51, top: 25.25,
                //     width: 2, height: 2
                // },
                // {
                //     id: 'zion',
                //     left: 51, top: 28.25,
                //     width: 2, height: 2
                // }
            ],
            displays: [

            ],
            buttons: [

            ],
            toggles: [

            ]
        }
    }
}

const sections = [
    {
        name: 'General',
        children: [
            { id: 'playerlevel', type: 'number', label: 'Player Level' },
            { id: 'loopsfilled', type: 'number', label: 'Loops Filled', style: { width: 80 } },
            { id: 'engineering', type: 'select', label: 'Engi Badge', options: [{ value: 0, label: 'No' }, { value: 1, label: 'Yes' }] },
        ]
    },
    {
        name: 'Mod',
        children: [
            { id: 'zeusrankbenefits', type: 'number', label: 'Zeus Rank Benefits', max: 10, text: '/ 10' },
            { id: 'mathauling', type: 'number', label: 'Material Hauling', text: '/ 999' },
            { id: 'beyonders', type: 'number', label: 'Rule of the Beyonders', style: { width: 80 } },
            { id: 'swarm', type: 'number', label: 'Rule of the Swarm', max: 30, text: '/ 30' },
            { id: 'expansion', type: 'number', label: 'Rule of Expansion', style: { width: 80 } },
            { id: 'productivity', type: 'number', label: 'Rule of Productivity', max: 10, text: '/ 10' },
            { id: 'looping', type: 'number', label: 'Rule of Looping', max: 10, text: '/ 10' },
        ],
    },
    {
        name: 'Zeus',
        children: [
            { id: 'rank', type: 'number', label: 'Rank' },
            { id: 'crew', type: 'number', label: 'Crew' },
            { id: 'progress', type: 'number', label: 'To Next', text: ' ', textId: 'rankrequirement', style: { width: 100 } },
            { id: 'install3', type: 'number', label: '(3) Material Scavenger Vehicles', max: 5 },
            { id: 'install6', type: 'number', label: '(6) Academy Auto-Scrappers', max: 75 },
        ],
    },
    {
        name: 'Shard Milestone',
        children: [
            { id: 'wonderous', type: 'number', label: '(26) Wonderous' },
            { id: 'earthly', type: 'number', label: '(29) Earthly' },
        ],
    },
    {
        name: 'Diamond Shop',
        children: [
            { id: 'specialmats', type: 'number', label: 'Special: Mats', max: 25, text: '/ 25' },
        ],
    },
    {
        name: 'Research',
        children: [
            {
                id: 'mission1',
                type: 'select',
                label: 'Mission Analysis 1',
                maxLevel: 6,
                text: 'mission material:  lv2 x1.5, lv4 x1.5, lv6 x1.5',
            },
            {
                id: 'mission2',
                type: 'select',
                label: 'Mission Analysis 2',
                maxLevel: 6,
                text: 'mission material:  lv2 x1.75, lv4 x1.75, lv6 x1.75',
            },
            {
                id: 'mission3',
                type: 'select',
                label: 'Mission Analysis 3',
                maxLevel: 6,
                text: 'mission speed: lv1 x1.05, lv3: x1.05, lv5: x1.05',
            },
            {
                id: 'mission4',
                type: 'select',
                label: 'Mission Analysis 4',
                maxLevel: 6,
                text: 'mission material:  lv2 x2, lv4 x3, lv6 x4',
            },
            {
                id: 'mission5',
                type: 'select',
                label: 'Mission Analysis 5',
                maxLevel: 6,
                text: 'mission material:  lv2 x3, lv4 x4, lv6 x5',
            },
            {
                id: 'perfection2',
                type: 'select',
                label: 'Perfection Analysis 2',
                maxLevel: 6,
                text: 'mission material:  lv2 x5',
            },
            {
                id: 'perfection3',
                type: 'select',
                label: 'Perfection Analysis 3',
                maxLevel: 6,
                text: 'lv2: mission material x5; lv5: mission speed *2',
            },
            {
                id: 'construction1',
                type: 'select',
                label: 'Construction Analysis 1',
                maxLevel: 6,
                text: 'proj cost: lv2 /1.5, lv4 /2, lv6 /2.5',
            },
            {
                id: 'construction2',
                type: 'select',
                label: 'Construction Analysis 2',
                maxLevel: 6,
                text: 'proj cost: lv2 /2, lv3 /3, lv4 /3, lv5 /4, lv5 /4',
            },
        ],
    },
]

academyEffectorPortal.pages.default.dataLinkage =
{
    set playerlevel(value) { playerData.level = value; },
    set loopsfilled(value) { playerData.loopsFilled = value; },
    set zeusrankbenefits(value) { playerData.loopMods.zeusRankBenefits = value; },
    set zeuscrewmotivation(value) { playerData.loopMods.zeusCrewMotivation = value; },
    set combatmod(value) { playerData.loopMods.combatMod = value; },
    set mathauling(value) { playerData.loopMods.materialHauling = value; },
    set exodus(value) { playerData.loopMods.exodus = value; },
    set allexchange(value) { playerData.loopMods.allExchange = value; },
    set helion(value) { playerData.loopMods.accumHelion = value; },
    set beyonders(value) { playerData.loopMods.beyonders = value; },
    set destruction(value) { playerData.loopMods.destruction = value; },
    set swarm(value) { playerData.loopMods.swarm = value; },
    set expansion(value) { playerData.loopMods.expansion = value; },
    set productivity(value) { playerData.loopMods.productivity = value; },
    set looping(value) { playerData.loopMods.looping = value; },

    get playerlevel() { return playerData.level; },
    get loopsfilled() { return playerData.loopsFilled; },
    get zeusrankbenefits() { return playerData.loopMods.zeusRankBenefits; },
    get zeuscrewmotivation() { return playerData.loopMods.zeusCrewMotivation; },
    get combatmod() { return playerData.loopMods.combatMod; },
    get mathauling() { return playerData.loopMods.materialHauling; },
    get exodus() { return playerData.loopMods.exodus; },
    get allexchange() { return playerData.loopMods.allExchange; },
    get helion() { return playerData.loopMods.accumHelion; },
    get beyonders() { return playerData.loopMods.beyonders; },
    get destruction() { return playerData.loopMods.destruction; },
    get swarm() { return playerData.loopMods.swarm; },
    get expansion() { return playerData.loopMods.expansion; },
    get productivity() { return playerData.loopMods.productivity; },
    get looping() { return playerData.loopMods.looping; },

    set crew(value) { playerData.fleet.zeus.crew = value; },
    set rank(value) { playerData.fleet.zeus.rank.current = value; },
    set evo(value) { playerData.fleet.zeus.evo = value; },
    set progress(value) { playerData.fleet.zeus.rank.progress = value; },
    set install2(value) { playerData.fleet.zeus.installs[1] = value; },
    set install3(value) { playerData.fleet.zeus.installs[2] = value; },
    set install6(value) { playerData.fleet.zeus.installs[5] = value; },
    set install7(value) { playerData.fleet.zeus.installs[6] = value; },
    set datacubes(value) { playerData.academy.exchanges.dataCubes = value; },
    set warpdrive(value) { playerData.academy.projectLevels[5] = value; },
    set cm(value) { playerData.academy.cmAP = value; },
    set orange(value) { playerData.academy.gearSets[1] = value; },
    set red(value) { playerData.academy.gearSets[2] = value; },
    set green(value) { playerData.academy.gearSets[3] = value; },
    set blue(value) { playerData.academy.gearSets[4] = value; },
    set engineering(value) { playerData.academy.badges.engineering = value; },
    set campaigns(value) { playerData.academy.campaignsComplete = value; },

    get crew() { return playerData.fleet.zeus.crew; },
    get rank() { return playerData.fleet.zeus.rank.current; },
    get evo() { return playerData.fleet.zeus.evo; },
    get progress() { return playerData.fleet.zeus.rank.progress; },
    get install2() { return playerData.fleet.zeus.installs[1]; },
    get install3() { return playerData.fleet.zeus.installs[2]; },
    get install6() { return playerData.fleet.zeus.installs[5]; },
    get install7() { return playerData.fleet.zeus.installs[6]; },
    get datacubes() { return playerData.academy.exchanges.dataCubes; },
    get warpdrive() { return playerData.academy.projectLevels[5]; },
    get cm() { return playerData.academy.cmAP; },
    get orange() { return playerData.academy.gearSets[1]; },
    get red() { return playerData.academy.gearSets[2]; },
    get green() { return playerData.academy.gearSets[3]; },
    get blue() { return playerData.academy.gearSets[4]; },
    get engineering() { return playerData.academy.badges.engineering; },
    get campaigns() { return playerData.academy.campaignsComplete; },

    set studying(value) { playerData.shardMilestones[17] = value; },
    set targeting(value) { playerData.shardMilestones[20] = value; },
    set layering(value) { playerData.shardMilestones[22] = value; },
    set wonderous(value) { playerData.shardMilestones[25] = value; },
    set earthly(value) { playerData.shardMilestones[29] = value; },
    set mission1(value) { playerData.research.mission[0] = value; },
    set mission2(value) { playerData.research.mission[1] = value; },
    set mission3(value) { playerData.research.mission[2] = value; },
    set mission4(value) { playerData.research.mission[3] = value; },
    set mission5(value) { playerData.research.mission[4] = value; },
    set perfection1(value) { playerData.research.perfection[0] = value; },
    set perfection2(value) { playerData.research.perfection[1]= value; },
    set perfection3(value) { playerData.research.perfection[2] = value; },
    set perfection4(value) { playerData.research.perfection[3] = value; },
    set construction1(value) { playerData.research.construction[0] = value; },
    set construction2(value) { playerData.research.construction[1]= value; },
    set specialap(value) { playerData.diamonds.special.ap = value; },
    set specialmats(value) { playerData.diamonds.special.materials = value; },
    set nora(value) { playerData.diamonds.cards.nora = value; },
    set omega(value) { playerData.diamonds.cards.omega = value; },
    set rigel(value) { playerData.diamonds.cards.rigel = value; },
    set utopia(value) { playerData.diamonds.cards.utopia = value; },
    set zion(value) { playerData.diamonds.cards.zion = value; },

    get studying() { return playerData.shardMilestones[17]; },
    get targeting() { return playerData.shardMilestones[20]; },
    get layering() { return playerData.shardMilestones[22]; },
    get wonderous() { return playerData.shardMilestones[25]; },
    get earthly() { return playerData.shardMilestones[29]; },
    get mission1() { return playerData.research.mission[0]; },
    get mission2() { return playerData.research.mission[1]; },
    get mission3() { return playerData.research.mission[2]; },
    get mission4() { return playerData.research.mission[3]; },
    get mission5() { return playerData.research.mission[4]; },
    get perfection1() { return playerData.research.perfection[0]; },
    get perfection2() { return playerData.research.perfection[1]; },
    get perfection3() { return playerData.research.perfection[2]; },
    get perfection4() { return playerData.research.perfection[3]; },
    get construction1() { return playerData.research.construction[0]; },
    get construction2() { return playerData.research.construction[1]; },
    get specialap() { return playerData.diamonds.special.ap; },
    get specialmats() { return playerData.diamonds.special.materials; },
    get nora() { return playerData.diamonds.cards.nora; },
    get omega() { return playerData.diamonds.cards.omega; },
    get rigel() { return playerData.diamonds.cards.rigel; },
    get utopia() { return playerData.diamonds.cards.utopia; },
    get zion() { return playerData.diamonds.cards.zion; }
};

// academyEffectorPortal.pages.mods.updateFunction = function(e) {
//     portalPanel.dataLinkage[e.target.id] = parseInt(e.target.value);
//     SavePlayerData();
// };

// academyEffectorPortal.pages.zeus.initFunction = function() {
//     portalPanel['rankrequirement'].innerText = GameDB.fleet.zeus.rankRequirements[portalPanel.dataLinkage.rank];
// };

// academyEffectorPortal.pages.zeus.updateFunction = function(e) {
//     if (e.target.type === 'checkbox')
//     {
//         portalPanel.dataLinkage[e.target.id] = e.target.checked;
//         SavePlayerData();
//         return;
//     }

//     if (e.target.id === 'cm')
//     {
//         portalPanel.dataLinkage[e.target.id] = parseFloat(e.target.value);
//         SavePlayerData();

//         return;
//     }

//     if (e.target.type === 'number')
//     {
//         portalPanel.dataLinkage[e.target.id] = parseInt(e.target.value);
//         SavePlayerData();

//         if (e.target.id === 'rank') { portalPanel['rankrequirement'].innerText = GameDB.fleet.zeus.rankRequirements[portalPanel.dataLinkage[e.target.id]]; }

//         return;
//     }

//     let value = parseBigNum(e.target.value);
//     if (isNaN(value)) {e.target.value = 0}
//     else {portalPanel.dataLinkage[e.target.id] = value}
//     SavePlayerData();
// };

// // academyEffectorPortal.pages.sr

// academyEffectorPortal.pages.sr.updateFunction = function(e) {
//     if (e.target.type === 'checkbox')
//     {
//         portalPanel.dataLinkage[e.target.id] = e.target.checked;
//         SavePlayerData();
//         return;
//     }

//     portalPanel.dataLinkage[e.target.id] = parseInt(e.target.value);
//     SavePlayerData();
// };

academyEffectorPortal.pages.default.initFunction = function(panel) {
    const wrapper = createElement('div', 'section-2', { style : 'gap: 40px' })

    sections.forEach(({ name, children }) => {
        const section = createElement()
        const header = createElement('h3', '', null, name)
        section.appendChild(header)

        children.map(({ id, label, type, text, style = {}, ...props }) => {
            if (type === 'number' || type === 'select') {
                const group = createElement('div', 'row align-items-center g-3 mb-2')
                group.innerHTML = `<div class="col-auto"><label class="col-form-label col-form-label-sm">${label}</label></div>`
                const inputWrapper = createElement('div', 'col-auto')
                group.appendChild(inputWrapper)

                if (type === 'number') {
                    const input = createElement('input', 'form-control form-control-sm text-center', {
                        id: id,
                        type: 'number',
                        min: 0,
                        style: `width: ${style.width || 50}px;`,
                        value: portalPanel.dataLinkage[id],
                    })
                    if (props.max) input.max = props.max
                    input.addEventListener('change', portalPanel.updateFunction);
                    inputWrapper.appendChild(input)
                }

                if (type === 'select') {
                    const select = createElement('select', 'form-select form-select-sm', {
                        id: id,
                    })
                    if (props.maxLevel) {
                        select.innerHTML = '<option value="0">-</option>'
                            + Array(props.maxLevel).fill(null).map((_, i) => `<option value="${i+1}">Lv ${i+1}</option>`).join('')
                    } else {
                        select.innerHTML = props.options.map((p) => `<option value="${p.value}">${p.label}</option>`).join('')
                    }
                    select.value = portalPanel.dataLinkage[id] * 1
                    select.addEventListener('change', portalPanel.updateFunction)
                    inputWrapper.appendChild(select)
                }

                if (text) {
                    const textCol = createElement('div', 'col-auto')
                    const textEl = createElement('span', 'form-text', '', text)
                    if (props.textId) {
                        textEl.id = props.textId
                        portalPanel[props.textId] = textEl
                    }
                    textCol.appendChild(textEl)
                    group.appendChild(textCol)
                }

                return group
            }

            return null
        }).filter(Boolean).forEach((el) => section.appendChild(el))

        wrapper.appendChild(section)
    })

    panel.appendChild(wrapper)

    portalPanel['rankrequirement'].innerText = '/ ' + GameDB.fleet.zeus.rankRequirements[portalPanel.dataLinkage.rank];
};

academyEffectorPortal.pages.default.updateFunction = function(e) {
    if (/^select$/i.test(e.target.tagName))
    {
        portalPanel.dataLinkage[e.target.id] = parseInt(e.target.value, 10);
        SavePlayerData();
        return;
    }

    if (e.target.type === 'checkbox')
    {
        portalPanel.dataLinkage[e.target.id] = e.target.checked;
        SavePlayerData();
        return;
    }

    if (e.target.id === 'cm')
    {
        portalPanel.dataLinkage[e.target.id] = parseFloat(e.target.value);
        SavePlayerData();

        return;
    }

    if (e.target.type === 'number')
    {
        portalPanel.dataLinkage[e.target.id] = parseInt(e.target.value);
        SavePlayerData();

        if (e.target.id === 'rank') { portalPanel['rankrequirement'].innerText = '/ ' + GameDB.fleet.zeus.rankRequirements[portalPanel.dataLinkage[e.target.id]]; }

        return;
    }

    let value = parseBigNum(e.target.value);
    if (isNaN(value)) {e.target.value = 0}
    else {portalPanel.dataLinkage[e.target.id] = value}
    SavePlayerData();
};
