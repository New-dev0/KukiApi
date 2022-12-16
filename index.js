const express = require('express') // Import NPM Package
const app = express();
const bot = require("./Kuki.js");
const cors = require('cors')
const NodeCache = require('node-cache')
const fetch = require('node-fetch')
const { default: axios } = require('axios');

const port = process.env.PORT || 5000
const cache = new NodeCache({ stdTTL: 5 }) // time format is seconds

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/?message=:reply', async function(request, response) {
	const reply = request.params.reply;  
	bot(reply).then(bot_response => {
		response.status(200)
		response.header("Content-Type",'application/json')
		response.end(JSON.stringify({reply : bot_response.replace('Gumnaam', `kuki`).replace('Sarah', `kuki`).replace('Chris', `kuki`).replace('CASTIEL', `kuki`).replace('clever', `kuki`).replace('Alex', `kuki`).replace('Edwin', `kuki`).replace('David', `kuki`).replace('Jeff', `kuki`).replace('Anh', `kuki`).replace('Adam', `kuki`).replace('deanna', `kuki`).replace('Owen', `kuki`).replace('Tanya', `kuki`).replace('My mother and Father', `MoeZilla`).replace('My mother and my father made me.', `@PranavAjay Made Me.`).replace('cleverbot.com', `github.com/moezilla`).replace('My parents.', `MoeZilla`).replace('cleverbot', `MoeZilla`).replace('Cleverbot',  `MoeZilla`)}))
 
        }) 
})

app.get("/ping", (req, res) => {
    res.status(200).json({
        "success": true
    });
});


app.listen( port, () => {
    console.log(`Connected to port ${port}`)
} )
