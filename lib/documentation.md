[Home](../README.md) / Game JS

# GAME JS

GAME.js is a javascript library that provide helper functions and game play.

Below are the available functions to call on GAME

---

## GAME

```javascript
GAME.createSnake([name: string, [colour: string]]): Snake
```
`GAME.createSnake` has two optional parameters, name and color, which are both strings. `GAME.createSnake` returns a `Snake` Object.

---

```javascript
GAME.createApple(): Apple
```
`GAME.createApple` returns a `Apple` Object.

---

```javascript
GAME.setDirectionForSnake(): void
```
`GAME.setDirectionForSnake` sets the direction for where the snake will move next. It does not return anything.

---

```javascript
GAME.detectCollisionBetween(object1, object2): boolean
```
`GAME.detectCollisionBetween` detects if two objects collide. Returns `true` or `false`.

---

```javascript
GAME.endGame([message]): void
```
`GAME.endGame`ends the game. Has an optional message parameter to display.

---

```javascript
GAME.growSnake(): void
```
`GAME.growSnake` will make snake grow by one square. It does not return anything

---

```javascript
GAME.setAppleInRandomLocation(): Apple
```
`GAME.setAppleInRandomLocation` generates a new `Apple` in a new location. This function returns an `Apple` object.

---

```javascript
GAME.draw([snake, [apple]]): void
```
`GAME.draw` has two optional parameters, snake and apple. Pass in the `Snake` and `Apple` created by `GAME.createSnake` and `GAME.createApple`. `GAME.draw` does not return anything.

---

```javascript
GAME.loop([gameSpeed: number, [gameRules: function]]): void
```
`GAME.loop` has two optional parameters, gameRules and gameSpeed.

`gameSpeed` is a number. The number is how many times the game will render per second.

`gameRules` can be any function.

`GAME.loop` does not return anything.

---

```javascript
GAME.onArrowKey(callback: function): void
```
`GAME.onArrowKey` has one parameters, `callback`, which takes a function as an argument.  This function will be passed a `direction` of `"up"`, `"down"`, `"left"` and `"right"`.

`GAME.onArrowKey` does not return anything.

---

```javascript
GAME.increaseGameSpeed(speed: number): void
```
`GAME.increaseGameSpeed` increases the speed of the game. The function does not return anything.

---


## SNAKE

When you create a snake with `GAME.createSnake`, the snake object returned has two functions.

```javascript
snake.head(): Location
```
`snake.head` returns the location of the `snakes` head.

---

```javascript
snake.body(): Location
```
`snake.body` returns the location of the `snakes` body.
