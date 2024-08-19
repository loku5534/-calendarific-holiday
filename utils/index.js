const NodeCache = require('node-cache');

// Initialize cache with TTL (Time To Live)
const cache = new NodeCache({ stdTTL: parseInt(process.env.CACHE_TTL) });

module.exports = {
    cache
};
