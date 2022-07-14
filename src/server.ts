import dotenv from 'dotenv'; 
dotenv.config(); 
import app from './infrastructure/app'; 
 
const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
