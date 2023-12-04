from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

chromeOptions = Options()
chromeOptions.add_experimental_option("detach", True) 

driver = webdriver.Chrome(options = chromeOptions)

driver.get('https://www.op.gg/summoners/kr/읽씹맨-KR1')  #읽씹맨-KR1 => 변수

def TierCrawl(championRank):
    # 챔피언 이름
    championNameXpath = '//*[@id="content-header"]/div[1]/div/div[1]/div[2]/div[1]/div/ul[1]/li[변수]/div'
    championNameTag = championNameXpath.format(championRank)
    championName = driver.find_element(By.XPATH, championNameTag).text
