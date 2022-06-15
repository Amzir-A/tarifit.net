from googlesearch import search
from pathvalidate import sanitize_filepath
import requests, os

url_list = ""

query = input("search: ")
query = "tarifit rif rifain riffijns filetype:pdf"

for url in search(query, num_results=120):
    if not os.path.exists('pdf'):
        os.makedirs('pdf')
    
    if url[-3:] == "pdf":
        url_name = url[8:]
        url_name = sanitize_filepath(url_name[url_name.find("/"):][1:].replace("/", "_"))
        if len(url_name) > 45:
            url_name = url_name[:45]+".pdf"


        if os.path.exists('pdf/'+url_name):
            url_list += "File already exists: \t"
            url_list += url_name + "\t - \t" + url + "\n";

        else:
            url_list += url_name + "\t - \t" + url + "\n";
            print(url)

            r = requests.get(url, allow_redirects=True)

            open("pdf/"+url_name, 'wb').write(r.content)
print(url_list)
with open("pdf/url_list.txt", "w") as file1:
    # Writing data to a file
    file1.write(url_list)
