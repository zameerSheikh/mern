var mongoose = require('mongoose');

var Friend = require('./models/friend');

mongoose.connect('mongodb+srv://zameer:3kc05ec045@cluster0-zpyvn.mongodb.net/Friends?retryWrites=true&w=majority')
        .then(() => {
            console.log("Connection to mongo atlas successful 😎.");
        })
        .catch(() => {
            console.log("Could not connect to mongo atlas 😔");
        });

const addFriend = async (req, res, next) => {
    const createdFriend = new Friend({
        name: req.body.name
    });

    const result = await createdFriend.save();
    res.redirect('friends');
}

const deleteFriend = async (req, res, next) => {
    let {id} = req.params;
    let friend;
    try{
        friend = Friend.findById(id);
    }catch(e){
        console.log('could not delete friend.');
    }

    try {
        await friend.remove();
        res.redirect('friends');
    } catch (error) {
        console.log('could not delete friend.');
    }
}

const getFriends = async (req, res, next) => {
    const friends = await Friend.find().exec();
    res.render('friends', {friends})
}

module.exports = {
    addFriend,
    deleteFriend,
    getFriends
}

