const notFound = (req, res) => res.status(404).send('<h1>Route does not exist, please try another</h1>')

export default notFound
