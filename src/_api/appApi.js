/* This file should contain API calls. Create as many of theses as necessary */
import { wait } from '_helpers';

const db = {
  featureA: [
    { id: 1, desc: 'FeatureA 1', size: 100, author_id: 1 },
    { id: 2, desc: 'FeatureA 2', size: 500, author_id: 3 },
    { id: 3, desc: 'FeatureA 3', size: 2500, author_id: 3 },
  ],
  featureB: [
    { id: 1, desc: 'FeatureB 1', size: 8000, author_id: 4 },
    { id: 2, desc: 'FeatureB 2', size: 7500, author_id: 2 },
    { id: 3, desc: 'FeatureB 3', size: 55, author_id: 1 },
  ],
  user: [{ name: 'User 1', id: 1 }, { name: 'User 2', id: 2 }, { name: 'User 3', id: 3 }, { name: 'User 4', id: 4 }],
};

// These function should actually be calli a remote api using aixos, fetch, etc.
// This function mimics diferent api slugs, wich can be a good pattern for well structured apis
export const findOne = async (apiSlug, id) => wait(db[apiSlug][id]);
export const findAll = async apiSlug => wait(db[apiSlug]);
export const insert = async (apiSlug, data) =>
  wait().then(() => {
    db[apiSlug] = [...db[apiSlug], data];
    return data;
  });
export const remove = async (apiSlug, id) => wait((db[apiSlug] = db[apiSlug].filter(e => e.id !== id)));
export const update = async (apiSlug, data) =>
  wait().then(() => {
    db[apiSlug][data.id] = data;
    return data;
  });
