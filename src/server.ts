import app from './app'
import { AppDataSource } from './data-source'

AppDataSource.initialize().then(async () => {
    console.log('database conected');

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log('Server is Running')
    })
}).catch(err => {
    console.error(err)
})