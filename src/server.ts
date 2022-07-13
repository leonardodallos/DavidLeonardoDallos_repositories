import dotenv from 'dotenv'; 
import app from './infrastructure/app'; 
 
dotenv.config(); 
const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
