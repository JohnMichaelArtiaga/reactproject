const express = require("express");
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(fileUpload());

app.post("/parse-pdf", async (req, res) => {
  if (!req.files || !req.files.pdfFile) {
    return res.status(400).send("No PDF file uploaded.");
  }

  try {
    const buffer = req.files.pdfFile.data;
    const { text } = await pdfParse(buffer);

    // Extract summary using regular expressions
    const goalsMatch = text.match(/Total Goals:\s*(\d+)/i);
    const bmpsMatch = text.match(/Total BMPs:\s*(\d+)/i);
    const completionMatch = text.match(/Completion Rate:\s*(\d+(\.\d+)?)/i);

    const summary = {
      totalGoals: goalsMatch ? parseInt(goalsMatch[1], 10) : 0,
      totalBMPs: bmpsMatch ? parseInt(bmpsMatch[1], 10) : 0,
      completionRate: completionMatch ? parseFloat(completionMatch[1]) : 0,
    };

    // Placeholder arrays for additional sections
    const report = {
      summary,
      goals: [],
      bmps: [],
      implementation: [],
      monitoring: [],
      outreach: [],
      geographicAreas: [],
    };

    res.json(report);
  } catch (error) {
    console.error("PDF parsing error:", error);
    res.status(500).send("Failed to parse PDF.");
  }
});

const PORT = 5174;
app.listen(PORT, () => console.log(`Server running on http://localhost:5174`));
