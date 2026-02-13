// pdf.js
const PDFDocument = require("pdfkit");
const fs = require("fs");

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream("output.pdf"));

doc.fontSize(25).text("Hello Sonu");
doc.moveDown();
doc.fontSize(14).text("This PDF is generated using pdfkit");

doc.end();
