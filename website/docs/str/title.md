---
sidebar_position: 1
description: 'Python string title in js'
title: 'title()'
keywords: ['py-like', 'py-string-title', 'title-case', 'js-title-case', 'string', 'javascript']
---

# str.title()

[Python `str.title()`](https://docs.python.org/3/library/stdtypes.html#str.title) in **Py-like** JS

Returns a **title-cased** version of the string where words start with an uppercase character and the remaining characters are lowercase.

## Usage

#### In JavaScript
```js title="example.js"
import {py} from 'py-like'

py('hello world').title() // Hello World

```
#### In Python
```py title="example.py"
'hello world'.title() # Hello World
```

## Examples

```js
import {py} from 'py-like'

py('hello world').title() // 'Hello World'
py('HeLLo wORlD').title() // 'Hello World'
py('բարեվ աշխարհ').title() // 'Բարեվ Աշխարհ'

py('hello.world').title() // 'Hello.World'
py('hello-world').title() // 'Hello-World'
py('hello_world').title() // 'Hello_World'
py('hello,world').title() // 'Hello,World'
py('hello2022world').title() // 'Hello2022World')

```

## Syntax

### `.title()`

#### Returns `<string>`

Returns a **title-cased** version of the string where words start with an uppercase character and the remaining characters are lowercase.