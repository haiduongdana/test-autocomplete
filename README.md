# FIRSTLY, LAUNCH THE SEVER

In sever directory can run the following command to install all dependencies :
### npm install
Then run the following command to launch the json server :

### json-server Booklist.json

The json server will run on the default port of 3000
If you want to change it, add the following ' --port $port' to the above command
Where '$port' is the port you want the server to start on



# THEN MOVE TO FRONTEND DIRECTORY

run the following command to install all dependencies:

### npm install

If you change the port of the json sever
Please check the .env file in the frontend folder and make sure REACT_APP_API_DOMAIN field is the json server's path


then run the following command to run app 


### npm start 

Default app will start on the url [http://localhost:3001]

The app runs on port 3001, if you want to change it, change the PORT field in the .env file

