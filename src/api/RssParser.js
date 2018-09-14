import axios from 'axios';
import { stripTagsAndCData } from './StringUtils.js';

function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}

/**
 * Check if there is an error on doc selector tag
 * 
 * @param {object} i 
 * @param {string} tag
 */
function checkTagItem(i, tag) {
  try {
    return stripTagsAndCData( i(tag).textContent );
  } catch(e) {
    // Log error
    console.log('CheckTagItem error:');
    console.log('Tag: ' + tag);
    console.log(e);
  }
}

function checkTag(domParser, tag, throwError) {
  const tagToCheck = domParser.querySelector(tag);
  const result = (tagToCheck) ? stripTagsAndCData(tagToCheck.innerHTML) : null;
  if (throwError === true) {
    throw new UserException(tag + ' tag is required');
  }
  return result;
}

export const callPromise = (url) => {
  return axios.get(url);
}

// TODO: feed atom parser
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
  let doc = DOMPARSER(xmlString, 'text/xml');
  
  console.log( doc.querySelector('channel title').innerHTML );

  objToReturn.title = checkTag(doc, 'channel title', true);
  objToReturn.link = checkTag(doc, 'channel link', true);
  objToReturn.description = checkTag(doc, 'channel description');
  objToReturn.image = checkTag(doc, 'channel image url');

  // RSS Items
  doc.querySelectorAll('item').forEach((item) => {
    let i = item.querySelector.bind(item);

    const pubDateTag = i('pubDate');
    const pubDate = (pubDateTag) ? pubDateTag.textContent : null;

    // TODO validate object before push...
    objToReturn.items.push({
      title: checkTagItem(i, 'title'),
      link: i('link').textContent,
      description: checkTagItem(i, 'description'),
      pubDate: pubDate
    });

  });

  return objToReturn;
}
