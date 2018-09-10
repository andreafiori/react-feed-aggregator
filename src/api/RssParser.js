import axios from 'axios';
import { stripTagsAndCData } from './StringUtils.js';

/**
 * Check if there is an error on doc selector tag
 * 
 * @param {object} i 
 * @param {string} tag
 */
function checkTag(i, tag) {
  try {
    return stripTagsAndCData( i(tag).textContent );
  } catch(e) {
    // Log error...
  }
}

export const callPromise = (url) => {
    return axios.get(url);
}

export const buildFeedObject = (xmlString) => {

  // Default static object
  let objToReturn = {
    image: null,
    title: null,
    description: null,
    link: null,
    items: []
  };

  const DOMPARSER = new DOMParser().parseFromString.bind(new DOMParser());
  let doc = DOMPARSER(xmlString, "text/xml");

  // Image tag is not required
  const imageTag = doc.querySelector('channel image');
  if (imageTag) {
    objToReturn.image = doc.querySelector('channel image url').innerHTML;
  }
  
  objToReturn.link = doc.querySelector('channel link').innerHTML;
  objToReturn.title = stripTagsAndCData(doc.querySelector('channel title').innerHTML);
  objToReturn.description = stripTagsAndCData(doc.querySelector('channel description').innerHTML);

  // RSS Items
  doc.querySelectorAll('item').forEach((item) => {
    let i = item.querySelector.bind(item);

    const pubDateTag = i('pubDate');
    const pubDate = (pubDateTag) ? pubDateTag.textContent : null;

    objToReturn.items.push({
      title: stripTagsAndCData(i('title').textContent),
      link: i('link').textContent,
      description: checkTag(i, 'description'),
      pubDate: pubDate,
    });

  });

  return objToReturn;
}
