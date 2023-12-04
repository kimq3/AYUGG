from itertools import product
import json
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

chromeOptions = Options()
chromeOptions.add_experimental_option("detach", True)

driver = webdriver.Chrome(options = chromeOptions)

def TierCrawl(nickname):
  url = 'https://www.op.gg/summoners/kr/'+ nickname +'-KR1'  #읽씹맨-KR1 => 변수
  driver.get(url)

  # last tier(1~3) lastTier
  lastTierXpath = '//*[@id="content-header"]/div[1]/div/div[1]/div[2]/div[1]/div/ul[1]'
  lastTier = driver.find_element(By.XPATH, lastTierXpath).text

  moreButtonXpath = '//*[@id="content-header"]/div[1]/div/div[1]/div[2]/div[1]/div/button'
  moreButton = driver.find_element(By.XPATH, moreButtonXpath).click()

  remainTierXpath = '//*[@id="content-header"]/div[1]/div/div[1]/div[2]/div[1]/div/ul[2]'
  remainTier = driver.find_element(By.XPATH, remainTierXpath).text

  # print(lastTier)
  # print(remainTier)

  with open('crawlingData.json', 'w', encoding='utf-8') as file :
    json.dump(lastTier + '\n' + remainTier, file, ensure_ascii=False, indent="\n")
  

TierCrawl('읽씹맨')