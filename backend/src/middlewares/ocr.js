import Axios from 'axios'
import FormData from "form-data";
import fs from 'fs'

const ocrClient = Axios.create({ baseURL: 'http://localhost:8000',  timeout: 5*60*1000})

export default async (req, res, next) => {
    console.log('ocr1')
    console.log(req.body)
    const formData = new FormData()
    req.files.forEach(file => formData.append('files', BufferStream(file.buffer)))
    //formData.append('files', req.files)
    const { data: results } = await ocrClient.post(
        '/ocr',
        formData,
        {
            headers: formData.getHeaders(), //req.headers
        }
    )
    fs.createReadStream()
    console.log('ocr2')
    res.locals.results = results

    next()
}