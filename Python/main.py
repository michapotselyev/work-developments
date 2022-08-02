import requests
from csv import writer

def main(url):
    res = requests.get("https://opendatabot.ua/l/" + url)
    arr = res.text.split(">")
    buf = 0
    for i in arr:
        if i.startswith('window.__INITIAL_STATE__=') :
            buf = arr.index(i)
    grr = arr[buf]
    try:
        far = grr.split('</script')[0].split('\'')[1].split(",")
        buf = 0
        jag = 0
        gajj = 0
        for i in far:
            if i.startswith('"fullName":'):
                buf = far.index(i)
            if i.startswith('"landId":'):
                jag = far.index(i)
            if i.startswith('"rentCompany":{"code"'):
                gajj = far.index(i)
        grr = far[buf]
        grr = grr.replace('"fullName":"', '').replace('\\', '').replace('""}', '').replace('"', '')
        grr2 = far[jag]
        grr2 = grr2.replace('"landId":"', '').replace('"', '')
        grr3 = far[gajj] 
        grr3 = grr3.replace('"rentCompany":{"code":', '')
        list_data = [grr2,grr3,grr]
        with open('CSVFILE.csv', 'a', newline='') as f_object:  
            writer_object = writer(f_object)
            writer_object.writerow(list_data)
            f_object.close()
    except:
        print('banan: ' + url)

    
    

if __name__ == '__main__':
    with open('text.txt', 'r') as file: 
        arr = file.readlines()
    for i in arr:
        i.replace('\n', '')
        main(i)


# -------------      -------------       --------------            |            |            |            |--------------           --
# |           |            |             |            |            |            |            |            |                        |  |
# |           |            |             |            |            |            |            |            |                       |    |
# |           |            |             |            |            |            |            |            |                      |      |
# |           |            |             |            |            |            |            |            |--------------       |        |
# |           |            |             |            |            |            |            |            |                    |          |
# |           |            |             |            |            |            |            |            |                   |            |
# -------------            |             --------------            ----------------------------           |--------------    |              | 

# Н А   5   М И Н У Т                                               П О Ч Т И    С Д Е Л А Л