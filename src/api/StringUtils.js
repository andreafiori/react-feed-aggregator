export const stripTags = function(str) {
  return str.replace(/(<([^>]+)>)/ig,"");
}

export const stripCDataTag = function(str) {
  let tagStripped = str.replace('<![CDATA[', '');

  return  tagStripped.replace(']]>', '');
}

export const stripTagsAndCData = function(str) {
  return stripTags(stripCDataTag(str));
}