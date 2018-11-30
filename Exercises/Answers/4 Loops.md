[Home](../../README.md) / [Exercises](../README.md) / [Answers](./) / Loops

# Loops

### Exercise 1

```javascript
var counter = 0;

while(counter < 3){
    moveSnake("down");
    counter = counter + 1;
}
```

```javascript
for(var i = 0; i < 3; i++){
    moveSnake("down");
}
```

### Exercise 2

a.
```javascript
GAME.loop(3);
```

b.
```javascript
GAME.onArrowKey(moveSnake)
```

### Exercise 2

```javascript
var gameRules = function(){
    console.log("Every loop I run");
}
GAME.loop(3, gameRules);
```