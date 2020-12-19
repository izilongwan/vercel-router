module.exports = (req, res) => {
  const { query } = req;
  res.send('hello world ++ ' + query.age);
}
