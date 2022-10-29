/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    const [x1,y1,x2,y2]=rec1;
    const [x3,y3,x4,y4]=rec2;
    
    if(x2<=x3 || x1>=x4)
        return false
    if(y2<=y3 || y1>=y4)
        return false
    
    return true
};