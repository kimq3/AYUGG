import express, { json, urlencoded } from "express";
import cors from "cors";
import info from "../server/championData.json" assert { type: "json" };

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

const data = info;
const data2 = {
  data: {
    id: "Garen",
    version: "13.11.1",
    rune: {
      version1: {
        mainTitle: "8000",
        subTitle: "8400",
        mainRune: {
          id: "8010",
          line1: "9111",
          line2: "9105",
          line3: "8299",
        },
        subRune: {
          line1: "8429",
          line2: "8451",
        },
        stats: {
          line1: "5008",
          line2: "5008",
          line3: "5002",
        },
        pickRate: "45.23%",
        winRate: "53.95%",
      },
      version2: {
        mainTitle: "8200",
        subTitle: "8400",
        mainRune: {
          id: "8230",
          line1: "8275",
          line2: "8234",
          line3: "8236",
        },
        subRune: {
          line1: "8429",
          line2: "8451",
        },
        stats: {
          line1: "5008",
          line2: "5008",
          line3: "5002",
        },
        pickRate: "26.44%",
        winRate: "55.27%",
      },
    },
    skill: {
      master: {
        1: {
          id: "GarenE.png",
          name: "심판",
          key: "E",
        },
        2: {
          id: "GarenQ.png",
          name: "결정타",
          key: "Q",
        },
        3: {
          id: "GarenW.png",
          name: "용기",
          key: "W",
        },
      },
      order: {
        1: "Q",
        2: "E",
        3: "W",
        4: "E",
        5: "E",
        6: "R",
        7: "E",
        8: "Q",
        9: "E",
        10: "Q",
        11: "R",
        12: "Q",
      },
    },
    spell: {
      version1: {
        spell1: {
          id: "SummonerDot",
          name: "점화",
        },
        spell2: {
          id: "SummonerFlash",
          name: "점멸",
        },
        pickRate: "79.33%",
        winRate: "51.20%",
      },
      version2: {
        spell1: {
          id: "SummonerTeleport",
          name: "순간이동",
        },
        spell2: {
          id: "SummonerFlash",
          name: "점멸",
        },
        pickRate: "13.21%",
        winRate: "48.03%",
      },
    },
    startItem: {
      version1: {
        item1: {
          id: "1054",
          name: "도란의 방패",
        },
        item2: {
          id: "2003",
          name: "체력 물약",
        },
        pickRate: "84.48%",
        winRate: "50.68%",
      },
      version2: {
        item1: {
          id: "1055",
          name: "도란의 검",
        },
        item2: {
          id: "2003",
          name: "체력 물약",
        },
        pickRate: "8.4%",
        winRate: "50.38%",
      },
    },
    shoes: {
      version1: {
        id: "3006",
        name: "광전사의 군화",
        pickRate: "78.61%",
        winRate: "52.05%",
      },
      version2: {
        id: "3047",
        name: "판금 장화",
        pickRate: "14.04%",
        winRate: "47.21%",
      },
    },
    mythicBuild: {
      mythic1: {
        id: "6631",
        name: "발걸음 분쇄기",
        version1: {
          legend1: "3742",
          legend2: "3071",
          pickRate: "5.8%",
          winRate: "61.3%",
        },
        version2: {
          legend1: "3071",
          legend2: "3742",
          pickRate: "3.5%",
          winRate: "65.1%",
        },
      },
      mythic2: {
        id: "3078",
        name: "삼위일체",
        version1: {
          legend1: "3742",
          legend2: "3071",
          pickRate: "9.8%",
          winRate: "58.3%",
        },
        version2: {
          legend1: "3071",
          legend2: "3053",
          pickRate: "5.7%",
          winRate: "50.1%",
        },
      },
    },
    legend1: {
      id: "3742",
      name: "망자의 갑옷",
      pickRate: "5.8%",
      winRate: "61.3%",
    },
    legend2: {
      id: "3071",
      name: "칠흑의 양날도끼",
      pickRate: "7.8%",
      winRate: "51.3%",
    },
    counter: [
      {
        win: true,
        championName: "람머스",
        championId: "Rammus",
        championImg:
          "https://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/Rammus.png",
        winRate: "57.78%",
      },
      {
        win: true,
        championName: "사일러스",
        championId: "Sylas",
        championImg:
          "https://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/Sylas.png",
        winRate: "57.24%",
      },
      {
        win: true,
        championName: "카시오페아",
        championId: "Cassiopeia",
        championImg:
          "https://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/Cassiopeia.png",
        winRate: "57.14%",
      },
      {
        win: true,
        championName: "제드",
        championId: "Zed",
        championImg:
          "https://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/Zed.png",
        winRate: "55.83%",
      },
      {
        win: false,
        championName: "케일",
        championId: "Kayle",
        championImg:
          "https://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/Kayle.png",
        winRate: "44.81%",
      },
      {
        win: false,
        championName: "우디르",
        championId: "Udyr",
        championImg:
          "https://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/Udyr.png",
        winRate: "45.19%",
      },
      {
        win: false,
        championName: "블라디미르",
        championId: "Vladimir",
        championImg:
          "https://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/Vladimir.png",
        winRate: "45.41%",
      },
      {
        win: false,
        championName: "렝가",
        championId: "Rengar",
        championImg:
          "https://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/Rengar.png",
        winRate: "46.32%",
      },
    ],
  },
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/garen", (req, res) => {
  res.json({ data });
});

app.listen(8100, () => {
  console.log(`Example app listening on port 8100`);
});
