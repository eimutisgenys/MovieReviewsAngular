//Having serious issues with "require" running on the client side...
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

// Create connection to database
var config = 
   {
     userName: 'RadAdmin',
     password: 'RadProj302',
     server: 'radproj.database.windows.net',
     options: 
        {
           database: 'RADProj'
           , encrypt: true
        }
   }
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) 
   {
     if (err) 
       {
          console.log(err)
       }
    else
       {
           queryDatabase()
       }
   }
 );

function queryDatabase()
   { console.log('Reading rows from the Table...');

       // Read all rows from table
     request = new Request(
         //Any SQL query will run from here...
         //We want to insert reviews for each movie ID
          "SELECT * From MovieReviews",
             function(err, rowCount, rows) 
                {
                    console.log(rowCount + ' row(s) returned');
                    process.exit();
                }
            );
    //Execute the SQL proc
     connection.execSql(request);
   }