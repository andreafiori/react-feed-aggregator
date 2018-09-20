import axios from 'axios';
import { UserException } from '../utils/Exceptions';
import { StringUtils } from '../utils/StringUtils';

export class RssParser {

  constructor() {
    this.objToReturn = {
      image: null,
      title: null,
      description: null,
      link: null,
      items: []
    };
  
    this.DOMPARSER = new DOMParser().parseFromString.bind(new DOMParser());
  }

  // Check if there is an error on doc selector tag
  checkTagItem(i, tag) {
    try {
      return StringUtils.stripTagsAndCData( i(tag).textContent );
    } catch(e) {
      // Log error
      /*
      console.log('CheckTagItem error:');
      console.log('Tag: ' + tag);
      console.log(e);
      */
    }
  }

  checkTag(domParser, tag, throwError) {
    const tagToCheck = domParser.querySelector(tag);
    const result = (tagToCheck) ? StringUtils.stripTagsAndCData(tagToCheck.innerHTML) : null;
    if (result === null && throwError === true) {
      throw new UserException(tag + ' tag is required');
    }
    return result;
  }

  callPromise(url) {
    return axios.get(url);
  }

  parseRssXmlString(xmlString, isAtomFormat = false) {
    return (isAtomFormat === true) ? this.parseFeedAtomFormat(xmlString) : this.parseFeedRss(xmlString);
  }

  /**
   * RSS format XML string parser
   * @param {*} xmlString 
   */
  parseFeedRss(xmlString) {

    let doc = this.DOMPARSER(xmlString, 'text/xml');
    
    this.objToReturn.title = this.checkTag(doc, 'channel title', true);
    this.objToReturn.link = this.checkTag(doc, 'channel link', true);
    this.objToReturn.description = this.checkTag(doc, 'channel description');
    this.objToReturn.image = this.checkTag(doc, 'channel image url');
  
    // Gather items values
    doc.querySelectorAll('item').forEach((item) => {
      let i = item.querySelector.bind(item);
  
      const pubDateTag = i('pubDate');
      const pubDate = (pubDateTag) ? pubDateTag.textContent : null;
  
      this.objToReturn.items.push({
        title:        this.checkTagItem(i, 'title'),
        link:         i('link').textContent,
        description:  this.checkTagItem(i, 'description'),
        pubDate:      pubDate
      });
  
    });
  
    return this.objToReturn;
  }

  /**
   * Atom RSS format XML string parser 
   * @param {*} xmlString 
   */
  static parseFeedAtomFormat(xmlString) {
    let doc = this.DOMPARSER(xmlString, 'text/xml');
    
    this.objToReturn.title = this.checkTag(doc, 'feed title', true);
    this.objToReturn.link = this.checkTag(doc, 'feed link', true);
  
    // Gather entry values
    doc.querySelectorAll('entry').forEach((item) => {
      let i = item.querySelector.bind(item);
  
      this.objToReturn.items.push({
        title:        this.checkTagItem(i, 'title'),
        link:         i('link').textContent,
        description:  null,
      });
  
    });
  
    return this.objToReturn;
  }
}
