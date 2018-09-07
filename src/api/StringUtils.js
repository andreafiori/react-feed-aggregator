export const stripTags = function(str) {
  return str.replace(/(<([^>]+)>)/ig,"");
}

export const stripTagsAndCData = function(str) {
  let tagStripped = stripTags(str);

  tagStripped = tagStripped.replace('<![CDATA[', '');

  tagStripped = tagStripped.replace(']]>', '');

  return tagStripped;
}