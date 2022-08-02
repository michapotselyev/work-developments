import requests
from bs4 import BeautifulSoup
from csv import writer
import re

with open('text.txt', 'r') as file: 
    URL = file.readlines()

head = {
            "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
             'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0'      
       }
def get_html(url):
    req = requests.get(url, headers= head, params='')
    return req
def get_content(html):
    soup = BeautifulSoup(html, 'html.parser')
    items = soup.find_all('h1', class_ = 'mb-4')
    items1 = soup.find_all('p', class_ = '')
    items2 = [item['data-v-7953876c'] for item in soup.findAll('a', attrs={'href': re.compile("/c/")})]
    if items2:
        mass = [items,items1]
        return mass
    else:
        return False
for i in URL:
    i = i.replace('\n', '')
    html = get_html(i)
    if html.status_code == 200:
        if (get_content(html.text)):
            arr = get_content(html.text)
            with open('CSVFILE.csv', 'a', encoding='utf-8',newline='') as f_object:
                writer_object = writer(f_object)
                writer_object.writerow(get_content(html.text))
                f_object.close()