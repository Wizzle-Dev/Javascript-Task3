
const transformNum = (num) => {
    const out = [];
    for (let i=1; i <= num; i++) {
      const outArray = [];
      if (i % 2 === 0) outArray.push('yu');
      if (i % 3 === 0) outArray.push('gi');
      if (i % 5 === 0) outArray.push('oh');
      out.push(outArray.length > 0 ? outArray.join('-') : i);
    }
  
    return out;
  }
  
  transformNum(30)