const mongoose = require('mongoose');
const tasks = require('./models/schema.js');

mongoose.connect('mongodb://localhost/testing',{ useNewUrlParser: true ,useUnifiedTopology: true});
mongoose.connection.once('open', function(){
    console.log('Connection  made , server running successfully');
}).on('error', function(error){
    console.log('error raised :', error);
});

function adding(datav,task){
    var data=new tasks({
        Description: datav,
        Completed: task
    });
    data.save().then(()=>{
        console.log("data is added");
    }).catch((err)=> console.log(err))

}

function reading(){
    tasks.find({Completed: false})
    .then((result)=>{
        
        if(result.length!==0)
        {
            result.forEach((value)=>{
                console.log(value);
            })
        }
        else{
            console.log("All tasks finished");
        }
    }).catch((err)=> console.log(err));
}

function Updating(){
    tasks.updateMany({Completed:false},{Completed:true})
    .then((result)=>{
        
        if(result.length!==0){
            console.log("all data is updated");
        }
})

    .catch((err)=> console.log(err))
}

function deleting(data){
    tasks.findOne({Description:data})
    .then((result)=> {

        if(result!==null){
            tasks.deleteOne({_id:result._id})
            .then((res)=> {
                
                if(res.length!==0){
                    console.log('task is deleted');
                }
                else{
                    console.log("error, no task to delete")
                }
            })
        }
        else{
            console.log("error raised");
        }
        
    
    })
    .catch((err)=> console.log(err));
}

    adding('i done it',true);
    adding('its full stack development',false);
    adding('ICarly is nice web series',true);
    adding('its funny',true);
    adding('iam big fan MSdhoni',false);
    adding('moves',false);
    reading();
    Updating();
    deleting("its funny");