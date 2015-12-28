# ISMRPortal 

## Development
For running the dev environment you just need install
all the dependencies by `npm`. 

### First time you should run
```
npm install -g bower
npm install -g gulp
npm install
bower install
```

### To provide the static files on your localhost:8888:
```
node start
```

## Error?
If you receive any error, please comment all the `console.log()` at the end of start.js file.

## Add credentials.js
To load the DynamoDb database you must create the file credentials.js in the root folder like:
```
module.exports={
      accessKeyId: 'AkIAJ7MWPPL3YDSJUAXq',
  secretAccessKey: 'SttXcQn6KfeB2SGOom/rTJEeop/76h+JWyFpfIEb'
}
```

### AWS Credentials information:
You can retrive the credentials information in the link bellow:
```
https://console.aws.amazon.com/iam/home?region=us-east-1#users
```

## Database structure

1. Create a table called: Articles 

## To start the server
```
su
./node_modules/forever/bin/forever start -al forever.log -ao out.log -ae err.log start.js
```

### To stop the server
```
./node_modules/forever/bin/forever stop server.js
```

## To remote to the Ubuntu box
```
ssh -i "hospital.pem" ubuntu@54.165.237.141
```

## To access development enviroment
http://ec2-54-165-237-141.compute-1.amazonaws.com/
