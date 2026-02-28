import express from 'express'

import userRouter from './routes/user.routes.js'
import postRouter from './routes/post.routes.js'

import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
const swaggerDocument = YAML.load('./swagger.yaml');


const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())

app.use('/api', userRouter)
app.use('/api', postRouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => console.log(`server started on port ${PORT}`)) 


