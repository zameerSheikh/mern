const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://zameer:3kc05ec045@cluster0-zpyvn.mongodb.net/Friends?retryWrites=true&w=majority'

const addFriend = async (req, res, next) => {
    let {name} = req.body;
    const client = new MongoClient(url);

    try {
       await client.connect();
       const db = client.db();
       const result = db.collection('friends_list').insertOne({name});
    } catch (error) {
        return res.json({message: 'Could not add your friend 😟'})
    }
    client.close();

    res.redirect('friends')
};

const deleteFriend = async (req, res, next) => {
    let id = req.params.id;
    const client = new MongoClient(url);

    try {
       await client.connect();
       const db = client.db();
       const result = db.collection('friends_list').deleteOne({id});
    } catch (error) {
        return res.json({message: 'Could not delete your friend 😟'})
    }
    client.close();

    res.redirect('friends')
}

const getFriends = async (req, res, next) => {
    const client = new MongoClient(url);
    let friendsList;
    try {
        await client.connect();
        const db = client.db();
        friendsList = await db.collection('friends_list').find().toArray();
        
    } catch (error) {
        console.log('Could not fetch your friends list. 😔');
        res.render('friends', {friends: []})
    }
    client.close();

    // res.json(friendsList || [])
    res.render('friends', {friends: friendsList})
}

module.exports = {
    addFriend,
    getFriends,
    deleteFriend
}