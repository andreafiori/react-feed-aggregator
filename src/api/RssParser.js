import axios from 'axios';
import { UserException } from '../utils/Exceptions';
import { StringUtils } from '../utils/StringUtils';

export class RssParser {

  constructor() {
    this.domObject = {
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

  parseRssXmlString(xmlString, isAtom = false) {
    return (isAtom === true) ? this.parseFeedAtomFormat(xmlString) : this.parseFeedRss(xmlString);
  }

  /**
   * RSS format XML string parser
   * @param {*} xmlString 
   */
  parseFeedRss(xmlString) {

    let doc = this.DOMPARSER(xmlString, 'text/xml');
    
    this.domObject.title = this.checkTag(doc, 'channel title', true);
    this.domObject.link = this.checkTag(doc, 'channel link', true);
    this.domObject.description = this.checkTag(doc, 'channel description');
    this.domObject.image = this.checkTag(doc, 'channel image url');
  
    // Gather items values
    doc.querySelectorAll('item').forEach((item) => {
      let i = item.querySelector.bind(item);
  
      const pubDateTag = i('pubDate');
      const pubDate = (pubDateTag) ? pubDateTag.textContent : null;

      const dcDateTag = i('date');
      const dcDate = (dcDateTag) ? dcDateTag.textContent : null;
  
      this.domObject.items.push({
        title:        this.checkTagItem(i, 'title'),
        link:         i('link').textContent,
        description:  this.checkTagItem(i, 'description'),
        pubDate:      pubDate ? pubDate : dcDate
      });
  
    });
  
    return this.domObject;
  }

  /**
   * Atom RSS format XML string parser 
   * @param {*} xmlString 
   */
  parseFeedAtomFormat(xmlString) {
    let doc = this.DOMPARSER(xmlString, 'text/xml');

    this.domObject.title = this.checkTag(doc, 'title', true);
    this.domObject.link = this.checkTag(doc, 'link', true);
  
    // Gather entry values
    doc.querySelectorAll('entry').forEach((item) => {
      let i = item.querySelector.bind(item);

      const pubDateTag = i('updated');
      const pubDate = (pubDateTag) ? pubDateTag.textContent : null;

      let linkToArticle;
      if (i('link') && i('link').textContent) {
        linkToArticle = i('link').textContent;
      } else if (i('link') && i('link').getAttribute('href')) {
        linkToArticle = i('link').getAttribute('href');
      }

      this.domObject.items.push({
        title:        this.checkTagItem(i, 'title'),
        link:         linkToArticle,
        description:  this.checkTagItem(i, 'summary'),
        pubDate:      pubDate,
      });
  
    });
  
    return this.domObject;
  }
}
