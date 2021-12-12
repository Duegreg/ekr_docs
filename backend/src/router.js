import {Router} from 'express';
import multer from 'multer'
import imagesOcr from "./middlewares/imagesOcr.js";
import pdf2Images from "./middlewares/pdf2Images.js";

const router = Router();
const upload = multer({ storage: multer.memoryStorage() })


router.post('/upload',
    upload.array('files'),
    async (req, res, next) => {
       next()
    },
    pdf2Images,
    imagesOcr,
    async (req, res, next) => {
        res.status(200).send(res.locals.pdfs)
    },
);

router.post('/upload2',
    upload.array('files'),
    async (req, res, next) => {
        res.status(200).send(req.files.map(({originalname}) => originalname))
    }
);

router.get('/', async (req, res, next) => {
        res.status(200).send("Hello express!")
    }
);

export default router;