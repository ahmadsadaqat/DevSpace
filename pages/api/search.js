import fs from 'fs';
const matter = require('gray-matter');
import path from 'path';

export default function handler(req, res) {
  let posts;

  if (process.env.NODE_ENV === 'production') {
    // @todo - fetch from cache
    posts = require('../../cache/data').posts;
  }
  const results = posts.filter(
    ({ frontmatter: { title, excerpt, category } }) =>
      title.toLowerCase().indexOf(req.query.q) != -1 ||
      excerpt.toLowerCase().indexOf(req.query.q) != -1 ||
      category.toLowerCase().indexOf(req.query.q) != -1
  );

  res.status(200).json(JSON.stringify({ results }));
}
