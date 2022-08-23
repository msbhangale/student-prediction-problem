from flask import Flask, request, jsonify, render_template
import pickle
import numpy as np
import xgboost
import matplotlib.pyplot as plt
import pandas as pd

app = Flask(__name__)

model = pickle.load(open('model_xgb_top_features2.pkl', 'rb'))


@app.route('/', methods=['GET', 'POST'])
def home():
    output = ''
    if request.method == 'POST':
        input_list = []
        g2 = int(request.form['g2']) * 2
        input_list.append(g2)
        g1 = int(request.form['g1']) * 2
        input_list.append(g1)
        absences = int(request.form['absences'])
        input_list.append(absences)
        Dalc = int(request.form['Dalc'])
        input_list.append(Dalc)
        freetime = int(request.form['freetime'])
        input_list.append(freetime)
        health = int(request.form['health'])
        input_list.append(health)
        age = int(request.form['age'])
        input_list.append(age)
        Fedu = int(request.form['Fedu'])
        input_list.append(Fedu)
        traveltime = int(request.form['traveltime'])
        input_list.append(traveltime)
        Medu = int(request.form['Medu'])
        input_list.append(Medu)
        sub = str(request.form['sub']).lower();
        if sub == 'math':
            input_list.append(1)
            input_list.append(0)
        elif sub == 'portuguese':
            input_list.append(0)
            input_list.append(1)
        schoolsup = str(request.form['schoolsup']).lower()
        if schoolsup == 'no':
            input_list.append(1)
            input_list.append(0)
        elif schoolsup == 'yes':
            input_list.append(0)
            input_list.append(1)

        pred = model.predict(np.array(input_list).reshape(1, -2))
        output_list = ['Excellent', 'Failure', 'Good', 'Poor', 'Satisfactory']
        output = output_list[pred[0]]


        new_list = []
        for i in range(0, len(input_list) - 4):
            if i == 0 or i == 1:
                new_list.append(input_list[i] // 2)
            elif i == 6:
                pass
            else:
                new_list.append(input_list[i])

        params = ["1st CGPA","2nd CGPA","absences","Dalc","freetime","health","Fedu","traveltime","Medu"]
        satisfactory = [5, 5, 40, 3, 3, 3, 2, 2, 2]
        good = [7, 7, 20, 2, 4, 4, 3, 2, 3]
        excellent = [9, 9, 10, 1, 5, 5, 4, 1, 4]
        df = pd.DataFrame({
            'Parameters': params,
             'Satisfactory': satisfactory,
             'Good': good,
            'Excellent':excellent,
            'Actual':new_list
            })
        ax=plt.gca()
        df.plot(x='Parameters',y='Satisfactory',ax=ax)
        df.plot(x='Parameters',y='Good',ax=ax)
        df.plot(x='Parameters',y='Excellent',ax=ax)
        df.plot(x='Parameters',y='Actual',ax=ax)
        #plt.show()
        plt.savefig('E:/student prediction problem/student prediction problem/student prediction problem/static/result.png')
    return render_template(['index.html'], output=output)


if __name__ == '__main__':
    app.run(debug=True)
