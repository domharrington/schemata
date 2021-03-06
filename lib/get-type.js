module.exports = getType

var isSchemata = require('./is-schemata')

/*
 * Gets the type of a property. It either returns
 * a non-function (string, schemata instance) or it
 * calls a function. If that function returns a schemata
 * instance, that is returned. Else we return the type as is.
 */
function getType(type, entityObject) {
  if (typeof type !== 'function') return type

  var schemataInstance = type(entityObject)

  return isSchemata(schemataInstance) ? schemataInstance : type
}
