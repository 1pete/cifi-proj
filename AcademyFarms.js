let durationOptions = [
    ['1-h', '1 Hour'],
    ['2-h', '2 Hours'],
    ['4-h', '4 Hours'],
    ['6-h', '6 Hours'],
    ['12-h', '12 Hours'],
    ['18-h', '18 Hours'],
    ['1-d', '1 Day'],
    ['2-d', '2 Days'],
    ['3-d', '3 Days'],
    ['4-d', '4 Days'],
    ['5-d', '5 Days'],
    ['7-d', '7 Days'],
    ['10-d', '10 Days'],
]

let academyFarmPortal =
{
    verticalCells: 58,
    horizontalCells: 116,
    headerText: 1.8,
    labelText: 0.9,
    displayText: 1.4,
    buttonText: 1.7,
    inputText: 1,
    activePage: 'default',
    pages: {
        list: ['default'],
        default: {
            headers: [
                // {
                //     text: 'PERSONNEL',
                //     top: 1, left: 1,
                //     height: 3, width: 12
                // },
                // {
                //     text: 'FARMS',
                //     top: 1, left: 27,
                //     height: 3, width: 6
                // }
            ],
            labels: [
                // {
                //     text: 'power',
                //     left: 12, top: 5,
                //     height: 2, width: 5
                // },
                // {
                //     text: 'owned',
                //     left: 18, top: 5,
                //     height: 2, width: 6
                // },
                // {
                //     text: 'mining pods',
                //     left: 2, top: 8,
                //     height: 2, width: 8
                // },
                // {
                //     text: 'fireteams',
                //     left: 3, top: 11,
                //     height: 2, width: 7
                // },
                // {
                //     text: 'titans',
                //     left: 5, top: 14,
                //     height: 2, width: 5
                // },
                // {
                //     text: 'corvettes',
                //     left: 3, top: 17,
                //     height: 2, width: 7
                // },
                // {
                //     text: 'farm',
                //     left: 28, top: 5,
                //     height: 2, width: 4
                // },
                // {
                //     text: 'total',
                //     left: 33, top: 5,
                //     height: 2, width: 5
                // },
                // {
                //     text: 'pod',
                //     left: 42, top: 5,
                //     height: 2, width: 4
                // },
                // {
                //     text: 'fire',
                //     left: 47, top: 5,
                //     height: 2, width: 4
                // },
                // {
                //     text: 'titan',
                //     left: 52, top: 5,
                //     height: 2, width: 4
                // },
                // {
                //     text: 'corv',
                //     left: 57, top: 5,
                //     height: 2, width: 4
                // },
                // {
                //     text: 'run time',
                //     left: 62, top: 5,
                //     height: 2, width: 6
                // },
                // {
                //     text: '1-1',
                //     left: 28, top: 8,
                //     height: 2, width: 4
                // },
                // {
                //     text: '1-2',
                //     left: 28, top: 11,
                //     height: 2, width: 4
                // },
                // {
                //     text: '1-3',
                //     left: 28, top: 14,
                //     height: 2, width: 4
                // },
                // {
                //     text: '2-1',
                //     left: 28, top: 17,
                //     height: 2, width: 4
                // },
                // {
                //     text: '2-2',
                //     left: 28, top: 20,
                //     height: 2, width: 4
                // },
                // {
                //     text: '2-3',
                //     left: 28, top: 23,
                //     height: 2, width: 4
                // },
                // {
                //     text: '3-1',
                //     left: 28, top: 26,
                //     height: 2, width: 4
                // },
                // {
                //     text: '3-2',
                //     left: 28, top: 29,
                //     height: 2, width: 4
                // },
                // {
                //     text: '3-3',
                //     left: 28, top: 32,
                //     height: 2, width: 4
                // },
                // {
                //     text: 'average gains per',
                //     left: 72, top: 1,
                //     height: 2, width: 12
                // },
                // {
                //     text: 'averaged over',
                //     left: 72, top: 4,
                //     height: 2, width: 11
                // },
                // {
                //     text: 'stock',
                //     left: 82, top: 7,
                //     height: 2, width: 7
                // },
                // {
                //     text: 'gain rate',
                //     left: 91, top: 7,
                //     height: 2, width: 7
                // },
                // {
                //     text: 'yield',
                //     left: 98, top: 7,
                //     height: 2, width: 7
                // },
                // {
                //     text: 'missions',
                //     left: 76, top: 10,
                //     height: 2, width: 4
                // },
                // {
                //     text: 'AP',
                //     left: 75, top: 13,
                //     height: 2, width: 7
                // },
                // {
                //     text: 'difar',
                //     left: 78, top: 16,
                //     height: 2, width: 4
                // },
                // {
                //     text: 'kento',
                //     left: 77, top: 19,
                //     height: 2, width: 5
                // },
                // {
                //     text: 'chromium',
                //     left: 75, top: 22,
                //     height: 2, width: 7
                // },
                // {
                //     text: 'exon',
                //     left: 78, top: 25,
                //     height: 2, width: 4
                // },
                // {
                //     text: 'organium',
                //     left: 75, top: 28,
                //     height: 2, width: 7
                // },
                // {
                //     text: 'adamorphium',
                //     left: 72, top: 31,
                //     height: 2, width: 10
                // },
                // {
                //     text: 'moskom',
                //     left: 76, top: 34,
                //     height: 2, width: 6
                // },
                // {
                //     text: 'darkseid',
                //     left: 76, top: 37,
                //     height: 2, width: 6
                // }
            ],
            inputs: [
                // {
                //     id: 'podspower',
                //     type: 'number',
                //     left: 12, top: 7.25,
                //     width: 5, height: 2
                // },
                // {
                //     id: 'podsowned',
                //     type: 'number',
                //     left: 18, top: 7.25,
                //     width: 6, height: 2
                // },
                // {
                //     id: 'fireteamspower',
                //     type: 'number',
                //     left: 12, top: 10.25,
                //     width: 5, height: 2
                // },
                // {
                //     id: 'fireteamsowned',
                //     type: 'number',
                //     left: 18, top: 10.25,
                //     width: 6, height: 2
                // },
                // {
                //     id: 'titanspower',
                //     type: 'number',
                //     left: 12, top: 13.25,
                //     width: 5, height: 2
                // },
                // {
                //     id: 'titansowned',
                //     type: 'number',
                //     left: 18, top: 13.25,
                //     width: 6, height: 2
                // },
                // {
                //     id: 'corvettespower',
                //     type: 'number',
                //     left: 12, top: 16.25,
                //     width: 5, height: 2
                // },
                // {
                //     id: 'corvettesowned',
                //     type: 'number',
                //     left: 18, top: 16.25,
                //     width: 6, height: 2
                // },
                // {
                //     id: 'duration',
                //     type: 'number',
                //     left: 84, top: 3.25,
                //     width: 5, height: 2
                // },
                // {
                //     id: 'ap',
                //     type: 'text',
                //     left: 83, top: 12.25,
                //     width: 7, height: 2
                // },
                // {
                //     id: 'difar',
                //     type: 'text',
                //     left: 83, top: 15.25,
                //     width: 7, height: 2
                // },
                // {
                //     id: 'kento',
                //     type: 'text',
                //     left: 83, top: 18.25,
                //     width: 7, height: 2
                // },
                // {
                //     id: 'chromium',
                //     type: 'text',
                //     left: 83, top: 21.25,
                //     width: 7, height: 2
                // },
                // {
                //     id: 'exon',
                //     type: 'text',
                //     left: 83, top: 24.25,
                //     width: 7, height: 2
                // },
                // {
                //     id: 'organium',
                //     type: 'text',
                //     left: 83, top: 27.25,
                //     width: 7, height: 2
                // },
                // {
                //     id: 'adamorphium',
                //     type: 'text',
                //     left: 83, top: 30.25,
                //     width: 7, height: 2
                // },
                // {
                //     id: 'moskom',
                //     type: 'text',
                //     left: 83, top: 33.25,
                //     width: 7, height: 2
                // },
                // {
                //     id: 'darkseid',
                //     type: 'text',
                //     left: 83, top: 36.25,
                //     width: 7, height: 2
                // }
            ],
            checkboxes: [

            ],
            displays: [
                // {
                //     id: 'rankrequirement',
                //     left: 16, top: 6.75,
                //     width: 7, height: 2
                // },
                // {
                //     id: 'yieldtimeco',
                //     left: 90, top: 3.75,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'missionrate',
                //     left: 92, top: 9.75,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'aprate',
                //     left: 92, top: 12.75,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'difarrate',
                //     left: 92, top: 15.75,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'kentorate',
                //     left: 92, top: 18.75,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'chromiumrate',
                //     left: 92, top: 21.75,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'exonrate',
                //     left: 92, top: 24.75,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'organiumrate',
                //     left: 92, top: 27.75,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'adamorphiumrate',
                //     left: 92, top: 30.75,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'moskomrate',
                //     left: 92, top: 33.75,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'darkseidrate',
                //     left: 92, top: 36.75,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'missionyield',
                //     left: 101, top: 9.75,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'apyield',
                //     left: 101, top: 12.75,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'difaryield',
                //     left: 101, top: 15.75,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'kentoyield',
                //     left: 101, top: 18.75,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'chromiumyield',
                //     left: 101, top: 21.75,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'exonyield',
                //     left: 101, top: 24.75,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'organiumyield',
                //     left: 101, top: 27.75,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'adamorphiumyield',
                //     left: 101, top: 30.75,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'moskomyield',
                //     left: 101, top: 33.75,
                //     height: 2, width: 7
                // },
                // {
                //     id: 'darkseidyield',
                //     left: 101, top: 36.75,
                //     height: 2, width: 7
                // }
            ],
            buttons: [
                // {
                //     text: 'Maximize Mission Rate',
                //     left: 38, top: 35,
                //     width: 23, height: 3,
                //     function: maximizeMissionRate
                // },
                // {
                //     text: 'Clear Missions',
                //     left: 38, top: 42,
                //     width: 23, height: 2,
                //     function: clearMissions
                // }
            ],
            toggles: [
                // {
                //     id: 'yieldtime',
                //     settings: [
                //         {
                //             text: 'minute',
                //             color: '#FF8888'
                //         },
                //         {
                //             text: 'hour',
                //             color: '#88FF88'
                //         },
                //         {
                //             text: 'day',
                //             color: '#8888FF'
                //         }
                //     ],
                //     left: 85, top: 0.5,
                //     width: 8, height: 2
                // }
            ],
            lockboxes: []
        }
    }
};

// Add farm personnel inputs, and total personnel & run time displays
// for (let farmNum = 0; farmNum < GameDB.academy.farms.length; farmNum++)
// {
    // let planet = Math.floor(farmNum / 3);
    // let farm = farmNum - (planet * 3);
    // let personnel = GameDB.academy.personnel;

    // let initLeft = 43;
    // let stepLeft = 5;
    // let initTop = 7.25;
    // let stepTop = 3;

    // let farmPopObj =
    // {
    //     id: `farm${planet}${farm}total`,
    //     left: 35, top: initTop + (farmNum * stepTop) + 0.5,
    //     width: 5, height: 2
    // };
    // academyFarmPortal.pages.default.displays.push(farmPopObj);

    // let farmLockObj =
    // {
    //     id: `farm${planet}${farm}lock`,
    //     left: 40, top: initTop + (farmNum * stepTop),
    //     width: 2, height: 2
    // };
    // academyFarmPortal.pages.default.lockboxes.push(farmLockObj);

    // let farmTimeObj =
    // {
    //     id: `farm${planet}${farm}time`,
    //     left: 64, top: initTop + (farmNum * stepTop) + 0.5,
    //     width: 8, height: 2
    // };
    // academyFarmPortal.pages.default.displays.push(farmTimeObj);

    // for (let personnelNum = 0; personnelNum < personnel.length; personnelNum++)
    // {
    //     let nextObj =
    //     {
    //         id: `farm${planet}${farm}${personnel[personnelNum]}`,
    //         type: 'number',
    //         left: initLeft + (personnelNum * stepLeft),
    //         top: initTop + (farmNum * stepTop),
    //         width: 4, height: 2
    //     };
    //     academyFarmPortal.pages.default.inputs.push(nextObj);
    // }
// }

academyFarmPortal.pages.default.dataLinkage =
{
    set podspower(value) { playerData.academy.personnel[0].power = value; },
    set podsowned(value) { playerData.academy.personnel[0].population = value; },
    set fireteamspower(value) { playerData.academy.personnel[1].power = value; },
    set fireteamsowned(value) { playerData.academy.personnel[1].population = value; },
    set titanspower(value) { playerData.academy.personnel[2].power = value; },
    set titansowned(value) { playerData.academy.personnel[2].population = value; },
    set corvettespower(value) { playerData.academy.personnel[3].power = value; },
    set corvettesowned(value) { playerData.academy.personnel[3].population = value; },
    set duration(value) { playerData.academy.farmYieldSelected = value; },
    set ap(value) { playerData.academy.ap = value; },
    set difar(value) { playerData.academy.stock[0] = value; },
    set kento(value) { playerData.academy.stock[1] = value; },
    set chromium(value) { playerData.academy.stock[2] = value; },
    set exon(value) { playerData.academy.stock[3] = value; },
    set organium(value) { playerData.academy.stock[4] = value; },
    set adamorphium(value) { playerData.academy.stock[5] = value; },
    set moskom(value) { playerData.academy.stock[6] = value; },
    set darkseid(value) { playerData.academy.stock[7] = value; },

    get podspower() { return playerData.academy.personnel[0].power; },
    get podsowned() { return playerData.academy.personnel[0].population; },
    get fireteamspower() { return playerData.academy.personnel[1].power; },
    get fireteamsowned() { return playerData.academy.personnel[1].population; },
    get titanspower() { return playerData.academy.personnel[2].power; },
    get titansowned() { return playerData.academy.personnel[2].population; },
    get corvettespower() { return playerData.academy.personnel[3].power; },
    get corvettesowned() { return playerData.academy.personnel[3].population; },
    get duration() { return playerData.academy.farmYieldSelected || '1-h'; },
    get ap() { return playerData.academy.ap; },
    get difar() { return playerData.academy.stock[0]; },
    get kento() { return playerData.academy.stock[1]; },
    get chromium() { return playerData.academy.stock[2]; },
    get exon() { return playerData.academy.stock[3]; },
    get organium() { return playerData.academy.stock[4]; },
    get adamorphium() { return playerData.academy.stock[5]; },
    get moskom() { return playerData.academy.stock[6]; },
    get darkseid() { return playerData.academy.stock[7]; }
};

// Adding farm personnel linkages
for (let planet = 0; planet < GameDB.academy.planets; planet++)
{
    for (let farm = 0; farm < 3; farm++)
    {
        let propertyName = `farm${planet}${farm}pods`;
        Object.defineProperty(academyFarmPortal.pages.default.dataLinkage, propertyName, {
            set : function (value) {
                playerData.academy.farms[planet][farm].pods = value;
            },
            get : function () {
                return playerData.academy.farms[planet][farm].pods;
            }
        });

        propertyName = `farm${planet}${farm}fireteams`;
        Object.defineProperty(academyFarmPortal.pages.default.dataLinkage, propertyName, {
            set : function (value) {
                playerData.academy.farms[planet][farm].fireteams = value;
            },
            get : function () {
                return playerData.academy.farms[planet][farm].fireteams;
            }
        });

        propertyName = `farm${planet}${farm}titans`;
        Object.defineProperty(academyFarmPortal.pages.default.dataLinkage, propertyName, {
            set : function (value) {
                playerData.academy.farms[planet][farm].titans = value;
            },
            get : function () {
                return playerData.academy.farms[planet][farm].titans;
            }
        });

        propertyName = `farm${planet}${farm}corvettes`;
        Object.defineProperty(academyFarmPortal.pages.default.dataLinkage, propertyName, {
            set : function (value) {
                playerData.academy.farms[planet][farm].corvettes = value;
            },
            get : function () {
                return playerData.academy.farms[planet][farm].corvettes;
            }
        });

        propertyName = `farm${planet}${farm}lock`;
        Object.defineProperty(academyFarmPortal.pages.default.dataLinkage, propertyName, {
            set : function (value) {
                playerData.academy.farms[planet][farm].locked = value;
            },
            get : function () {
                return playerData.academy.farms[planet][farm].locked;
            }
        });
    }
}

const createElement = (tag = 'div', className = '', attr = {}, innerText = '') => {
    const ele = document.createElement(tag)
    Object.assign(ele, { className, ...attr })
    ele.innerText = innerText
    return ele
}

academyFarmPortal.pages.default.initFunction = function(panel)
{
    const flex = createElement('div', 'section-2')

    const createPersonel = () => {
        const section = createElement()
        const header = createElement('h3', null, null, 'Personnel')
        section.appendChild(header)

        const table = createElement('table', 'table table-borderless')
        table.innerHTML = '<thead><tr><th></th><th>Power</th><th>Owned</th></tr></thead>'

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        const personnels = [
            { id: 'pods', label: 'mining pods', },
            { id: 'fireteams', label: 'fireteams' },
            { id: 'titans', label: 'titans' },
            { id: 'corvettes', label: 'corvettes' },
        ]

        personnels.forEach((personnel) => {
            const row = document.createElement('tr')
            tbody.appendChild(row)

            const c1 = createElement('td', 'text-end', null,  personnel.label)
            row.appendChild(c1)

            const c2 = createElement('td')
            row.appendChild(c2)
            const power = createElement('input', 'form-control form-control-sm text-center', {
                id: personnel.id + 'power',
                type: 'number',
                style: 'width: 70px',
                value: portalPanel.dataLinkage[personnel.id + 'power']
            })
            power.addEventListener('change', portalPanel.updateFunction);
            portalPanel[power.id] = power;
            c2.appendChild(power)

            const c3 = createElement('td')
            row.appendChild(c3)
            const owned = createElement('input', 'form-control form-control-sm text-center', {
                id: personnel.id + 'owned',
                type: 'number',
                style: 'width: 90px',
                value: portalPanel.dataLinkage[personnel.id + 'owned']
            })
            owned.addEventListener('change', portalPanel.updateFunction);
            portalPanel[owned.id] = owned;
            c3.appendChild(owned)
        })

        section.appendChild(table)
        return section
    }

    const createFarms = () => {
        const section = createElement()
        const header = createElement('h3', null, null, 'Farms')
        section.appendChild(header)

        const table = document.createElement('table')
        table.className = 'table table-borderless'
        table.innerHTML = '<thead><tr><th>Farm</th><th>Total</th><th></th><th class="text-center">Pod</th><th class="text-center">Fire</th><th class="text-center">Titan</th><th class="text-center">Corv</th><th>Run time</th></tr></thead>'

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        for (let plannet = 0; plannet < 3; plannet++) {
            for (let farm = 0; farm < 3; farm ++) {
                const row = createElement('tr')
                row.appendChild(createElement('td', 'text-end', null, `${plannet+1}-${farm+1}`))
                const total = createElement('td', 'text-end', {
                    id: `farm${plannet}${farm}total`,
                })
                portalPanel[`farm${plannet}${farm}total`] = total
                row.appendChild(total)

                const lockId = `farm${plannet}${farm}lock`
                const lockCell = createElement('td')
                let lockContainer = createElement('label', 'lockcontainer');
                let lockBox = createElement('input', '', {
                    id: lockId,
                    type: 'checkbox',
                    checked: portalPanel.dataLinkage[lockId],
                });
                lockBox.addEventListener('change', portalPanel.updateFunction);

                lockContainer.appendChild(lockBox)
                lockContainer.appendChild(createElement('div', 'lockmark'))
                lockCell.appendChild(lockContainer)
                row.appendChild(lockCell)

                GameDB.academy.personnel.forEach((p) => {
                    const cell = createElement('td')
                    const e = createElement('input', 'form-control text-center', {
                        id: `farm${plannet}${farm}${p}`,
                        type: 'number',
                        style: 'width: 80px',
                        placeholder: '0',
                        value: portalPanel.dataLinkage[`farm${plannet}${farm}${p}`]
                    })
                    portalPanel[`farm${plannet}${farm}${p}`] = e
                    e.addEventListener('change', portalPanel.updateFunction);

                    cell.append(e)
                    row.appendChild(cell)
                })
                const time = createElement('td', 'font-normal', {
                    id: `farm${plannet}${farm}time`,
                })
                portalPanel[`farm${plannet}${farm}time`] = time
                row.appendChild(time)

                tbody.appendChild(row)

                const row2 = createElement('tr')
                row2.appendChild(createElement('td', '', { colSpan: 3 }))
                const mat = createElement('td', 'data-material', {
                    id: `farm${plannet}${farm}mat`,
                    colSpan: 5,
                })
                portalPanel[`farm${plannet}${farm}mat`] = mat
                row2.appendChild(mat)

                tbody.appendChild(row2)
            }
        }

        section.appendChild(table)

        const assignButton = createElement('button', 'btn btn-secondary', { type: 'button', style: 'display: block; margin: 20px auto; min-width: 300px' }, 'Maximize Mission Rate')
        assignButton.addEventListener('click', maximizeMissionRate)
        section.append(assignButton)

        const clearButton = createElement('button', 'btn btn-secondary', { type: 'button', style: 'display: block; margin: 20px auto; min-width: 300px' }, 'Clear Missions')
        clearButton.addEventListener('click', clearMissions)
        section.append(clearButton)

        return section
    }

    const createOutput = () => {
        const section = createElement()
        const header = createElement('h3', null, null, 'Output')
        section.appendChild(header)

        const unit = createElement('div', 'row g-3')
        unit.innerHTML = '<div class="col-auto"><label class="col-form-label">duration</label></div>'
        const col = createElement('div', 'col-auto')
        unit.appendChild(col)
        const select = createElement('select', 'form-select', {
            id: 'duration',
        })
        select.innerHTML = durationOptions.map(([v, l]) => `<option value="${v}">${l}</option>`).join('')
        select.value = playerData.academy.farmYieldSelected || '1-h'
        select.addEventListener('change', portalPanel.updateFunction);
        portalPanel['duration'] = select;
        col.appendChild(select);
        section.appendChild(unit)

        const table = document.createElement('table')
        table.className = 'table table-borderless'
        table.style = 'margin-top: 20px'
        table.innerHTML = '<thead><tr><th></th><th class="text-center">Stock</th><th class="text-center">Yield</th></tr></thead>'

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        const rowData = [
            ['Mission', null, 'missionyield'],
            ['Difar', 'difar', 'difaryield'],
            ['Kento', 'kento', 'kentoyield'],
            ['Chromium', 'chromium', 'chromiumyield'],
            ['Exon', 'exon', 'exonyield'],
            ['Organium', 'organium', 'organiumyield'],
            ['Adamorphium', 'adamorphium', 'adamorphiumyield'],
            ['Moskom', 'moskom', 'moskomyield'],
            ['Darkseid', 'darkseid', 'darkseidyield'],
        ]
        rowData.forEach(([label, input, display]) => {
            const row = createElement('tr')
            row.appendChild(createElement('td', 'text-end', null, label))

            if (input) {
                const td = createElement('td')
                const e = createElement('input', 'form-control text-center', {
                    id: input,
                    type: 'text',
                    style: 'width: 110px',
                    value: portalPanel.dataLinkage[input],
                })
                e.addEventListener('change', portalPanel.updateFunction);
                td.appendChild(e)
                row.appendChild(td)
            } else {
                row.appendChild(createElement('td'))
            }

            const d = createElement('td', 'text-end', {
                id: display,
            })
            portalPanel[display] = d;
            row.appendChild(d)

            tbody.appendChild(row)
        })

        section.appendChild(table)

        return section
    }

    flex.appendChild(createPersonel())
    flex.appendChild(createFarms())
    flex.appendChild(createOutput())
    panel.appendChild(flex)


    // let setting = playerData.academy.farmYieldSetting.type;
    // portalPanel.yieldtime.dataset.setting = setting;
    // portalPanel.yieldtime.innerText = academyFarmPortal.pages.default.toggles[0].settings[setting].text;
    // portalPanel.yieldtimeco.innerText = academyFarmPortal.pages.default.toggles[0].settings[setting].text + 's';
    PopulateTiming();
    populateYield();
}

academyFarmPortal.pages.default.updateFunction = function(e)
{
    if (e.target.id.includes('lock'))
    {
        portalPanel.dataLinkage[e.target.id] = e.target.checked;
        SavePlayerData();
        return;
    }

    if (e.target.id.includes('duration'))
    {
        portalPanel.dataLinkage[e.target.id] = e.target.value;
        SavePlayerData();

        PopulateTiming();
        populateYield();

        return;
    }

    if (e.target.id.includes('power'))
    {
        portalPanel.dataLinkage[e.target.id] = parseFloat(e.target.value);
        SavePlayerData();

        PopulateTiming();
        populateYield();

        return;
    }

    if (e.target.classList.contains('toggle'))
    {
        let currentSetting = parseInt(e.target.dataset.setting);
        let wrap = parseInt(e.target.dataset.wrap);
        currentSetting++;
        currentSetting = currentSetting % wrap;
        e.target.dataset.setting = currentSetting;

        portalPanel.dataLinkage[e.target.id] = currentSetting;
        portalPanel.yieldtime.innerText = academyFarmPortal.pages.default.toggles[0].settings[currentSetting].text;
        portalPanel.yieldtimeco.innerText = academyFarmPortal.pages.default.toggles[0].settings[currentSetting].text + 's';

        let duration = playerData.academy.farmYieldSetting.duration;
        if (currentSetting === 0)
        {
            duration *= (60 * 24);
        }
        else if (currentSetting === 1)
        {
            duration /= 60;
        }
        else
        {
            duration /= 24;
        }
        duration = Math.round(duration * 1000) / 1000;

        playerData.academy.farmYieldSetting.duration = duration;
        portalPanel.duration.value = duration;

        SavePlayerData();

        populateYield();

        return;
    }

    if (e.target.type === 'number')
    {
        portalPanel.dataLinkage[e.target.id] = parseInt(e.target.value);
        SavePlayerData();

        if (e.target.id === 'rankcurrent') { portalPanel['rankrequirement'].innerText = GameDB.fleet.zeus.rankRequirements[portalPanel.dataLinkage[e.target.id]]; }

        PopulateTiming();
        populateYield();

        return;
    }

    let value = parseBigNum(e.target.value);
    if (isNaN(value)) {e.target.value = 0}
    else {portalPanel.dataLinkage[e.target.id] = value}
    SavePlayerData();

    populateYield();
}

function PopulateTiming()
{
    let farmData = CalculateFarmTimes();
    const matBonus = GetCurrentMatBonus()

    for (let planet = 0; planet < GameDB.academy.planets; planet++)
    {
        for (let farm = 0; farm < 3; farm++)
        {
            let datum = farmData[planet * 3 + farm];
            portalPanel[`farm${planet}${farm}total`].innerText = datum.personnel;
            portalPanel[`farm${planet}${farm}time`].innerText = datum.time;
            portalPanel[`farm${planet}${farm}time`].classList.toggle('is-capped', datum.isCapped)
            portalPanel[`farm${planet}${farm}mat`].innerText = GameDB.academy.farms[planet * 3 + farm].baseMats.map((a, i) => {
                if (a === 0) return null
                const mat = matBonus * a
                return GameDB.academy.materials[i] + ': ' + (mat > 1000 ? mat.toExponential(2) : mat)
            }).filter(Boolean).join(', ')
        }
    }
}

function maximizeMissionRate()
{
    GetMaxMissionRate();

    for (let planet = 0; planet < GameDB.academy.planets; planet++)
    {
        for (let farm = 0; farm < 3; farm++)
        {
            for (let personnel = 0; personnel < 4; personnel++)
            {
                let type = GameDB.academy.personnel[personnel];
                portalPanel[`farm${planet}${farm}${type}`].value = portalPanel.dataLinkage[`farm${planet}${farm}${type}`];
            }
        }
    }

    populateYield();
    PopulateTiming();
}

function clearMissions()
{
    for (let planet = 0; planet < GameDB.academy.planets; planet++)
    {
        for (let farm = 0; farm < 3; farm++)
        {
            if (playerData.academy.farms[planet][farm].locked) continue;

            for (let personnel = 0; personnel < 4; personnel++)
            {
                let type = GameDB.academy.personnel[personnel];
                portalPanel.dataLinkage[`farm${planet}${farm}${type}`] = 0;
                portalPanel[`farm${planet}${farm}${type}`].value = 0;
            }
        }
    }

    SavePlayerData();
    populateYield();
    PopulateTiming();
}

function populateYield()
{
    let yieldData = CalculateFarmYields();
    // const duration = parseInt((playerData.academy.farmYieldSelected || '1-h').split('-')[0], 10)
    // let rateData =
    // {
    //     missionRate: yieldData.missionYield / duration,
    //     apRate: yieldData.apYield / duration,
    //     matRate: yieldData.matYield.map(yieldValue => {
    //         let rateValue = yieldValue / duration;
    //         if (rateValue >= 1000)
    //         {
    //             rateValue = rateValue.toExponential(2);
    //         }
    //         else
    //         {
    //             rateValue = rateValue.toFixed(2);
    //         }
    //         return rateValue;
    //     })
    // };
    // if (rateData.missionRate >= 1000)
    // {
    //     rateData.missionRate = rateData.missionRate.toExponential(2);
    // }
    // else
    // {
    //     rateData.missionRate = rateData.missionRate.toFixed(2);
    // }
    if (yieldData.missionYield >= 1000)
    {
        yieldData.missionYield = yieldData.missionYield.toExponential(2);
    }
    // if (yieldData.apYield >= 1000)
    // {
    //     yieldData.apYield = yieldData.apYield.toExponential(2);
    // }
    // else
    // {
    //     yieldData.apYield = yieldData.apYield.toFixed(2);
    // }
    // if (rateData.apRate >= 1000)
    // {
    //     rateData.apRate = rateData.apRate.toExponential(2);
    // }
    // else
    // {
    //     rateData.apRate = rateData.apRate.toFixed(2);
    // }
    yieldData.matYield = yieldData.matYield.map(yieldValue => {
        if (yieldValue > 1000)
        {
            yieldValue = yieldValue.toExponential(2)
        }
        else
        {
            yieldValue = yieldValue;
        }
        return yieldValue;
    });


    // portalPanel.missionrate.innerText = rateData.missionRate;
    // portalPanel.aprate.innerText = rateData.apRate;
    // portalPanel.difarrate.innerText = rateData.matRate[0];
    // portalPanel.kentorate.innerText = rateData.matRate[1];
    // portalPanel.chromiumrate.innerText = rateData.matRate[2];
    // portalPanel.exonrate.innerText = rateData.matRate[3];
    // portalPanel.organiumrate.innerText = rateData.matRate[4];
    // portalPanel.adamorphiumrate.innerText = rateData.matRate[5];
    // portalPanel.moskomrate.innerText = rateData.matRate[6];
    // portalPanel.darkseidrate.innerText = rateData.matRate[7];

    portalPanel.missionyield.innerText = yieldData.missionYield;
    // portalPanel.apyield.innerText = yieldData.apYield;
    portalPanel.difaryield.innerText = yieldData.matYield[0];
    portalPanel.kentoyield.innerText = yieldData.matYield[1];
    portalPanel.chromiumyield.innerText = yieldData.matYield[2];
    portalPanel.exonyield.innerText = yieldData.matYield[3];
    portalPanel.organiumyield.innerText = yieldData.matYield[4];
    portalPanel.adamorphiumyield.innerText = yieldData.matYield[5];
    portalPanel.moskomyield.innerText = yieldData.matYield[6];
    portalPanel.darkseidyield.innerText = yieldData.matYield[7];
}
