import axios from 'axios';

export const rss2Json = function (url) {

  try {
    return axios.get('https://api.rss2json.com/v1/api.json', {
      params: {
        'rss_url': encodeURI(url),
        'api_key': 'bp4p0wmtckg8lbwumlimks8i79rrz1tm9rdtow0g'
      }
    });
  } catch (err) {
    // console.log(err.message);
  }

  return false;
}
