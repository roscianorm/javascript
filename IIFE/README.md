# IIFE -> Immediately Invoked Function Expression

An [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) is a [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript) [function](https://developer.mozilla.org/en-US/docs/Glossary/Function) that runs as soon as it is defined.

```
	(function () {
			statements
	})();
```

It is a design pattern which is also known as a [Self-Executing Anonymous Function](https://developer.mozilla.org/en-US/docs/Glossary/Self-Executing_Anonymous_Function) and contains two major parts:

The first is the anonymous function with lexical scope enclosed within the [Grouping Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping) `()`. This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
The second part creates the immediately invoked function expression `()` through which the JavaScript engine will directly interpret the function.
