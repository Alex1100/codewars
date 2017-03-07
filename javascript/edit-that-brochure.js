function renderInventory(inventory) {
  var count = 0;
  var f = '';
  var g = '';
  var o = '';
  var p = '';
  var q = [];
  var storeNames = [];
  var theNames = [];
  var theIceCreams = [];
  var productDescription = [];

  var d = inventory.forEach((a) => {
        count+= 1;
        f = Object.keys(a).map((b) => (b));
        f.forEach((g) => {
            storeNames.push.apply(storeNames, [a[g]]);
        });
  });

    for(var i = 0; i < storeNames.length; i++){
        if(i % 2 === 0){
            theNames.push(storeNames[i]);
        } else if(i % 2 !== 0) {
            theIceCreams.push(storeNames[i]);
        }
    }

    for(var j = 0; j < theIceCreams.length; j++){
        for(var l = 0; l < theIceCreams[j].length; l++){
            o = Object.keys(theIceCreams[j][l]).map((m) => (m));
            p = Object.keys(theIceCreams[j][l]).map((h) => (theIceCreams[j][l][h]));
            q.push.apply(q, [p]);
        }
    }

    for(var mn = 0; mn < 4; mn++){
        productDescription.push.apply(productDescription, [`${theNames[0]}, ${q[mn][0]}, ${q[mn][1]}`]);
    }

    for(var nm = 4; nm < 6; nm++){
        productDescription.push.apply(productDescription, [`${theNames[1]}, ${q[nm][0]}, ${q[nm][1]}`]);
    }

    return productDescription;
}
