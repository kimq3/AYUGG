from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import sqlite3
import json
import time

chromeOptions = Options()
chromeOptions.add_experimental_option("detach", True)  # 자동꺼짐 방지
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chromeOptions)
championId = "garen"

url = "https://www.op.gg/champions/" + championId + "/build"
url2 = "https://www.deeplol.gg/champions/" + championId + "/build"
driver.get(url)
time.sleep(3)

# 이상한 놈
etc = 3

con = sqlite3.connect("./championsDetails.db")
cur = con.cursor()

sql = """CREATE TABLE IF NOT EXISTS {} (
                    champId,
                    champImg,
                    champName,
                    champSkill,
                    rate,
                    counter,
                    rune,
                    spell,
                    startItem,
                    shoes,
                    master,
                    skillSeq,
                    itemTree,
                    legendItem)
"""
sqlOpen = sql.format(championId)
cur.execute(sqlOpen)


# 해당 태그에서 text 추출
def getText(xpath):
    return driver.find_element(By.XPATH, xpath).text


# 이미지 src 추출
def getSrc(xpath):
    data = driver.find_element(By.XPATH, xpath)
    src = data.get_attribute("src")
    return src


# 룬 아이디 얻기 인자값 : xpath
def getRuneId(xpath):
    src = getSrc(xpath)
    spliteStr = src.split(".")[2].split("/")
    length = len(spliteStr)
    id = spliteStr[length - 1]
    return id

# src에서 id 추출
def getId(src):
    spliteStr = src.split(".")[2].split("/")
    length = len(spliteStr)
    id = spliteStr[length - 1]
    return id
    
# 활성화된 룬 찾기
def checkRune(basicXpath, runeCount):
    srcList = []
    for i in range(1, runeCount):
        xpath = basicXpath.format(i)
        src = getSrc(xpath)
        srcList.append(src)

    length = len(srcList)

    # 'g' 추출
    def split(src):
        data = src.split(",", maxsplit=3)[3]
        return data[7:8]

    dataList = []
    for i in range(length):
        dataList.append(split(srcList[i]))

    for i in range(length):
        if dataList[i] != "g":
            return getId(srcList[i])
        
    return False


def detailstatCrawl(champId):
    # 챔피언 이미지
    champImgSrc = getSrc('//*[@id="content-header"]/div[1]/div[3]/div[1]/div[1]/div[1]/img')

    # 챔프 이름
    champName = getText('//*[@id="content-header"]/div[1]/div[3]/div[1]/div[1]/div[2]/h1/strong')

    # 챔프 스킬 패시브
    skillPSrc = getSrc('//*[@id="content-header"]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/img')

    # 챔프 스킬 Q
    skillQSrc = getSrc('//*[@id="content-header"]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div/div[2]/div/img')

    # 챔프 스킬 W
    skillWSrc = getSrc('//*[@id="content-header"]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div/div[3]/div/img')

    # 챔프 스킬 E
    skillESrc = getSrc('//*[@id="content-header"]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div/div[4]/div/img')

    # 챔프 스킬 R
    skillRSrc = getSrc('//*[@id="content-header"]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div/div[5]/div/img')

    champSkillData = {
        "P": skillPSrc,
        "Q": skillQSrc,
        "W": skillWSrc,
        "E": skillESrc,
        "R": skillRSrc,
    }
    champSkill = json.dumps(champSkillData)

    # 승률
    winRate = getText('//*[@id="content-header"]/div[1]/div[3]/div[1]/div[2]/div/div[1]/div[2]')

    # 픽률
    pickRate = getText('//*[@id="content-header"]/div[1]/div[3]/div[1]/div[2]/div/div[2]/div[2]')

    # 밴률
    banRate = getText('//*[@id="content-header"]/div[1]/div[3]/div[1]/div[2]/div/div[3]/div[2]')

    champRateData = {
        "winRate": winRate,
        "pickRate": pickRate,
        "banRate": banRate,
    }
    champRate = json.dumps(champRateData)

    # 카운터
    def getCounterImg(basic):
        list = []
        for i in range(1, 5):
            xpath = basic.format(i)
            src = getSrc(xpath)
            list.append(src)
        return list

    def getCounterRate(basic):
        list = []
        for i in range(1, 5):
            xpath = basic.format(i)
            text = getText(xpath)
            list.append(text)
        return list

    def counterData(imgList, rateList, win):
        list = []
        for i in range(4):
            data = {"win": win, "championImg": imgList[i], "winRate": rateList[i]}
            list.append(data)
        return list

    winCounterImgList = getCounterImg('//*[@id="content-container"]/aside/div[2]/div[2]/div/ul[2]/li[{}]/a/img')
    winCounterRateList = getCounterRate('//*[@id="content-container"]/aside/div[2]/div[2]/div/ul[2]/li[{}]/a/div[1]')
    winCounterData = counterData(winCounterImgList, winCounterRateList, True)

    loseCounterImgList = getCounterImg('//*[@id="content-container"]/aside/div[2]/div[2]/div/ul[1]/li[{}]/a/img')
    loseCounterRateList = getCounterRate( '//*[@id="content-container"]/aside/div[2]/div[2]/div/ul[1]/li[{}]/a/div[1]')
    loseCounterData = counterData(loseCounterImgList, loseCounterRateList, False)

    counterData = {"winCounter": winCounterData, "loseCounter": loseCounterData}
    counter = json.dumps(counterData)

    def getRuneData(ver):
        # Nav 메인 룬
        mainRuneNavXpath = '//*[@id="content-container"]/main/div[1]/div[2]/div/ul/li[{}]/div[1]/img[1]'
        mainRuneNav = getRuneId(mainRuneNavXpath.format(ver))

        # Nav 서브 룬
        subRuneNavXpath = '//*[@id="content-container"]/main/div[1]/div[2]/div/ul/li[{}]/div[1]/img[3]'
        subRuneNav = getRuneId(subRuneNavXpath.format(ver))
        
        # Nav 룬 승률
        navWinRateXpath = '//*[@id="content-container"]/main/div[1]/div[2]/div/ul/li[{}]/div[2]/span[2]/em'
        navWinRate = getText(navWinRateXpath.format(ver))

        # Nav 룬 픽률
        navPickRateXpath = '//*[@id="content-container"]/main/div[1]/div[2]/div/ul/li[{}]/div[2]/span[1]'
        navPickRate = getText(navPickRateXpath.format(ver))
        
        # Main 룬
        if mainRuneNav == "8000":
            runeCount = 5
        else:
            runeCount = 4

        # mainRune Title
        mainRuneXpath = '//*[@id="content-container"]/main/div[1]/div[2]/div/div/div/div[1]/div[2]/div[{}]/div/div/img'
        mainRuneTitle = checkRune(mainRuneXpath, runeCount)

        count = 4 # 배열이 1부터 시작이라 4. / 반복 횟수는 3번
        # mainRune first
        mainRuneFirstXpath = '//*[@id="content-container"]/main/div[1]/div[2]/div/div/div/div[1]/div[3]/div[{}]/div/div/img'
        mainRuneFirst = checkRune(mainRuneFirstXpath, count)

        # mainRune second
        mainRuneSecondXpath = '//*[@id="content-container"]/main/div[1]/div[2]/div/div/div/div[1]/div[4]/div[{}]/div/div/img'
        mainRuneSecond = checkRune(mainRuneSecondXpath, count)

        # mainRune third
        mainRuneThirdXpath = '//*[@id="content-container"]/main/div[1]/div[2]/div/div/div/div[1]/div[5]/div[{}]/div/div/img'
        mainRuneThird = checkRune(mainRuneThirdXpath, count)

        mainRune = {
            "id": mainRuneTitle,
            "line1": mainRuneFirst,
            "line2": mainRuneSecond,
            "line3": mainRuneThird,
        }

        subRuneList = []

        # subRune A first
        subRuneFirstXpath = '//*[@id="content-container"]/main/div[1]/div[2]/div/div/div/div[3]/div[2]/div[{}]/div/div/img'
        subRuneFirst = checkRune(subRuneFirstXpath, count)
        if subRuneFirst != False:
            subRuneList.append(subRuneFirst)

        # subRune A second
        subRuneSecondXpath = '//*[@id="content-container"]/main/div[1]/div[2]/div/div/div/div[3]/div[3]/div[{}]/div/div/img'
        subRuneSecond = checkRune(subRuneSecondXpath, count)
        if subRuneSecond != False:
            subRuneList.append(subRuneSecond)

        # subRune A third
        subRuneThirdXpath = '//*[@id="content-container"]/main/div[1]/div[2]/div/div/div/div[3]/div[4]/div[{}]/div/div/img'
        subRuneThird = checkRune(subRuneThirdXpath, count)
        if subRuneThird != False:
            subRuneList.append(subRuneThird)

        subRune = {
            "line1": subRuneList[0],
            "line2": subRuneList[1],
        }

        # stats first
        statsFirstXpath = '//*[@id="content-container"]/main/div[1]/div[2]/div/div/div/div[5]/div[1]/div[{}]/img'
        statsFirst = checkRune(statsFirstXpath, count)
        
        # stats second
        statsSecondXpath = '//*[@id="content-container"]/main/div[1]/div[2]/div/div/div/div[5]/div[2]/div[{}]/img'
        statsSecond = checkRune(statsSecondXpath, count)
        
        # stats third
        statsThirdXpath = '//*[@id="content-container"]/main/div[1]/div[2]/div/div/div/div[5]/div[3]/div[{}]/img'
        statsThird = checkRune(statsThirdXpath, count)
        
        stats = {
            "line1": statsFirst,
            "line2": statsSecond,
            "line3": statsThird,
        }

        navRuneData = {
            "mainTitle": mainRuneNav,
            "subTitle": subRuneNav,
            "winRate": navWinRate,
            "pickRate": navPickRate,
            "mainRune": mainRune,
            "subRune": subRune,
            "stats": stats
        }

        return navRuneData
    
    runeVersion1 = getRuneData(1)

    runebtn = driver.find_element(By.XPATH, '//*[@id="content-container"]/main/div[1]/div[2]/div/ul/li[2]')
    driver.execute_script("arguments[0].click();", runebtn)
    time.sleep(3)
    
    runeVersion2 = getRuneData(2)

    runeData = {
        "version1" : runeVersion1,
        "version2" : runeVersion2
    }
    rune = json.dumps(runeData)
    
    # 스펠 1
    spellA1Src = getSrc('//*[@id="content-container"]/aside/div[1]/div[2]/div/div[1]/div[1]/ul/li[1]/div/img')
    spellA2Src = getSrc('//*[@id="content-container"]/aside/div[1]/div[2]/div/div[1]/div[1]/ul/li[2]/div/img')
    spellApickRate = getText('//*[@id="content-container"]/aside/div[1]/div[2]/div/div[1]/div[2]/div[1]/strong')
    spellAwinRate = getText('//*[@id="content-container"]/aside/div[1]/div[2]/div/div[1]/div[2]/div[2]')

    # 스펠 2
    spellB1Src = getSrc('//*[@id="content-container"]/aside/div[1]/div[2]/div/div[2]/div[1]/ul/li[1]/div/img')
    spellB2Src = getSrc('//*[@id="content-container"]/aside/div[1]/div[2]/div/div[2]/div[1]/ul/li[2]/div/img')
    spellBPickRate = getText('//*[@id="content-container"]/aside/div[1]/div[2]/div/div[2]/div[2]/div[1]/strong')
    spellBWinRate = getText('//*[@id="content-container"]/aside/div[1]/div[2]/div/div[2]/div[2]/div[2]')
    
    spellData = {
        "version1": {
            "img1": spellA1Src,
            "img2": spellA2Src,
            "winRate": spellAwinRate,
            "pickRate": spellApickRate,
        },
        "version2": {
            "img1": spellB1Src,
            "img2": spellB2Src,
            "winRate": spellBWinRate,
            "pickRate": spellBPickRate,
        },
    }
    spell = json.dumps(spellData)

    # 시작 아이템 1
    itemA1srcXpath = '//*[@id="content-container"]/main/div[{}]/div[2]/div[1]/div[1]/table/tbody/tr[1]/td[1]/div/div/div[1]/div/img'
    startItemA1Src = getSrc(itemA1srcXpath.format(etc))
    itemA2srcXpath = '//*[@id="content-container"]/main/div[{}]/div[2]/div[1]/div[1]/table/tbody/tr[1]/td[1]/div/div/div[2]/div/img'
    startItemA2Src = getSrc(itemA2srcXpath.format(etc))
    itemAwinRateXpath= '//*[@id="content-container"]/main/div[{}]/div[2]/div[1]/div[1]/table/tbody/tr[1]/td[3]/strong'
    itemAwinRate = getSrc(itemAwinRateXpath.format(etc))
    itemApickRateXpath = '//*[@id="content-container"]/main/div[{}]/div[2]/div[1]/div[1]/table/tbody/tr[1]/td[2]/strong'
    itemApickRate = getSrc(itemApickRateXpath.format(etc))

    
    # 시작 아이템 2
    itemB1srcXpath = '//*[@id="content-container"]/main/div[{}]/div[2]/div[1]/div[1]/table/tbody/tr[2]/td[1]/div/div/div[1]/div/img'
    startItemB1Src = getSrc(itemB1srcXpath.format(etc))
    itemB2srcXpath = '//*[@id="content-container"]/main/div[{}]/div[2]/div[1]/div[1]/table/tbody/tr[2]/td[1]/div/div/div[2]/div/img'
    startItemB2Src = getSrc(itemB2srcXpath.format(etc))
    itemBWinRateXpath = '//*[@id="content-container"]/main/div[{}]/div[2]/div[1]/div[1]/table/tbody/tr[2]/td[3]/strong'
    itemBWinRate = getText(itemBWinRateXpath.format(etc))
    itemBPickRateXpath = '//*[@id="content-container"]/main/div[{}]/div[2]/div[1]/div[1]/table/tbody/tr[2]/td[2]/strong'
    itemBPickRate = getText(itemBPickRateXpath.format(etc))
    
    startItemData = {
        "version1": {
            "img1": startItemA1Src,
            "img2": startItemA2Src,
            "winRate": itemAwinRate,
            "pickRate": itemApickRate,
        },
        "version2": {
            "img1": startItemB1Src,
            "img2": startItemB2Src,
            "winRate": itemBWinRate,
            "pickRate": itemBPickRate,
        },
    }
    startItem = json.dumps(startItemData)

    # 신발 1
    shoesASrcXpath = '//*[@id="content-container"]/main/div[{}]/div[2]/div[1]/div[1]/table/tbody/tr[1]/td[1]/div/div/div[1]/div/img'
    shoesASrc = getSrc(shoesASrcXpath.format(etc))
    shoesAWinRateXpath = '//*[@id="content-container"]/main/div[3]/div[2]/div[1]/div[2]/table/tbody/tr[1]/td[3]/strong'
    shoesAWinRate = getSrc(shoesAWinRateXpath.format(etc))
    shoesAPickRateXpath = '//*[@id="content-container"]/main/div[3]/div[2]/div[1]/div[2]/table/tbody/tr[1]/td[2]/strong'
    shoesAPickRate = getSrc(shoesAPickRateXpath.format(etc))
    
    # 신발 2
    shoesBSrcXpath = '//*[@id="content-container"]/main/div[{}]/div[2]/div[1]/div[1]/table/tbody/tr[1]/td[1]/div/div/div[2]/div/img'
    shoesBSrc = getSrc(shoesBSrcXpath.format(etc))
    shoesBWinRateXpath = '//*[@id="content-container"]/main/div[{}]/div[2]/div[1]/div[2]/table/tbody/tr[2]/td[3]/strong'
    shoesBWinRate = getSrc(shoesBWinRateXpath.format(etc))
    shoesBPickRateXpath = '//*[@id="content-container"]/main/div[{}]/div[2]/div[1]/div[2]/table/tbody/tr[2]/td[2]/strong'
    shoesBPickRate = getSrc(shoesBPickRateXpath.format(etc))

    shoesData = {
        "version1": {
            "img": shoesASrc,
            "winRate": shoesAWinRate,
            "pickRate": shoesAPickRate,
        }, 
        "version2": {
            "img": shoesBSrc,
            "winRate": shoesBWinRate,
            "pickRate": shoesBPickRate,
        }}
    shoes = json.dumps(shoesData)

    # 스킬 마스터 순서
    skillSeqASrc = getSrc('//*[@id="content-container"]/main/div[2]/div[2]/div/div[1]/div/div[1]/div/div[1]/span/img')
    skillAName = getText('//*[@id="content-container"]/main/div[2]/div[2]/div/div[1]/div/div[1]/div/div[1]/span/strong')
    masterA = {"src": skillSeqASrc, "key": skillAName}

    skillSeqBSrc = getSrc('//*[@id="content-container"]/main/div[2]/div[2]/div/div[1]/div/div[1]/div/div[2]/span/img')
    skillBName = getText('//*[@id="content-container"]/main/div[2]/div[2]/div/div[1]/div/div[1]/div/div[2]/span/strong')
    masterB = {"src": skillSeqBSrc, "key": skillBName}

    skillSeqCSrc = getSrc('//*[@id="content-container"]/main/div[2]/div[2]/div/div[1]/div/div[1]/div/div[3]/span/img')
    skillCName = getText('//*[@id="content-container"]/main/div[2]/div[2]/div/div[1]/div/div[1]/div/div[3]/span/strong')
    masterC = {"src": skillSeqCSrc, "key": skillCName}

    masterData = {"masterA": masterA, "masterB": masterB, "masterC": masterC}
    master = json.dumps(masterData)

    # 스킬 찍는 순서
    skillSeqList = []
    for i in range(1, 13):
        Xpath = '//*[@id="content-container"]/main/div[2]/div[2]/div/div[1]/div/div[2]/span[{}]/strong'
        data = Xpath.format(i)
        key = getText(data)
        skillSeqList.append(key)

    skillSeqData = {"skillSeqList": skillSeqList}
    skillSeq = json.dumps(skillSeqData)

    # 아이템 트리
    def getItemData(ver):
        mythicXpath = '//*[@id="content-container"]/main/div[{}]/div[2]/div[2]/div/table/tbody/tr[{}]/td[1]/div/div/div[1]/div/img'
        mythic = getSrc(mythicXpath.format(etc, ver))
        
        legendAXpath = '//*[@id="content-container"]/main/div[{}]/div[2]/div[2]/div/table/tbody/tr[{}]/td[1]/div/div/div[2]/div/img'
        legendA = getSrc(legendAXpath.format(etc, ver))
        
        legendBXpath = '//*[@id="content-container"]/main/div[{}]/div[2]/div[2]/div/table/tbody/tr[{}]/td[1]/div/div/div[3]/div/img'
        legendB = getSrc(legendBXpath.format(etc, ver))
        
        pickRateXpath = '//*[@id="content-container"]/main/div[{}]/div[2]/div[2]/div/table/tbody/tr[{}]/td[2]/strong'
        pickRate = getText(pickRateXpath.format(etc, ver))
        
        winRateXpath = '//*[@id="content-container"]/main/div[{}]/div[2]/div[2]/div/table/tbody/tr[{}]/td[3]/strong'
        winRate = getText(winRateXpath.format(etc, ver))
        
        data = {
            "mythic": mythic,
            "legend1": legendA,
            "legend2": legendB,
            "winRate": winRate,
            "pickRate": pickRate
        }
        
        return data
    
    itemTreeData = {
        "version1": getItemData(1),
        "version2": getItemData(2),
        "version3": getItemData(3),
        "version4": getItemData(4),
    }
    itemTree = json.dumps(itemTreeData)
    
    driver.execute_script("window.open('');")
    driver.switch_to.window(driver.window_handles[1])
    driver.get(url2)
    time.sleep(3)
    
    # 딥롤
    def getLegendItemData(ver):
        itemSrcXpath = '//*[@id="root"]/div/div/div[4]/div[2]/div[2]/div/div[4]/div/div[1]/div[2]/div/div[9]/div/div[{}]/div[1]/div/div/img'
        itemSrc = getSrc(itemSrcXpath.format(ver))
        itemPickXpath = '//*[@id="root"]/div/div/div[4]/div[2]/div[2]/div/div[4]/div/div[1]/div[2]/div/div[9]/div/div[{}]/div[2]/span'
        itemPick = getText(itemPickXpath.format(ver))
    
        data = {
            "src": itemSrc,
            "pickRate": itemPick
        }
        
        return data    

    legendItemData = {
        "version1": getLegendItemData(1),
        "version2": getLegendItemData(2),
        "version3": getLegendItemData(3),
        "version4": getLegendItemData(4),
    }
    legendItem = json.dumps(legendItemData)

    driver.close()
    driver.switch_to.window(driver.window_handles[0])
    time.sleep(3)
    
    # DB 저장
    sqlCheck = "SELECT * FROM {}"
    check = sqlCheck.format(championId)
    
    cur.execute(check)
    
    existing = cur.fetchone()

    updateSql = """
            UPDATE {}
            SET champId=?, champImg=?, champName=?, champSkill=?, rate=?, counter=?, rune=?, spell=?, startItem=?, shoes=?, master=?, skillSeq=?, itemTree=?, legendItem=?
        """
    upSql = updateSql.format(championId)

    insertSql = """
            INSERT INTO {} (
                champId, champImg, champName, champSkill, rate, counter, rune, spell, startItem, shoes, master, skillSeq, itemTree, legendItem
            ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)
        """
    inSql = insertSql.format(championId)

    if existing:
        cur.execute(
            upSql,
            (
                champId,
                champImgSrc,
                champName,
                champSkill,
                champRate,
                counter,
                rune,
                spell,
                startItem,
                shoes,
                master,
                skillSeq,
                itemTree,
                legendItem,
            ),
        )
        print("업데이트 완료")
    else:
        cur.execute(
            inSql,
            (
                champId,
                champImgSrc,
                champName,
                champSkill,
                champRate,
                counter,
                rune,
                spell,
                startItem,
                shoes,
                master,
                skillSeq,
                itemTree,
                legendItem,
            ),
        )
        print("데이터 추가 완료")

detailstatCrawl(championId)

con.commit()

con.close()
