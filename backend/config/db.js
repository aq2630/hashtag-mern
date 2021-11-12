import mongoose from 'mongoose'

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URL, { 
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
      
      } )
      console.log(`Mongo Db is Connected ${conn.connection.host}`)
        
    } catch (error) {
      console.log("Error", error.message)
      process.exit(1)
    }
  }

  export default connectDb;