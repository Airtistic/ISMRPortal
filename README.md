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
