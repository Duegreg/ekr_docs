# ekr_docs

## backend
- `upload pdfs`
-  -> store pdf file in AWS S3
-  -> exract text with Tesseract OCR 
-  -> exract information with [model](https://github.com/Duegreg/ekr_docs#model)
-  -> store text data in Elastic Search
- `search`
- -> return pdf text data for the given query (match/levenhstein/regex/...)
- `download`
- -> download pdf file by filename

## model
- `predict`
- -> batch text information extraction with CRFSuite ML model
- `train`
- -> todo

## frontend
- todo
