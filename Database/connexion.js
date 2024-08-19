const mongoose = require('mongoose');
const db_connection = async () => {
    await mongoose.connect(process.env.DBURL)
}
module.exports = db_connection;