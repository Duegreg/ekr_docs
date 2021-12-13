import {Router} from 'express';
import multer from 'multer'
import imagesOcr from "./middlewares/imagesOcr.js";
import pdf2Images from "./middlewares/pdf2Images.js";

const router = Router();


router.post('/ocr',
    multer({ storage: multer.memoryStorage() }).array('files'),
    pdf2Images,
    imagesOcr,
    async (req, res, next) => {
        console.log(res.locals.results)
        res.status(200).send(res.locals.results)
    },
);

export default router;