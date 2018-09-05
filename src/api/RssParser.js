import axios from 'axios';

/**
 * Parse an RSS document using rss2jsong API
 */
export const rss2Json = function (url) {

  try {
    return axios.get('https://api.rss2json.com/v1/api.json', {
      params: {
        'rss_url': encodeURI(url),
        'api_key': '<your-rss2json-key>'
      }
    });
  } catch (err) {
    console.log(err.message);
  }

  return false;
}
