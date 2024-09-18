app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// Middleware to handle other errors
app.use((err, req, res, next) => {
  console.error('Server error:', err); // Log the error
  res.status(500).json({ message: 'Internal Server Error' });
});