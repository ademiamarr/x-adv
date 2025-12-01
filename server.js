const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the build directory
const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));

// For all GET requests that aren't for a static file, serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT} — serving ${buildPath}`);
});
