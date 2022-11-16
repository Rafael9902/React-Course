import { app } from './config/app';
import { PORT } from './config/config';
import { dbConnection } from './config/database';

//DataBase
dbConnection();

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
