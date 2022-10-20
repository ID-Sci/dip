 
from sklearn.metrics import f1_score
from sklearn.metrics import accuracy_score
from keras.applications.vgg16 import VGG16
from os import listdir
from os.path import isfile, isdir, join
from keras.applications.vgg16 import preprocess_input
from PIL import Image
from keras.preprocessing import image
import numpy as np
import random
import h5py
from keras import models
from keras import layers
from keras import optimizers
from keras import regularizers
import keras
from keras.models import Sequential
from keras.layers import Dense, Activation
from keras.models import model_from_json
from keras.models import Model
from tensorflow.keras.utils import to_categorical
from tensorflow.keras.optimizers import SGD
from tqdm import tqdm
from keras.models import Model
from keras.layers import Flatten
from keras import backend as K
import tensorflow as tf
import os
from keras.regularizers import l1
from keras.layers import Dropout
from tensorflow.keras import optimizers

 

import os
import zipfile

local_zip = './dataset.zip'
zip_ref = zipfile.ZipFile(local_zip, 'r')
zip_ref.extractall('.')
zip_ref.close()

#import os
#import zipfile

#local_zip = 'dataset.zip'
#zip_ref = zipfile.ZipFile(local_zip, 'r')
#zip_ref.extractall('.')
#zip_ref.close()

gdrive = 'dataset'
#gdrive = './drive/MyDrive/NSC/specialproblem/plant'
train_folder = gdrive + '/train'
test_folder = gdrive +'/test'
preprocessing_folder = gdrive
model_folder = gdrive
 
model_save_file = model_folder + '/model.json'
weight_save_file = model_folder + "/model.h5"
train_epoch = 20

 
 
 
 
 
#if already h5 preprocessing start here
def readData(path):
    hf = h5py.File(path, 'r')
    data = np.array(hf['dataset_1'].get('matrix'))
    return data

def readAllData(x_path,y_path):
   
    X = readData(x_path)
    y_class = readData(y_path)
    y = to_categorical(y_class)
     

    return X,y,y_class

 
 
 
 
 
json_file = open(model_save_file, 'r')
loaded_model_json = json_file.read()
json_file.close()
loaded_model = model_from_json(loaded_model_json)
# load weights into new model
loaded_model.load_weights(weight_save_file)
loaded_model.compile(optimizer=optimizers.RMSprop(lr=2e-4),
              loss='categorical_crossentropy',
              metrics=['acc'])
from sklearn.metrics import classification_report, confusion_matrix
 
def getCustomModel(train_model):
    
    vgg_model = VGG16(weights='imagenet',
                               include_top=False,
                               input_shape=(224, 224, 3))

    # Creating dictionary that maps layer names to the layers
    layer_dict = dict([(layer.name, layer) for layer in vgg_model.layers])

    # Getting output tensor of the last VGG layer that we want to include
    x = layer_dict['block5_pool'].output
    x = Flatten()(x)
    for layer in train_model.layers:
        x = layer(x)
    custom_model = Model(inputs=vgg_model.input, outputs=x)
    return custom_model

custom_model = getCustomModel(loaded_model)

def folders(input_folder):
    onlyfolders = [ f for f in listdir(input_folder) if isdir(join(input_folder, f))]
    return onlyfolders
train_classes = folders(train_folder)
# Commented out IPython magic to ensure Python compatibility.
 
# uploaded = files.upload()
filename = './dataset/train/anthracnose/anthracnose001.jpg'
img = image.load_img(filename , target_size=(224, 224))
x = image.img_to_array(img)
x = np.expand_dims(x, axis=0)
x = preprocess_input(x)
predict_x=custom_model.predict([x]) 
y_pred=np.argmax(predict_x,axis=1)
print('คุณ upload รูป' , train_classes[y_pred[0]])
 
 