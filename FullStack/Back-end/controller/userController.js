const User = require('../model/user')

exports.saveData = async (req,res,next) => {
    try {
        const reqData = await User.create( {
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone
        });
        res.status(201).json({newDetail:reqData});
    } catch (err) {
        console.log('Error saving data',err)
        res.status(500).json({message:'Error saving data into the database'});
    }
}

exports.getSavedData = async (req,res,next) => {
    try {
        const data = await User.findAll();
        res.status(201).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error saving data into the database'});
        
    }
}

exports.deleteSavedData = async (req,res,next) => {
    try {
        const id = req.params.id;
        await User.destroy({where:{id:id}})
        res.status(201).json({message:'Deleted data from database'});

    } catch (error) {
        console.log(error);
    }
}