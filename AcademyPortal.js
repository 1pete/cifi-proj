function CalculateFarmTimes(getRawTime = false) {
  let farmData = []
  for (let planet = 0; planet < GameDB.academy.planets; planet++) {
    for (let farm = 0; farm < 3; farm++) {
      const farmInfo = GameDB.academy.farms[planet * 3 + farm]
      const farmSetting = playerData.academy.farms[planet][farm]
      const personnelSetting = playerData.academy.personnel

      let power = 0
      let population = 0
      power += (farmSetting.pods || 0) * (personnelSetting[0].power || 0)
      population += farmSetting.pods || 0
      power += (farmSetting.fireteams || 0) * (personnelSetting[1].power || 0)
      population += farmSetting.fireteams || 0
      power += (farmSetting.titans || 0) * (personnelSetting[2].power || 0)
      population += farmSetting.titans || 0
      power += (farmSetting.corvettes || 0) * (personnelSetting[3].power || 0)
      population += farmSetting.corvettes || 0

      let missionSpeedBonus = Math.pow(1.0311, playerData.loopMods.swarm)
      missionSpeedBonus *= Math.pow(
        1.05,
        Math.floor((playerData.research.mission[2] + 1) / 2),
      )
      missionSpeedBonus *= (playerData.research.perfection[2] > 4) + 1
      missionSpeedBonus *= (playerData.research.perfection[3] > 4) + 1
      if (playerData.academy.badges.engineering) missionSpeedBonus *= 2
      missionSpeedBonus *= Math.pow(1.1, playerData.loopMods.productivity)
      missionSpeedBonus *= 1 + 0.03 * playerData.relics.glider

      if (power === 0) {
        if (getRawTime) {
          farmData.push({ time: 1e10, personnel: population })
          continue
        }
        farmData.push({ time: '', personnel: 0 })
        continue
      }

      const MIN_TIME = 2

      const time = (60 * farmInfo.baseTime) / (power * missionSpeedBonus)
      const isCapped = time <= MIN_TIME
      const actualTime = isCapped
        ? MIN_TIME
        : farmInfo.isTimeRounded
        ? Math.ceil(time)
        : time

      if (getRawTime) {
        farmData.push({ time: actualTime, personnel: population })
        continue
      }

      farmData.push({
        time: formatDuration2(actualTime),
        rawTime: time.toFixed(2),
        isCapped,
        personnel: population,
      })
    }
  }

  return farmData
}

function GetMaxMissionRate() {
  let farms = [...GameDB.academy.farms]

  let missionSpeedBonus = Math.pow(1.0311, playerData.loopMods.swarm)
  missionSpeedBonus *= Math.pow(
    1.05,
    Math.floor((playerData.research.mission[2] + 1) / 2),
  )
  missionSpeedBonus *= (playerData.research.perfection[2] > 4) + 1
  missionSpeedBonus *= (playerData.research.perfection[3] > 4) + 1
  if (playerData.academy.badges.engineering) missionSpeedBonus *= 2
  missionSpeedBonus *= Math.pow(1.1, playerData.loopMods.productivity)

  let personnel = [
    {
      power: playerData.academy.personnel[3].power,
      totalPop: playerData.academy.personnel[3].population,
      usedPop: 0,
      get availPop() {
        return this.totalPop - this.usedPop
      },
    },
    {
      power: playerData.academy.personnel[2].power,
      totalPop: playerData.academy.personnel[2].population,
      usedPop: 0,
      get availPop() {
        return this.totalPop - this.usedPop
      },
    },
    {
      power: playerData.academy.personnel[1].power,
      totalPop: playerData.academy.personnel[1].population,
      usedPop: 0,
      get availPop() {
        return this.totalPop - this.usedPop
      },
    },
    {
      power: playerData.academy.personnel[0].power,
      totalPop: playerData.academy.personnel[0].population,
      usedPop: 0,
      get availPop() {
        return this.totalPop - this.usedPop
      },
    },
  ]

  let farmDetails = []

  for (let planet = 0; planet < GameDB.academy.planets; planet++) {
    for (let farm = 0; farm < 3; farm++) {
      let farmSpecs = {
        id: farms[planet * 3 + farm].id,
        locked: false,
        maxPop: farms[planet * 3 + farm].maxPop,
        currentPop: 0,
        popDistro: [0, 0, 0, 0],
        power: 0,
        baseTime: farms[planet * 3 + farm].baseTime / missionSpeedBonus,
        get availSpace() {
          return this.maxPop - this.currentPop
        },
        get timeLimitPassed() {
          return !(this.power === 0 || (this.baseTime * 60) / this.power >= 2)
        },
      }

      if (playerData.academy.farms[planet][farm].locked) {
        farmSpecs.locked = true

        farmSpecs.popDistro = [
          playerData.academy.farms[planet][farm].pods,
          playerData.academy.farms[planet][farm].fireteams,
          playerData.academy.farms[planet][farm].titans,
          playerData.academy.farms[planet][farm].corvettes,
        ]
        farmSpecs.power =
          playerData.academy.farms[planet][farm].pods *
          playerData.academy.personnel[0].power
        farmSpecs.power +=
          playerData.academy.farms[planet][farm].fireteams *
          playerData.academy.personnel[1].power
        farmSpecs.power +=
          playerData.academy.farms[planet][farm].titans *
          playerData.academy.personnel[2].power
        farmSpecs.power +=
          playerData.academy.farms[planet][farm].corvettes *
          playerData.academy.personnel[3].power

        personnel[3].usedPop += playerData.academy.farms[planet][farm].pods
        personnel[2].usedPop += playerData.academy.farms[planet][farm].fireteams
        personnel[1].usedPop += playerData.academy.farms[planet][farm].titans
        personnel[0].usedPop += playerData.academy.farms[planet][farm].corvettes
      }

      farmDetails.push(farmSpecs)
    }
  }

  // console.table(personnel);
  // console.log(farmDetails);

  farmDetails.sort((a, b) => a.baseTime - b.baseTime)

  for (let i = 0; i < farmDetails.length; i++) {
    if (farmDetails[i].locked) continue

    let planet = Math.floor(farmDetails[i].id / 10)
    let farmNum = farmDetails[i].id - planet * 10

    playerData.academy.farms[planet - 1][farmNum - 1].pods = 0
    playerData.academy.farms[planet - 1][farmNum - 1].fireteams = 0
    playerData.academy.farms[planet - 1][farmNum - 1].titans = 0
    playerData.academy.farms[planet - 1][farmNum - 1].corvettes = 0

    for (let personnelNum = 0; personnelNum < 4; personnelNum++) {
      let populate = Math.min(
        farmDetails[i].availSpace,
        personnel[personnelNum].availPop,
      )
      farmDetails[i].currentPop += populate
      farmDetails[i].power += populate * personnel[personnelNum].power
      personnel[personnelNum].usedPop += populate
      playerData.academy.farms[planet - 1][farmNum - 1][
        GameDB.academy.personnel[3 - personnelNum]
      ] += populate

      while (farmDetails[i].timeLimitPassed) {
        farmDetails[i].currentPop--
        farmDetails[i].power -= personnel[personnelNum].power

        if (!farmDetails[i].timeLimitPassed && personnelNum === 3) {
          farmDetails[i].currentPop++
          farmDetails[i].power += personnel[personnelNum].power
          break
        }

        personnel[personnelNum].usedPop--
        playerData.academy.farms[planet - 1][farmNum - 1][
          GameDB.academy.personnel[3 - personnelNum]
        ]--
      }

      if (farmDetails[i].availSpace <= 0) break
    }
  }

  SavePlayerData()
}

function GetStaticMatBonus() {
  let staticMatBonus = Math.pow(1.01, playerData.loopMods.beyonders)
  staticMatBonus *= Math.pow(1.5111, playerData.loopMods.swarm)
  staticMatBonus *= Math.pow(1.01, playerData.loopMods.expansion)
  staticMatBonus *= Math.pow(1.05, playerData.loopMods.materialHauling)
  staticMatBonus *=
    0.25 * playerData.fleet.zeus.installs[2] * playerData.fleet.zeus.crew + 1
  staticMatBonus *=
    0.1 * playerData.fleet.zeus.installs[5] * playerData.fleet.zeus.crew + 1
  const wonderous60 = Math.pow(
    1.044,
    Math.max(0, playerData.shardMilestones[25] - 55) *
      (playerData.shardMilestones[25] > 59),
  )
  staticMatBonus *= wonderous60
  const wonderous90 = Math.pow(
    1.068,
    Math.max(0, playerData.shardMilestones[25] - 84) *
      (playerData.shardMilestones[25] > 89),
  )
  staticMatBonus *= wonderous90
  staticMatBonus *= Math.pow(
    1.018,
    Math.max(0, playerData.shardMilestones[28] - 20) *
      (playerData.shardMilestones[28] > 24),
  )
  staticMatBonus *= Math.pow(
    1.028,
    Math.max(0, playerData.shardMilestones[28] - 45) *
      (playerData.shardMilestones[28] > 49),
  )
  staticMatBonus *= Math.pow(
    1.5,
    Math.floor(playerData.research.mission[0] / 2),
  )
  staticMatBonus *= Math.pow(
    1.75,
    Math.floor(playerData.research.mission[1] / 2),
  )
  staticMatBonus *= 4 * (playerData.research.perfection[1] > 1) + 1
  staticMatBonus *=
    (playerData.research.mission[3] > 1 ? 2 : 1) *
    (playerData.research.mission[3] > 3 ? 3 : 1) *
    (playerData.research.mission[3] > 5 ? 4 : 1)
  staticMatBonus *= 4 * (playerData.research.perfection[2] > 1) + 1
  staticMatBonus *= 8 * (playerData.research.perfection[3] > 1) + 1
  staticMatBonus *=
    (playerData.research.mission[4] > 1 ? 3 : 1) *
    (playerData.research.mission[4] > 3 ? 4 : 1) *
    (playerData.research.mission[4] > 5 ? 5 : 1)
  staticMatBonus *= Math.pow(1.05, playerData.diamonds.special.materials || 0)
  if (playerData.diamonds.iapCollector) staticMatBonus *= 1.5
  staticMatBonus *= Math.pow(1.75, playerData.academy.projectLevels[8])
  staticMatBonus *= Math.pow(
    0.0002 * playerData.loopMods.looping + 1,
    playerData.loopsFilled,
  )
  staticMatBonus *= Math.pow(
    0.002 * playerData.loopMods.productivity + 1,
    playerData.level,
  )
  if (playerData.meltdown !== 0){
    staticMatBonus *= playerData.meltdown
    staticMatBonus /= 14.5 //this is almost certainly wrong, but it fits my data pretty well
  }

  return staticMatBonus
}

function GetDynamicMatBonus() {
  return Math.pow(
    0.01 * playerData.loopMods.zeusRankBenefits + 1,
    playerData.fleet.zeus.rank.current,
  )
}

function GetCurrentMatBonus() {
  return GetStaticMatBonus() * GetDynamicMatBonus()
}

function CalculateFarmYields(giveTotal = false) {
  const getDuration = () => {
    let durationSetting = playerData.academy.farmYieldSelected || '1-h'
    const [d, u] = durationSetting.split('-')
    let duration = parseInt(d, 10) * 60 * 60
    if (u === 'd') {
      duration *= 24
    }

    return duration
  }

  let totalDuration = getDuration() || 60 * 60
  let duration = totalDuration

  let staticMatBonus = GetStaticMatBonus()
  let dynamicMatBonus = GetDynamicMatBonus()
  const matBonusPerRank = 0.01 * playerData.loopMods.zeusRankBenefits + 1

  let farmTimes = CalculateFarmTimes(true)

  let farms = []

  for (let i = 0; i < farmTimes.length; i++) {
    const farmDuration = farmTimes[i].time
    if (farmDuration <= duration) {
      let newFarm = {
        id: GameDB.academy.farms[i].id,
        staticMats: GameDB.academy.farms[i].baseMats.map(
          (mat) => mat * staticMatBonus,
        ),
        runTime: farmDuration,
        activeTime: farmDuration,
        farmCount: Math.floor(duration / farmDuration),
      }
      farms.push(newFarm)
    }
  }

  let missionYield = farms.reduce((acc, farm) => acc + farm.farmCount, 0)
  let missionContrib = farms.reduce((acc, farm) => {
    acc[farm.id] = farm.farmCount
    return acc
  }, {})
  let matYield = [0, 0, 0, 0, 0, 0, 0, 0]
  let matContrib = [{}, {}, {}, {}, {}, {}, {}, {}]
  if (giveTotal) {
    matYield = [...playerData.academy.stock]
  }
  let rankProgress = playerData.fleet.zeus.rank.progress
  let yieldRank = playerData.fleet.zeus.rank.current

  if (farms.length === 0) {
    return { missionYield, missionContrib, matYield, matContrib }
  }

  // use precise calculation if duration is less than 3 days
  if (totalDuration < 3 * 24 * 3600) {
    while (duration > 0) {
      farms.sort((a, b) => {
        return a.activeTime - b.activeTime
      })
      let subTime = farms[0].activeTime

      if (subTime > duration) break

      for (let i = 0; i < farms.length; i++) {
        farms[i].activeTime -= subTime

        if (farms[i].activeTime <= 0) {
          farms[i].activeTime = farms[i].runTime
          for (let mat = 0; mat < farms[i].staticMats.length; mat++) {
            const product = farms[i].staticMats[mat] * dynamicMatBonus
            matYield[mat] += product
            if (matContrib[mat][farms[i].id]) {
              matContrib[mat][farms[i].id] += product
            } else {
              matContrib[mat][farms[i].id] = product
            }
          }

          rankProgress++
        }
      }

      const rankReq = GameDB.fleet.zeus.rankRequirements[yieldRank]
      if (rankReq && rankProgress >= rankReq) {
        rankProgress -= rankReq
        yieldRank++
        dynamicMatBonus = Math.pow(matBonusPerRank, yieldRank)
      }

      duration -= subTime
    }
  } else {
    // use estimated calculation if duration is 3 days or longer

    const currentZeusRankBonus = Math.pow(matBonusPerRank, yieldRank)
    let incRank = 0
    let zeusRankBonusOverTime = 0

    let missionCount = missionYield
    while (missionCount > 0) {
      let toNextRank =
        GameDB.fleet.zeus.rankRequirements[yieldRank + incRank] || 1e30
      if (rankProgress > 0) {
        toNextRank -= rankProgress
        rankProgress = 0
      }

      zeusRankBonusOverTime +=
        (Math.pow(matBonusPerRank, incRank) *
          Math.min(toNextRank, missionCount)) /
        missionYield

      missionCount -= toNextRank
      incRank++
    }

    farms.forEach((farm) => {
      farm.staticMats.forEach((staticMat, mat) => {
        const totalMat =
          staticMat *
          currentZeusRankBonus *
          zeusRankBonusOverTime *
          farm.farmCount
        matYield[mat] += totalMat
        matContrib[mat][farm.id] = totalMat
      })
    })
  }

  return {
    missionYield,
    missionContrib,
    matYield,
    matContrib,
    duration: totalDuration,
  }
}

class StoreHouse {
  constructor(totalMats) {
    this.mats = []
    this.spent = []
    for (let i = 0; i < totalMats.length; i++) {
      this.mats.push(totalMats[i])
      this.spent.push(0)
    }
  }
}

class ProjectConfig {
  get gainedLevels() {
    return this.currentLevel - this.startLevel
  }

  get gainedBp() {
    return this.gainedLevels * GameDB.academy.projects[this.projectID].bpCount
  }

  constructor(_projectID, _currentLevel) {
    this.projectID = _projectID
    this.startLevel = _currentLevel
    this.currentLevel = _currentLevel
    this.testLevel = _currentLevel
  }

  MaxLevel(storeHouse) {
    this.testLevel = this.currentLevel

    let costDiv = 1
    costDiv =
      (playerData.research.construction[0] > 1 ? 1.5 : 1) *
      (playerData.research.construction[0] > 3 ? 2 : 1) *
      (playerData.research.construction[0] > 5 ? 2.5 : 1)
    costDiv *=
      (playerData.research.construction[1] > 1 ? 2 : 1) *
      (playerData.research.construction[1] > 2 ? 3 : 1) *
      (playerData.research.construction[1] > 3 ? 3 : 1) *
      (playerData.research.construction[1] > 4 ? 4 : 1) *
      (playerData.research.construction[1] > 5 ? 4 : 1)

    let accumCosts = [0, 0, 0, 0, 0, 0, 0, 0]
    while (true) {
      let searchEnd = false
      let nextCosts = GameDB.academy.projectNextLevelCost(
        this.projectID,
        this.testLevel,
        costDiv,
      )
      //   if (this.testLevel === this.startLevel)
      //   {
      //     console.log(`Project: ${this.projectID}, Level: ${this.testLevel}`);
      //     console.table(nextCosts);
      //   }

      for (let i = 0; i < storeHouse.mats.length; i++) {
        if (
          storeHouse.mats[i] - storeHouse.spent[i] <
          accumCosts[i] + nextCosts[i]
        ) {
          searchEnd = true
          break
        }
      }

      if (searchEnd) break

      for (let i = 0; i < storeHouse.mats.length; i++) {
        accumCosts[i] += nextCosts[i]
      }
      this.testLevel++

      //   console.count(`Project: ${this.projectID}`);
    }

    let result = {
      newLevels: this.testLevel - this.currentLevel,
      costs: accumCosts,
    }

    // console.log(result);

    return result
  }

  getCostDiv() {
    let costDiv = 1
    costDiv =
      (playerData.research.construction[0] > 1 ? 1.5 : 1) *
      (playerData.research.construction[0] > 3 ? 2 : 1) *
      (playerData.research.construction[0] > 5 ? 2.5 : 1)
    costDiv *=
      (playerData.research.construction[1] > 1 ? 2 : 1) *
      (playerData.research.construction[1] > 2 ? 3 : 1) *
      (playerData.research.construction[1] > 3 ? 3 : 1) *
      (playerData.research.construction[1] > 4 ? 4 : 1) *
      (playerData.research.construction[1] > 5 ? 4 : 1)

    return costDiv
  }

  get currentCost() {
    let costDiv = this.getCostDiv()

    let accumCosts = [0, 0, 0, 0, 0, 0, 0, 0]

    for (
      let spanLevel = this.startLevel;
      spanLevel < this.currentLevel;
      spanLevel++
    ) {
      let nextCosts = GameDB.academy.projectNextLevelCost(
        this.projectID,
        spanLevel,
        costDiv,
      )
      for (let i = 0; i < 8; i++) {
        accumCosts[i] += nextCosts[i]
      }
    }

    return accumCosts
  }

  getStartCost() {
    const costDiv = this.getCostDiv()
    return GameDB.academy.projectNextLevelCost(
      this.projectID,
      this.startLevel,
      costDiv,
    )
  }
}
