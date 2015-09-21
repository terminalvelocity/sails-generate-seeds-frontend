import Ember from 'ember';

export default Ember.Helper.helper((params, hash) => {
  const max = hash.max || 140;
  const str = params[0];
  let modifiedStr = str.length > max ? `${str.substr(0, max)}...` : str;
  return modifiedStr;
});
