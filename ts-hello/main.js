var Point = /** @class */ (function () {
    function Point(xpoint, ypoint) {
        this.xpoint = xpoint;
        this.ypoint = ypoint;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.xpoint + ', Y: ' + this.ypoint);
    };
    return Point;
}());
var point = new Point(11);
point.draw();
