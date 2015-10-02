import Ember from 'ember';

export default Ember.Helper.helper((params, hash) => {
  const disabled = hash.disabled ? "disabled" : "";
  const loading = hash.loading ? "loading" : "";
  const fitted = hash.fitted ? "fitted" : "";
  const inverted = hash.inverted ? "inverted" : "";
  const circular = hash.circular ? "circular" : "";
  const bordered = hash.bordered ? "bordered" : "";
  const rotated = hash.rotated ? "rotated" : "";
  const flipped = hash.flipped ? "flipped" : "";
  let classes = `${hash.size} ${hash.color} ${loading} ${disabled} ${fitted} ${inverted} ${circular} ${bordered} ${rotated} ${flipped}`;

  return new Ember.Handlebars.SafeString(`<i class="icon ${params[0]} ${classes}"></i>`);
});
