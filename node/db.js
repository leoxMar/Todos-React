const mongoose = require('mongoose');

module.exports = async () => {
    try{
        const connectionParams = {
            useNewUrlParser : true,
            useUnifiedTopology : true
        }
        await mongoose.connect(
            "mongodb://127.0.0.1/todos-react",
            connectionParams

        )
        console.log('connesso cojone ')
    } catch (error){
        console.log('non ti sei connesso che ti aspettavi',error)

    }
}