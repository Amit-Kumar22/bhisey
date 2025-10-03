import sanitizeHtml from 'sanitize-html';

const allowedTags = sanitizeHtml.defaults.allowedTags.concat([
  'img','h1','h2','h3','h4','figure','figcaption','code','pre'
]);

const allowedAttributes = {
  ...sanitizeHtml.defaults.allowedAttributes,
  img: ['src','alt','title','width','height','loading']
};

export function sanitizeContent(html: string) {
  return sanitizeHtml(html, { allowedTags, allowedAttributes });
}

export default sanitizeContent;