
# MongoLS

A JavaScript implementation of the mongo query api for plain objects and HTML5 localStorage.

There are two main use cases that MongoLS targets:
- providing a mongo interface to localStorage in HTML5 web browsers
- for use as an in memory mongo database that can be used in the browser or nodejs

[![Build Status](https://travis-ci.org/belteshazzar/MongoLS.svg?branch=master)](https://travis-ci.org/belteshazzar/MongoLS) [![Coverage Status](https://coveralls.io/repos/github/belteshazzar/MongoLS/badge.svg?branch=master)](https://coveralls.io/github/belteshazzar/MongoLS?branch=master)

## In Node.js

### Installation

  `npm install mongols`

### Usage

    var mongols = require('mongols');
    var db = new mongo.DB()
    db.createCollection("sample")
    db.sample.insert({ age: 4,	legs: 0	});
    db.sample.insert([{ age: 4,	legs: 5	},{ age: 54, legs: 2	}]);
    db.sample.insertMany([{ age: 54, legs: 12 },{ age: 16					 }]);
    db.sample.insertOne({ name: "steve"		 });
    var cur = db.sample.find({ $and: [{ age : 54},{ legs: 2 }] })
    cur.next()

### Tests

  `npm test`

## In the Browser

For an example of MongoLS in the browser check out: http://belteshazzar.github.io/MongoLS/index.html

### Usage

Download from here: https://raw.githubusercontent.com/belteshazzar/MongoLS/master/mongols.js

Include in your web page:

    <script src="mongols.js"></script>
    
Query localStorage or other collections (note that in the browser the localStorage collection is automatically created and because it is backed by HTML5 localStorage it will persist across multiple sessions):

    <script>
       var db = new MongoLS.DB()
       db.localStorage.insert({ age: 4,	legs: 0	});
       var cur = db.localStorage.find();
       alert(JSON.stringify(cur.toArray()));
    </script>

# API Status

The following table summarises the API implementation status.

## Database Methods

| Name                         | Implemented     |
|------------------------------|-----------------|
| db.cloneCollection           | no              |
| db.cloneDatabase             | no              |
| db.commandHelp               | no              |
| db.copyDatabase              | no              |
| db.createCollection          | Yes             |
| db.currentOp                 | N/A             |
| db.dropDatabase              | Yes             |
| db.eval                      | N/A             |
| db.fsyncLock                 | N/A             |
| db.fsyncUnlock               | N/A             |
| db.getCollection             | no              |
| db.getCollectionInfos        | no              |
| db.getCollectionNames        | Yes             |
| db.getLastError              | no              |
| db.getLastErrorObj           | no              |
| db.getLogComponents          | N/A             |
| db.getMongo                  | N/A             |
| db.getName                   | no              |
| db.getPrevError              | no              |
| db.getProfilingLevel         | N/A             |
| db.getProfilingStatus        | N/A             |
| db.getReplicationInfo        | N/A             |
| db.getSiblingDB              | N/A             |
| db.help                      | Yes             |
| db.hostInfo                  | N/A             |
| db.isMaster                  | N/A             |
| db.killOp                    | N/A             |
| db.listCommands              | N/A             |
| db.loadServerScripts         | N/A             |
| db.printCollectionStats      | N/A             |
| db.printReplicationInfo      | N/A             |
| db.printShardingStatus       | N/A             |
| db.printSlaveReplicationInfo | N/A             |
| db.repairDatabase            | N/A             |
| db.resetError                | N/A             |
| db.runCommand                | N/A             |
| db.serverBuildInfo           | N/A             |
| db.serverCmdLineOpts         | N/A             |
| db.serverStatus              | N/A             |
| db.setLogLevel               | N/A             |
| db.setProfilingLevel         | N/A             |
| db.shutdownServer            | N/A             |
| db.stats                     | no              |
| db.version                   | no              |
| db.upgradeCheck              | N/A             |

## Collection Methods

| Name                               | Implemented |
|------------------------------------|-------------|
| db.collection.aggregate            | no          | 
| db.collection.bulkWrite            | no          | 
| db.collection.count                | yes         |
| db.collection.copyTo               | yes         |
| db.collection.createIndex          | no          | 
| db.collection.dataSize             | no          | 
| db.collection.deleteOne            | yes         |
| db.collection.deleteMany           | yes         |
| db.collection.distinct             | yes         |
| db.collection.drop                 | yes         |
| db.collection.dropIndex            | no          | 
| db.collection.dropIndexes          | no          | 
| db.collection.ensureIndex          | no          | 
| db.collection.explain              | no          | 
| db.collection.find                 | yes         |
| db.collection.findAndModify        | no          | 
| db.collection.findOne              | yes         |
| db.collection.findOneAndDelete     | yes         |
| db.collection.findOneAndReplace    | yes         |
| db.collection.findOneAndUpdate     | yes         |
| db.collection.getIndexes           | no          |  
| db.collection.getShardDistribution | N/A         | 
| db.collection.getShardVersion      | N/A         | 
| db.collection.group                | no          | 
| db.collection.insert               | yes         |
| db.collection.insertOne            | yes         |
| db.collection.insertMany           | yes         |
| db.collection.isCapped             | no          | 
| db.collection.mapReduce            | no          | 
| db.collection.reIndex              | no          | 
| db.collection.replaceOne           | yes         |
| db.collection.remove               | yes         |
| db.collection.renameCollection     | no          | 
| db.collection.save                 | no          | 
| db.collection.stats                | no          | 
| db.collection.storageSize          | no          | 
| db.collection.totalSize            | no          | 
| db.collection.totalIndexSize       | no          | 
| db.collection.update               | yes         |
| db.collection.updateOne            | yes         |
| db.collection.updateMany           | yes         |
| db.collection.validate             | no          |

## Cursor Methods

| Name                    | Implemented     |
|-------------------------|-----------------|
| cursor.batchSize        | N/A             |
| cursor.close            | N/A             |
| cursor.comment          | no              |
| cursor.count            | yes             |
| cursor.explain          | N/A             |
| cursor.forEach          | yes             |
| cursor.hasNext          | yes             |
| cursor.hint             | N/A             |
| cursor.itcount          | no              |
| cursor.limit            | yes             |
| cursor.map              | yes             |
| cursor.maxScan          | N/A             |
| cursor.maxTimeMS        | N/A             |
| cursor.max              | no              |
| cursor.min              | no              |
| cursor.next             | yes             |
| cursor.noCursorTimeout  | N/A             |
| cursor.objsLeftInBatch  | N/A             |
| cursor.pretty           | no              |
| cursor.readConcern      | N/A             |
| cursor.readPref         | N/A             |
| cursor.returnKey        | N/A             |
| cursor.showRecordId     | N/A             |
| cursor.size             | no              |
| cursor.skip             | yes             |
| cursor.snapshot         | no              |
| cursor.sort             | yes             |
| cursor.tailable         | no              |
| cursor.toArray          | yes             |
| cursor.next()           | yes             |

