export const stripTags = (str) => {
  return str.replace(/(<([^>]+)>)/ig,"");
}

export const stripCDataTag = (str) => {
  let tagStripped = str.replace('<![CDATA[', '');

  return  tagStripped.replace(']]>', '');
}

export const stripTagsAndCData = (str) => {
  return stripTags(stripCDataTag(str));
}

export const truncateString = (str, wordsNumber) => {
  return str.split(' ').splice(0, wordsNumber).join(' ');
}
