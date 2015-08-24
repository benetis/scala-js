(function() {
  var $g = (typeof global !== "undefined" && global.Object === Object)
    ? global
    : this;
  var ScalaJSDefinedTestNativeParentClass = function(x) {
    $g.Object.call(this);
    this.x = x;
  };
  ScalaJSDefinedTestNativeParentClass.prototype.foo = function(s) {
    return s + this.x;
  };
  $g.Object.defineProperty(ScalaJSDefinedTestNativeParentClass.prototype, "bar", {
    "configurable": false,
    "enumerable": false,
    "get": function() {
      return this.x << 1; // x * 2 would not return an Int, technically
    }
  });
  $g.ScalaJSDefinedTestNativeParentClass = ScalaJSDefinedTestNativeParentClass;

  /* Deferred members:
   * val x: Int
   * def bar(y: Int): Int
   */
  var ScalaJSDefinedTestNativeParentClassWithDeferred = function() {
    $g.Object.call(this);
  };
  ScalaJSDefinedTestNativeParentClassWithDeferred.prototype.foo = function(y) {
    return (this.bar((y + 4) | 0) + this.x) | 0;
  };
  $g.ScalaJSDefinedTestNativeParentClassWithDeferred =
    ScalaJSDefinedTestNativeParentClassWithDeferred;
}).call(this);
