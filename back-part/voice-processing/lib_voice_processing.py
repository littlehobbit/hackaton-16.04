import speech_recognition
from keras.models import model_from_json
import librosa
import pandas as pd
import numpy as np


def get_emotions():
    audio = 'src/test.wav'
    json_file = open('src/model.json', 'r')
    loaded_model_json = json_file.read()
    json_file.close()
    loaded_model = model_from_json(loaded_model_json)
    # load weights into new model
    loaded_model.load_weights("src/Emotion_Voice_Detection_Model.h5")

    data, sampling_rate = librosa.load(audio)
    X, sample_rate = librosa.load(audio, res_type='kaiser_fast', duration=2.5, sr=22050 * 2, offset=0.5)
    sample_rate = np.array(sample_rate)
    mfccs = np.mean(librosa.feature.mfcc(y=X, sr=sample_rate, n_mfcc=13), axis=0)
    featurelive = mfccs
    livedf2 = featurelive
    livedf2 = pd.DataFrame(data=livedf2)
    livedf2 = livedf2.stack().to_frame().T
    twodim = np.expand_dims(livedf2, axis=2)
    livepreds = loaded_model.predict(twodim, batch_size=32, verbose=1)
    keys = ["female_angry", "female_calm", "female_fearful", "female_happy", "female_sad", "male_angry", "male_calm", "male_fearful", "male_happy", "male_sad"]
    dict = {keys[i]: livepreds[0][i] for i in range(len(livepreds[0]))}
    return max(dict, key=dict.get)


def audio_to_text():
    audio = 'src/test.wav'
    sample_audio = speech_recognition.AudioFile(audio)
    recognizer = speech_recognition.Recognizer()
    with sample_audio as audio_file:
        audio_content = recognizer.record(audio_file)
    return recognizer.recognize_google(audio_content, language="ru_RU")
