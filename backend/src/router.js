import {Router} from 'express';
import multer from 'multer'
import postElastic from "./middlewares/postElastic.js";
import searchElastic from "./middlewares/searchElastic.js";
import ocr from "./middlewares/ocr.js";
import uuid from "./middlewares/uuid.js";

const router = Router();

router.post('/upload',
    multer({ storage: multer.memoryStorage() }).array('files'),
    //uuid,
    ocr,
    postElastic,
    async (_, res) => {
        res.status(201);
    },
);

router.post('/search',
    searchElastic,
    async (_, res) => {
        res.status(200).send(res.locals.results)
    },
);

router.get('/',
    async (_, res,next) => {
        res.status(200).send("ok")
        next()
    },
    async (_, res) => {
        console.log("haha")
    },
);

export default router;