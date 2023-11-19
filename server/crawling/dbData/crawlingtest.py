'''
리뷰를 받기 위한 파일, 작동 안됨
동작은 현재 pycharm에서 프로젝트 개설 후 venv 환경에서 진행중
db 내 테이블은 계속해서 생성 예정 현재 test 진행중
'''

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import sqlite3

chromeOptions = Options()
chromeOptions.add_experimental_option("detach", True) # 자동꺼짐 방지

driver = webdriver.Chrome(options = chromeOptions)

url = 'https://www.op.gg/statistics/champions?region=kr&tier=platinum&position=top'
driver.get(url)

con = sqlite3.connect('./test.db')
cur = con.cursor()
cur.execute('''CREATE TABLE IF NOT EXISTS plattop(
                    rank TEXT,
                    champion TEXT,
                    gameplay TEXT,
                    rate TEXT,
                    win TEXT,
                    picks TEXT,
                    banned TEXT,
                    cs TEXT,
                    gold TEXT)
''')


def championStatCrawl(championRank):
    # 챔피언 이름
    championNameXpath = '//*[@id="content-container"]/div[2]/table/tbody/tr[{}]/td[2]'
    championNameTag = championNameXpath.format(championRank)
    championName = driver.find_element(By.XPATH, championNameTag).text

    # 플레이 수
    championPlayXpath = '//*[@id="content-container"]/div[2]/table/tbody/tr[{}]/td[3]'
    championPlayTag = championPlayXpath.format(championRank)
    championPlay = driver.find_element(By.XPATH, championPlayTag).text

    # 평점
    rateXpath = '//*[@id="content-container"]/div[2]/table/tbody/tr[{}]/td[4]/span'
    rateTag = rateXpath.format(championRank)
    rate = driver.find_element(By.XPATH, rateTag).text

    # 승률
    winRateXpath = '//*[@id="content-container"]/div[2]/table/tbody/tr[{}]/td[5]/div/div[2]'
    winRateTag = winRateXpath.format(championRank)
    winRate = driver.find_element(By.XPATH, winRateTag).text

    # 픽률
    pickRateXpath = '//*[@id="content-container"]/div[2]/table/tbody/tr[{}]/td[6]/div/div[2]'
    pickRateTag = pickRateXpath.format(championRank)
    pickRate = driver.find_element(By.XPATH, pickRateTag).text

    # 밴률
    banRateXpath = '//*[@id="content-container"]/div[2]/table/tbody/tr[{}]/td[7]'
    banRateTag = banRateXpath.format(championRank)
    banRate = driver.find_element(By.XPATH, banRateTag).text

    # cs
    csXpath = '//*[@id="content-container"]/div[2]/table/tbody/tr[{}]/td[8]'
    csTag = csXpath.format(championRank)
    cs = driver.find_element(By.XPATH, csTag).text

    # 골드
    goldXpath = '//*[@id="content-container"]/div[2]/table/tbody/tr[{}]/td[9]'
    goldTag = goldXpath.format(championRank)
    gold = driver.find_element(By.XPATH, goldTag).text

    cur.execute('SELECT * FROM plattop WHERE champion=?', (championName,))
    existing = cur.fetchone()

    if existing:
        cur.execute('''
            UPDATE plattop
            SET rank=?, champion=?, gameplay=?, rate=?, win=?, picks=?, banned=?, cs=?, gold=?
        ''', (championRank, championName, championPlay, rate, winRate, pickRate, banRate, cs, gold))
        print('업데이트 완료')
    else:
        cur.execute('''
            INSERT INTO plattop(
                rank, champion, gameplay, rate, win, picks, banned, cs, gold
            ) VALUES (?,?,?,?,?,?,?,?,?)
        ''', (championRank, championName, championPlay, rate, winRate, pickRate, banRate, cs, gold))
        print('데이터 추가 완료')




for i in range(1,165):
    championStatCrawl(i)

con.commit()

#cur.execute("SELECT * FROM plattotal;")
#print(cur.fetchall())

con.close()

