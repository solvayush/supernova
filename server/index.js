import express from 'express';
import path from 'path';

async function startJetfire () {
    const PORT = 3000;
    const server = express();

    const staticPath = path.join(path.dirname(""), "build");
    server.use(express.static(staticPath));

    server.get("/{*splat}", (req, res) => {
        try {
            const indexPath = path.join(staticPath, "index.html");
            console.log(indexPath);
            return res.sendFile("index.html", {root: staticPath});


        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal Server Error");
        }
        
    }, (err, _req, res, _next) => {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    })



    server.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);

    })



}

startJetfire();
