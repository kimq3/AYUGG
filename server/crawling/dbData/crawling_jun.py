from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import sqlite3

chromeOptions = Options()
chromeOptions.add_experimental_option("detach", True) # 자동꺼짐 방지

driver = webdriver.Chrome(options = chromeOptions)

url = 'https://www.op.gg/champions?region=global&tier=emerald&patch=13.23&position=support'
driver.get(url)

con = sqlite3.connect('./champions.db')
cur = con.cursor()
cur.execute('''CREATE TABLE IF NOT EXISTS champions(
                    rank TEXT,
                    champion TEXT,
                    champtier TEXT,
                    win TEXT,
                    pick TEXT,
                    banned TEXT,
                    counterA longtext,
                    counterB longtext,
                    counterC longtext,
                    tier TEXT,
                    version TEXT,
                    line TEXT)
''')

# 바꿔야할 것.
#  1. url
#  2. last_num
#  3. line (top, jug, mid, adc, sup)

last_num = 43

def championStatCrawl(championRank):
    # 라인
    line = 'sup'

    # 유저 티어
    tierXpath = '//*[@id="content-container"]/div[1]/nav[1]/div[4]/div/button/span'
    tier = driver.find_element(By.XPATH, tierXpath).text

    # 버전
    versionXpath = '//*[@id="content-container"]/div[1]/nav[1]/div[6]/div/button/span'
    versionSplit = driver.find_element(By.XPATH, versionXpath).text.split()
    version = versionSplit[1]


    # 챔피언 이름
    championNameXpath = '//*[@id="content-container"]/div[2]/main/div/table/tbody/tr[{}]/td[2]'
    championNameTag = championNameXpath.format(championRank)
    championName = driver.find_element(By.XPATH, championNameTag).text

    # 챔피언 티어
    champtierXpath = '//*[@id="content-container"]/div[2]/main/div/table/tbody/tr[{}]/td[3]'
    champtierTag = champtierXpath.format(championRank)
    champtier = driver.find_element(By.XPATH, champtierTag).text

    # 승률
    winRateXpath = '//*[@id="content-container"]/div[2]/main/div/table/tbody/tr[{}]/td[4]'
    winRateTag = winRateXpath.format(championRank)
    winRate = driver.find_element(By.XPATH, winRateTag).text

    # 픽률
    pickRateXpath = '//*[@id="content-container"]/div[2]/main/div/table/tbody/tr[{}]/td[5]'
    pickRateTag = pickRateXpath.format(championRank)
    pickRate = driver.find_element(By.XPATH, pickRateTag).text

    # 밴률
    banRateXpath = '//*[@id="content-container"]/div[2]/main/div/table/tbody/tr[{}]/td[6]'
    banRateTag = banRateXpath.format(championRank)
    banRate = driver.find_element(By.XPATH, banRateTag).text

    # 카운터1
    counterAXpath = '//*[@id="content-container"]/div[2]/main/div/table/tbody/tr[{}]/td[7]/a[1]/div/img'
    counterATag = counterAXpath.format(championRank)
    counterA = driver.find_element(By.XPATH, counterATag)
    counterASrc = counterA.get_attribute("src")
    
    # 카운터2
    counterBXpath = '//*[@id="content-container"]/div[2]/main/div/table/tbody/tr[{}]/td[7]/a[2]/div/img'
    counterBTag = counterBXpath.format(championRank)
    counterB = driver.find_element(By.XPATH, counterBTag)
    counterBSrc = counterB.get_attribute("src")

    # 카운터3
    counterCXpath = '//*[@id="content-container"]/div[2]/main/div/table/tbody/tr[{}]/td[7]/a[3]/div/img'
    counterCTag = counterCXpath.format(championRank)
    counterC = driver.find_element(By.XPATH, counterCTag)
    counterCSrc = counterC.get_attribute("src")

    cur.execute('SELECT * FROM champions WHERE champion=? AND version=? AND tier=? AND line=?', (championName, version, tier, line))
    existing = cur.fetchone()

    if existing:
        cur.execute('''
            UPDATE champions
            SET rank=?, champion=?, champtier=?, win=?, pick=?, banned=?, counterA=?, counterB=?, counterC=?, tier=?, version=?, line=?
            WHERE champion=? AND tier=? AND version=? AND line=?
        ''', (championRank, championName, champtier, winRate, pickRate, banRate, counterASrc, counterBSrc, counterCSrc, tier, version, line, championName, tier, version, line))
        print('업데이트 완료')
    else:
        cur.execute('''
            INSERT INTO champions(
                rank, champion, champtier, win, pick, banned, counterA, counterB, counterC, tier, version, line
            ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)
        ''', (championRank, championName, champtier, winRate, pickRate, banRate, counterASrc, counterBSrc, counterCSrc, tier, version, line))
        print('데이터 추가 완료')


for i in range(1,last_num):
    championStatCrawl(i)

con.commit()

con.close()

# 현재 에메랄드 전 라인 13.23 버전 완료