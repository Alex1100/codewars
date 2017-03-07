function filterProductInformation(inventory, target = "Chocolate") {
var count = 0;
var f = '';
var g = '';
var o = '';
var p = '';
var q = [];
var brandNames = [];
var theNames = [];
var theToys = [];
var productDescription = [];
var filteredProducts = [];


var d = currentInventory.forEach((a) => {
      count+= 1;
      f = Object.keys(a).map((b) => (b));
      f.forEach((g) => {
          brandNames.push.apply(brandNames, [a[g]]);
      });
  });

    for(var i = 0; i < brandNames.length; i++){
        if(i % 2 === 0){
            theNames.push(brandNames[i]);
        } else if(i % 2 !== 0) {
            theToys.push(brandNames[i]);
        }
    }

    for(var j = 0; j < theToys.length; j++){
        for(var l = 0; l < theToys[j].length; l++){
            o = Object.keys(theToys[j][l]).map((m) => (m));
            p = Object.keys(theToys[j][l]).map((h) => (theToys[j][l][h]));
            q.push.apply(q, [p]);
        }
    }

    for(var mn = 0; mn < 4; mn++){
        productDescription.push.apply(productDescription, [`${theNames[0]}, ${q[mn][0]}, ${q[mn][1]}`]);
    }

    for(var nm = 4; nm < 6; nm++){
      productDescription.push.apply(productDescription, [`${theNames[1]}, ${q[nm][0]}, ${q[nm][1]}`]);
    }


  for(var zz = 0; zz < productDescription.length; zz++){
    if(productDescription[zz].includes('Chocolate')){
      filteredProducts.push(productDescription[zz].replace(/,/g, ''));
    }
  }

var thanksForReadingMe = productDescription.filter((item) => item.includes("Chocolate"));

thanksForReadingMe = thanksForReadingMe.map((item) => item.slice(item.indexOf(",") + 1, item.length));

thanksForReadingMe = thanksForReadingMe.map((item) => item.split(' '));

thanksForReadingMe.map((chi) => chi.pop() && chi.shift());

thanksForReadingMe[0][thanksForReadingMe[0].length - 1] = thanksForReadingMe[0][thanksForReadingMe[0].length - 1].replace(/,/g, "");

thanksForReadingMe[1][thanksForReadingMe[1].length - 1] = thanksForReadingMe[1][thanksForReadingMe[1].length - 1].replace(/,/g, "");

var indexOfTarget = thanksForReadingMe.map((item) => item.indexOf(target));

var result = [];

for(var ass = 0; ass < thanksForReadingMe.length; ass++){
  result[ass] = {};
  result[ass]["nameWords"] = [];
  result[ass]["targetWordIndex"] = '';
  for(var tits = 0; tits < thanksForReadingMe[ass].length; tits++){
    result[ass]["nameWords"].push(thanksForReadingMe[ass][tits]);
    result[ass]["targetWordIndex"] = indexOfTarget[ass];
  }
}

  return result;
}
