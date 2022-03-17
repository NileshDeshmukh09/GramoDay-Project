
#  GramoDay Project
## SETUP  


To get started and run the app:

 - Clone the project  using command 

 - ``` git clone https://github.com/NileshDeshmukh09/GramoDay-Project.git```

 - Run ``` npm install ``` to install the corresponding node packages
 - Run  ``` npm start ``` to run the app on http://localhost:4000

##### Below are the Result  : -

### Result Images 


Send a Create Report request  : 


POST  - ``` localhost:4000/api/report ```

![Screenshot (78)](https://user-images.githubusercontent.com/86465008/158894858-5c938322-e25b-4636-b1a7-9612c2dfbec5.png)


##### Another Data of create report request is :

POST  - Request 2 :  ``` localhost:4000/api/report ```

![Screenshot (79)](https://user-images.githubusercontent.com/86465008/158895556-467ae9af-a96b-4c23-8f1f-a4dd272f2c34.png)


GET the aggregated Report  

 ####  mean of prices and return the reportID of the generated report below as shown
 
  - Below image are the Result of  calulating mean for the above two Images Reports.
  - Added HTTP request  200 for successive result.

 - GET - ``` localhost:4000/api/report?reportID=1 ```

![Screenshot (81)](https://user-images.githubusercontent.com/86465008/158895915-c47ad5cb-4332-41c8-a0b5-5f468bb89a7d.png)


## Thank you! 

