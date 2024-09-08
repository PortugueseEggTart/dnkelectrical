const path = require('path');

// Serve static files (images)
app.use('/images', express.static(path.join(__dirname, '../frontend/public/images')));