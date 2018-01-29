'use strict'
const config = require('../../common/config/index')
const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
  host: config.ES_HOST
});


module.exports = (req, res) => {
  const searchQuery = req.query.q

  client.search({
    q: searchQuery
  }).then(body => {
    const hits = body.hits.hits;
    res.render('app/search/index', { query: searchQuery, results: hits, organisation: 'Spectre' })
  }).catch(err =>
    res.render('app/search/index', { query: 'ERROR' + err })
  )
}
