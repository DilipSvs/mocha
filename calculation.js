/**
 * A simple demo function that used for unit testing using mocha and coverage using istanbul
 * @author Dilip
 *
 * @see application.object
 * @since 1.0
 * @version 1.0.1<br>
 * - Added for coverage and gives 100%
 */
var calculation = (function () {
  // locally scoped Object
  var myObject = {};
  var obj = {
    a:'blore',
    b:'mdu'
  }
  /**
   * q value to check
   * @param   {Number} [q=3] q default to 3 if not exist
   * @returns {Number} 
   */
  myObject.qValue = function (q) {
    if(typeof q == 'undefined') q = 3;
    return q;
  };
  
  /**
   * add two number
   * @param   {Number} p default to 0 if not exist
   * @param   {Number} q defult to 3 if not exist
   * @returns {Number} 
   */
  myObject.add = function(p,q) {
    if(typeof p=='undefined') p=0;
    if(typeof q=='undefined') q=3;
    return p+q;
  };
  
  /**
   * simpleObject contains multiple property
   * @returns {Object}
   */
  myObject.simpleObject = function() {
    return obj;
  };
  return myObject;

})();

module.exports = calculation;