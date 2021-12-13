# ekr_docs

## Services:

### backend
- `upload pdfs`
-  -> store pdf file in AWS S3
-  -> exract text with Tesseract OCR 
-  -> exract information with [model service](##model)
-  -> store text data in Elastic Search
- `search`
- -> return pdf text data by query (match/levenhstein/regex/...)
- `download`
- -> download pdf file by filename

### model
- `predict`
- -> batch text information extraction with CRFSuite ML model
- `train`
- -> todo

### frontend
- in progress
