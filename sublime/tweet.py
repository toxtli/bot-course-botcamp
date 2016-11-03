import time
import getpass
from selenium import webdriver

username = raw_input('Username: ')
password = getpass.getpass('Password: ')
message = raw_input('Message: ')
driver = webdriver.Firefox()
driver.get('https://mobile.twitter.com/login')
userField = driver.find_element_by_css_selector('#session\\[username_or_email\\]')
userField.send_keys(username)
passField = driver.find_element_by_css_selector('#session\\[password\\]')
passField.send_keys(password)
passField.submit()
time.sleep(3)
driver.get('https://mobile.twitter.com/compose/tweet')
messagebox = driver.find_element_by_css_selector('textarea')
messagebox.send_keys(message)
button = driver.find_element_by_css_selector('button[data-testid="tweet-button"]')
button.click()
raw_input('The end.')
