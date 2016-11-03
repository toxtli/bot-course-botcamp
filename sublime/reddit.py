import time
import json
import getpass
from selenium import webdriver

results = []
driver = webdriver.Firefox()
driver.get('https://www.reddit.com/')
elements = driver.find_elements_by_css_selector('#siteTable .thing')
for element in elements:
	result = {}
	title = element.find_element_by_css_selector('.title')
	result['name'] = title.text
	score = element.find_element_by_css_selector('.score.unvoted')
	result['score'] = score.text
	results.append(result)
print(json.dumps(results))
raw_input('The end.')
