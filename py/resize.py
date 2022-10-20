from PIL import Image
import os

w = 224
h = 224

print("Resize :> ..")
path = "./dataset"
dir_Outlist = os.listdir(path)
for j in dir_Outlist :
    path_IN = path+'/'+j
    dir_Inlist = os.listdir(path_IN) 
    for k in dir_Inlist :
        folder = path+'/'+j+'/'+k
        for i in os.listdir(folder):
            file = f"{folder}\\{i}"
            im = Image.open(file)
            im = im.resize((w, h), Image.ANTIALIAS)
            im.save(file)
            print('..save >> '+k+'(' +i+')'+' success')
        print()
    print()