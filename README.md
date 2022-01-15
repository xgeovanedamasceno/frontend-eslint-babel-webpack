# Front-End Javascript Genius Game -

This repository is my improvement from Spruce Gabriela's Genius Game project (https://github.com/SpruceGabriela/genesis-dio)

This project has no commercial purpose.

## Notes - Eslint

###### 1. Strings must use singlequote

before:
```
const greenArea = document.querySelector(".green-area");
const redArea = document.querySelector(".red-area");
const yellowArea = document.querySelector(".yellow-area");
const blueArea = document.querySelector(".blue-area");
```

after:
```
const greenArea = document.querySelector('.green-area');
const redArea = document.querySelector('.red-area');
const yellowArea = document.querySelector('.yellow-area');
const blueArea = document.querySelector('.blue-area');
```

###### 2. 'colorOrder' is neverReassigned. Use 'const' instead - (prefer-const)

before:
```
let colorOrder = Math.floor(Math.random() *  4);
```

after:
```
const colorOrder = Math.floor(Math.random() *  4);
```

###### 3. multiple spaces found before '4'

before:
```
const colorOrder = Math.floor(Math.random() *  4);
```

after:
```
const colorOrder = Math.floor(Math.random() * 4);
```

###### 4. for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,entries,values} and iterate over the resulting array.

before:
```
  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
```

after:
```
  order.forEach((i) => {
    const elementColor = createColorElement(i);
    lightColor(elementColor, Number(i) + 1);
  });
```

###### 5. expected parentheses around arrow function argument

before:
```
 order.forEach(i => {
    let elementColor = createColorElement(i);
    lightColor(elementColor, Number(i) + 1);
  })
```

after:
```
 order.forEach((i) => {
    let elementColor = createColorElement(i);
    lightColor(elementColor, Number(i) + 1);
  })
```

###### 6. 'elementColor' is never reassigned. Use 'const' instead

before:
```
   order.forEach((i) => {
    let elementColor = createColorElement(i);
    lightColor(elementColor, Number(i) + 1);
  })
```

after:
```
   order.forEach((i) => {
    const elementColor = createColorElement(i);
    lightColor(elementColor, Number(i) + 1);
  })
```

###### 7. 'createColorElement' was used before it was defined.

before:
```
   order.forEach((i) => {
    let elementColor = createColorElement(i);
    lightColor(elementColor, Number(i) + 1);
  })

  const createColorElement = (color) => {
  if (color == 0) return greenArea;
  else if (color == 1) return redArea;
  else if (color == 2) return yellowArea;
  else if (color == 3) return blueArea;
}
```

after:
```
const createColorElement = (color) => {
  if (color == 0) return greenArea;
  else if (color == 1) return redArea;
  else if (color == 2) return yellowArea;
  else if (color == 3) return blueArea;
}

order.forEach((i) => {
  let elementColor = createColorElement(i);
  lightColor(elementColor, Number(i) + 1);
})
```


###### 8. expected to return a value at the end of arrow function

before:
```
 const createColorElement = (color) => {
  if (color == 0) return greenArea;
  else if (color == 1) return redArea;
  else if (color == 2) return yellowArea;
  else if (color == 3) return blueArea;
}
```

after:
```
const createColorElement = (color) => {
  switch (color) {
    case 1:
      return redArea;
    case 2:
      return yellowArea;
    case 3:
      return blueArea;
    default:
      return greenArea;
  }
};
```

###### 9. Missing semicolon

before:
```
const createColorElement = (color) => {
  switch (color) {
    case 1:
      return redArea;
    case 2:
      return yellowArea;
    case 3:
      return blueArea;
    default:
      return greenArea;
  }
}
```

after:

```
const createColorElement = (color) => {
  switch (color) {
    case 1:
      return redArea;
    case 2:
      return yellowArea;
    case 3:
      return blueArea;
    default:
      return greenArea;
  }
};
```

###### 10. Assignment to function parameter 'time' - (no-param-reassing)

before:
```
const lightColor = (element, time) => {
  time = time * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, time - 250);
  setTimeout(() => {
    element.classList.remove('selected')
  });
}
```

after:
```
const lightColor = (element, time) => {
  const timeRound = time * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, timeRound);
  setTimeout(() => {
    element.classList.remove('selected')
  });
};
```

###### 11. Expected '!==' and instead saw '!=' - eslint(eqeqeq)

before:
```
clickedOrder.forEach((i, index) => {
    if (i != order[index]) {
      gameOver();
    }
  });

```

after:
```
 clickedOrder.forEach((i, index) => {
    if (i !== order[index]) {
      gameOver();
    }
  });
```

###### 12. Unary operator '++' used - eslint(no-plusplus)

before:
```
const nextLevel = () => {
  score++;
  shuffleOrder();
}
```

after:
```
 const nextLevel = () => {
  score += score;
  shuffleOrder();
};
```

###### 13. Block must not be padded by blank lines - eslint(padded-blocks)

before:
```
const click = (color) => {
  
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);

};
```

after:
```
const click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);
};
```





## Development Dependencies

- babel/core: "^7.16.7"
- babel/preset-env: "^7.16.8"
- testing-library/dom: "^8.11.1"
- testing-library/jest-dom: "^5.16.1"
- babel-loader: "^8.2.3"
- eslint: "^8.6.0"
- eslint-config-airbnb-base: "^15.0.0"
- eslint-plugin-import: "^2.25.4"
- eslint-plugin-jest-dom: "^4.0.1"
- eslint-plugin-testing-library: "^5.0.3"
- jest: "^27.4.7"
- webpack: "^5.66.0"
- webpack-cli": "^4.9.1"
