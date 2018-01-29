'use strict'

exports.CORRELATION_HEADER = process.env.CORRELATION_HEADER_NAME || 'x-request-id'
exports.CONNECTOR_URL = process.env.CONNECTOR_URL
exports.ES_HOST = process.env.ES_HOST || 'localhost:9200'
