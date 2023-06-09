# Machine Learning part of the project
#
### Collection of DataSet
The first of a ml project is to coolect a DataSet. As every one face a problem in doing so, I also unable to get a good and valid dataset. Then I collected different datasets based on parameters required for this project such as rainfall, temperature, area and production as per states and crops, pH of the soil according to crops. Then I analyzed the common columns from all the different datasets and I merged all of them to prepare a dataSet for the project. I clearly mentioned the merging of datasets in the dataset preparation.ipynb file.
# 
### Data Pre-processing
After preparing the dataset, I almost got a clean dataset with no null values. But I used one-hot encoding to encode the categorical data such as states,crops,seasons. Finallly after data pre-processing the total number of columns are 97 with almost 1 lakh rows. The whole process, I mentioned in the notebook. 
#
### Model Building
This is an important step where we need to build a model which is trained on our dataset and can give a prediction when we pass the parameters. Mainly I tried get a best model and made nearly 10 different models using various algorithms like Random Forest, Decision Trees,XG-Boost,etc. Also I performed Randomized Search CV on many models to get the best possible parameters for then model. Then I stackked different models so that to check the improvement of the model by ensembling various models. But I finnaly found Random Forest with Randomized Search CV the best model and chose it for further steps in the project.  
