module.exports = (req, res) => {
  const { params } = req;
  res.send('hello world' + params);
}
