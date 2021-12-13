import {Router} from 'express';
import multer from 'multer'
import imagesOcr from "./middlewares/imagesOcr.js";
import pdf2Images from "./middlewares/pdf2Images.js";
import uuid from "./middlewares/uuid.js";
import searchElastic from "./middlewares/searchElastic.js";
import postElastic from "./middlewares/postElastic.js";
import textTagger from "./middlewares/textTagger.js";

const router = Router();


router.post('/upload',
    multer({ storage: multer.memoryStorage() }).array('files'),
    async (req, res, next) => {
        res.sendStatus(200)
    },
    uuid,
    pdf2Images,
    imagesOcr,
    textTagger,
    postElastic,
    async (req, res, next) => {
        // SSE?
    },
);

router.post('/search',
    searchElastic,
    async (_, res) => {
        res.status(200).send(res.locals.results)
    },
);


//router.get('/download')

export default router;