export default function GetStatisticData(data) {
  let resData = {};
  resData.first = {};
  resData.first.wins = 0;
  resData.first.losses = 0;
  resData.first.kills = 0;
  resData.first.deaths = 0;
  resData.first.assists = 0;
  resData.first.teamkills = 0;
  resData.second = [];
  resData.secondTotal = {};
  let index = 0;
  let secondList = [];
  resData.totalMatch = 0;

  data.matches.forEach(element => {
    if (element.participants[data.partinum[index]].win) {
      resData.first.wins++;
    } else {
      resData.first.losses++;
    }
    resData.first.kills += element.participants[data.partinum[index]].kills;
    resData.first.deaths += element.participants[data.partinum[index]].deaths;
    resData.first.assists += element.participants[data.partinum[index]].assists;

    if (data.partinum[index] < 5) {
      resData.first.teamkills += element.teams[0].objectives.champion.kills;
    } else {
      resData.first.teamkills += element.teams[1].objectives.champion.kills;
    }

    let secondData = new Object();
    secondData.championName = element.participants[data.partinum[index]].championName;
    secondData.kills = element.participants[data.partinum[index]].kills;
    secondData.deaths = element.participants[data.partinum[index]].deaths;
    secondData.assists = element.participants[data.partinum[index]].assists;
    secondData.cs = element.participants[data.partinum[index]].totalMinionsKilled + element.participants[data.partinum[index]].neutralMinionsKilled;
    if (element.participants[data.partinum[index]].win) {
      secondData.win = 1;
    } else {
      secondData.win = 0;
    }
    secondList.push(secondData);

    index++;
  });

  resData.second = FilterList(secondList);
  resData.totalMatch = secondList.length;
  resData.secondTotal = SecondTotal(secondList);


  return resData;
}

function FilterList(list) {
  if (list.length < 2) {
    return list;
  } else {
    const listObjects = new Map();

    list.forEach((li) => {
      if (listObjects.has(li.championName)) {
        const hasObject = listObjects.get(li.championName);
        hasObject.kills += li.kills;
        hasObject.deaths += li.deaths;
        hasObject.assists += li.assists;
        hasObject.cs += li.cs;
        hasObject.win += li.win;
        hasObject.count += 1;
      } else {
        listObjects.set(li.championName, { ...li, count: 1 });
      }
    });
    return Array.from(listObjects.values()).sort((a, b) => b.count - a.count).slice(0,3);
  }
}

function SecondTotal(list) {
  const total = {
    kills: 0,
    deaths: 0,
    assists: 0,
    cs: 0,
    win: 0,
    count: 0,
  };
  list.forEach((li) => {
    total.kills += li.kills;
    total.deaths += li.deaths;
    total.assists += li.assists;
    total.cs += li.cs;
    total.win += li.win;
    total.count += 1;
  });
  return total;
}