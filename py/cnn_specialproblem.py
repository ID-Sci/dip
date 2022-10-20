 
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
x_train_path = preprocessing_folder + '/x_train.h5'
y_train_path = preprocessing_folder + '/y_train.h5'
x_test_path = preprocessing_folder + '/x_test.h5'
y_test_path = preprocessing_folder + '/y_test.h5'
model_save_file = model_folder + '/model.json'
weight_save_file = model_folder + "/model.h5"
train_epoch = 20

img_feature_extraction= VGG16(weights='imagenet', include_top=False)

print(img_feature_extraction.summary())

def files_in_folder(input_folder):
    l = []
    onlyfiles = [ f for f in listdir(input_folder) if isfile(join(input_folder, f))]
    for f in onlyfiles:
        file_path = input_folder + "/"+ f
        l.append(file_path)
    
    return l

def folders(input_folder):
    onlyfolders = [ f for f in listdir(input_folder) if isdir(join(input_folder, f))]
    return onlyfolders

def get_image_feature(img_path):
    img = image.load_img(img_path, target_size=(224, 224))
    img_data = image.img_to_array(img)
    img_data = np.expand_dims(img_data, axis=0)
    img_data = preprocess_input(img_data)
    vgg16_feature = img_feature_extraction.predict(img_data).flatten()
    return vgg16_feature

train_classes = folders(train_folder)
class_dict = {}
n = 0
for c in train_classes:
    class_dict[c] = n
    n = n + 1

def get_dataset(train_path):
    train_classes = folders(train_path)
    dataset = {}
    for c in train_classes:
        c_path = train_path + "/"+ c
        files = files_in_folder(c_path)
        for f in files:
            dataset[f] = class_dict[c]
    return dataset

def extract_data(path):
    X_list = []
    y_list = []
    dataset = get_dataset(path)
    keys =  list(dataset.keys())
    random.seed(10)
    random.shuffle(keys)
    input_size = len(keys)
    ind = 0
    for img_path in tqdm(keys):
        y = dataset[img_path]
        image_feature= get_image_feature(img_path)
        X_list.append(image_feature)
        y_list.append(y)
        ind = ind + 1
    return np.array(X_list), np.array(y_list)

X_train, y_train = extract_data(train_folder)

X_test, y_test = extract_data(test_folder)

with h5py.File(x_train_path,'w') as f:
    group = f.create_group('dataset_1')
    group.create_dataset(name='matrix', data=X_train , chunks=True, compression='gzip')

with h5py.File(y_train_path,'w') as f:
    group = f.create_group('dataset_1')
    group.create_dataset(name='matrix', data=y_train , chunks=True, compression='gzip')

with h5py.File(x_test_path,'w') as f:
    group = f.create_group('dataset_1')
    group.create_dataset(name='matrix', data=X_test , chunks=True, compression='gzip')

with h5py.File(y_test_path,'w') as f:
    group = f.create_group('dataset_1')
    group.create_dataset(name='matrix', data=y_test , chunks=True, compression='gzip')

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

X_train, y_train,y_train_class =  readAllData(x_train_path, y_train_path)
X_test, y_test,y_test_class =  readAllData(x_test_path, y_test_path)
numclasses = y_train.shape[1]

#overfit เมื่อไม่มี regularization
from keras.regularizers import l1
from keras.layers import Dropout
from tensorflow.keras import optimizers
nb_train_samples = 2000
nb_validation_samples = 800
epochs = 20
batch_size = 16
sgd = SGD(lr=1e-4, momentum=0.9)
image_size = X_train.shape[1]

model = Sequential()
model.add(Dense(256, input_dim=image_size, activation='relu'))
model.add(Dense(256, activation='relu'))
model.add(Dense(numclasses, activation='softmax', kernel_initializer=keras.initializers.glorot_normal(seed=None)))
model.compile(optimizer=sgd,
              loss='categorical_crossentropy',
              metrics=['acc'])

history =model.fit(X_train, y_train,  epochs=epochs, validation_data=(X_test, y_test ))

def save_model(model,model_save_file,weight_save_file):
  # serialize model to JSON
  model_json = model.to_json()
  with open(model_save_file, "w") as json_file:
      json_file.write(model_json)
  # serialize weights to HDF5
  model.save_weights(weight_save_file)
  print("Saved model to disk")

# serialize model to JSON
model_json = model.to_json()
with open(model_save_file, "w") as json_file:
    json_file.write(model_json)
# serialize weights to HDF5
model.save_weights(weight_save_file)
print("Saved model to disk")
 
# later...
 
# load json and create model
json_file = open(model_save_file, 'r')
loaded_model_json = json_file.read()
json_file.close()
loaded_model = model_from_json(loaded_model_json)
# load weights into new model
loaded_model.load_weights(weight_save_file)
print("Loaded model from disk")

loaded_model.compile(optimizer=optimizers.RMSprop(lr=2e-4),
              loss='categorical_crossentropy',
              metrics=['acc'])

json_file = open(model_save_file, 'r')
loaded_model_json = json_file.read()
json_file.close()
loaded_model = model_from_json(loaded_model_json)
# load weights into new model
loaded_model.load_weights(weight_save_file)
print("Loaded model from disk")

loaded_model.compile(optimizer=optimizers.RMSprop(lr=2e-4),
              loss='categorical_crossentropy',
              metrics=['acc'])

score = loaded_model.evaluate(X_test, y_test, verbose=0)
print("%s: %.2f%%" % (loaded_model.metrics_names[1], score[1]*100))

predict_x=loaded_model.predict(X_test) 
y_pred=np.argmax(predict_x,axis=1)

print('convolution deep accuracy = ',accuracy_score(y_test_class, y_pred))
print('convolution deep fscore = ',f1_score(y_test_class, y_pred, average='macro'))

from sklearn.metrics import classification_report, confusion_matrix
print(confusion_matrix(y_test_class, y_pred))

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

save_model(custom_model,"model.json","model.h5")

 
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
# %matplotlib inline
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
img = mpimg.imread(filename)
imgplot = plt.imshow(img)


# uploaded.keys()

print(img)

tf.__version__



