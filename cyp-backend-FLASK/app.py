from flask import Flask,request,jsonify
import pickle
import pandas as pd
import numpy as np
from flask_cors import CORS


X_train=['N', 'P', 'K', 'pH', 'rainfall', 'temperature', 'Area_in_hectares',
        'State_Name_andaman_and_nicobar_islands', 'State_Name_andhra_pradesh',
        'State_Name_arunachal_pradesh', 'State_Name_assam', 'State_Name_bihar',
        'State_Name_chandigarh', 'State_Name_chhattisgarh',
        'State_Name_dadra_and_nagar_haveli', 'State_Name_goa',
        'State_Name_gujarat', 'State_Name_haryana',
        'State_Name_himachal_pradesh', 'State_Name_jammu_and_kashmir',
        'State_Name_jharkhand', 'State_Name_karnataka', 'State_Name_kerala',
        'State_Name_madhya_pradesh', 'State_Name_maharashtra',
        'State_Name_manipur', 'State_Name_meghalaya', 'State_Name_mizoram',
        'State_Name_nagaland', 'State_Name_odisha', 'State_Name_puducherry',
        'State_Name_punjab', 'State_Name_rajasthan', 'State_Name_sikkim',
        'State_Name_tamil_nadu', 'State_Name_telangana', 'State_Name_tripura',
        'State_Name_uttar_pradesh', 'State_Name_uttarakhand',
        'State_Name_west_bengal', 'Crop_apple', 'Crop_arecanut',
        'Crop_ashgourd', 'Crop_banana', 'Crop_barley', 'Crop_beetroot',
        'Crop_bittergourd', 'Crop_blackgram', 'Crop_blackpepper',
        'Crop_bottlegourd', 'Crop_brinjal', 'Crop_cabbage', 'Crop_cardamom',
        'Crop_carrot', 'Crop_cashewnuts', 'Crop_cauliflower', 'Crop_coffee',
        'Crop_coriander', 'Crop_cotton', 'Crop_cucumber', 'Crop_drumstick',
        'Crop_garlic', 'Crop_ginger', 'Crop_grapes', 'Crop_horsegram',
        'Crop_jackfruit', 'Crop_jowar', 'Crop_jute', 'Crop_ladyfinger',
        'Crop_maize', 'Crop_mango', 'Crop_moong', 'Crop_onion', 'Crop_orange',
        'Crop_papaya', 'Crop_pineapple', 'Crop_pomegranate', 'Crop_potato',
        'Crop_pumpkin', 'Crop_radish', 'Crop_ragi', 'Crop_rapeseed',
        'Crop_rice', 'Crop_ridgegourd', 'Crop_sesamum', 'Crop_soyabean',
        'Crop_sunflower', 'Crop_sweetpotato', 'Crop_tapioca', 'Crop_tomato',
        'Crop_turmeric', 'Crop_watermelon', 'Crop_wheat', 'Crop_Type_kharif',
        'Crop_Type_rabi', 'Crop_Type_summer', 'Crop_Type_whole year']

rf_cv=pickle.load(open("RandomForest_CV_model.pkl",'rb'))

def initialize(state,crop,season,area,n,p,k,ph,rain,temp):
    input_data={
        'State_Name_':state.lower().replace(" ","_"),
        'Crop_':crop.lower(),
        'Crop_Type_':season.lower(),
        'N':float(n),
        'P':float(p),
        'K':float(k),
        'pH':float(ph),
        'rainfall':float(rain),
        'temperature':float(temp),
        'Area_in_hectares':float(area)
    }
    return input_data


app=Flask(__name__)
CORS(app)


@app.route("/",methods=['GET','POST'])
def predict():
    if(request.method=='POST'):
        data = request.get_json()
        temp_df=pd.DataFrame(columns=X_train)
        temp_df.loc[0]=[0]*len(temp_df.columns)
        df_values=initialize(data['State'],data['Crop'],data['Season'],data['Area'],data['N'],data['P'],data['K'],data['pH'],data['Rainfall'],data['Temperature'])
        for key,value in df_values.items():
            col_name=key
            if(type(value)==str):
                col_name+=value
                temp_df.at[0,col_name]=1
                continue
            temp_df.at[0,col_name]=value
        prediction=rf_cv.predict(temp_df)
        response = {'prediction': prediction.tolist()}
        return jsonify(response)


if __name__=="__main__":
    app.run(port=8080)