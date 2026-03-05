## 📚 Table of Contents

1. [JSX কী এবং কেন ব্যবহার করা হয়](#1-jsx-কী-এবং-কেন-ব্যবহার-করা-হয়)
2. [State এবং Props এর পার্থক্য](#2-state-এবং-props-এর-পার্থক্য)
3. [useState Hook কী এবং এটি কীভাবে কাজ করে](#3-usestate-hook-কী-এবং-এটি-কীভাবে-কাজ-করে)
4. [Component এর মধ্যে State Share করা](#4-react-এ-component-এর-মধ্যে-state-কীভাবে-share-করা-যায়)
5. [React-এ Event Handling](#5-react-এ-event-handling-কীভাবে-করা-হয়)
6. [Summary](#summary)

---

# 1. JSX কী এবং কেন ব্যবহার করা হয়

**JSX (JavaScript XML)** হলো JavaScript-এর একটি syntax extension যা দেখতে HTML-এর মতো। React-এ JSX ব্যবহার করা হয় UI (User Interface) সহজভাবে তৈরি করার জন্য।

### উদাহরণ

```jsx
const element = <h1>Hello, World!</h1>;
```

### JSX ব্যবহার করার কারণ

- কোড সহজে পড়া ও বোঝা যায়
- HTML এবং JavaScript একসাথে লেখা যায়
- UI তৈরি করা সহজ হয়
- React component structure পরিষ্কার থাকে

JSX শেষ পর্যন্ত JavaScript function call এ convert হয়ে যায়।

---

# 2. State এবং Props এর পার্থক্য

React-এ **State** এবং **Props** উভয়ই data manage করার জন্য ব্যবহৃত হয়, কিন্তু তাদের কাজ আলাদা।

| বিষয়             | State          | Props                            |
| ---------------- | -------------- | -------------------------------- |
| নিয়ন্ত্রণ করে    | Component নিজে | Parent Component                 |
| পরিবর্তন করা যায় | হ্যাঁ          | না                               |
| ব্যবহার          | Dynamic data   | Component এর মধ্যে data pass করা |

### Props উদাহরণ

```jsx
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}
```

### State উদাহরণ

```jsx
const [count, setCount] = useState(0);
```

---

# 3. useState Hook কী এবং এটি কীভাবে কাজ করে

**useState** হলো React এর একটি Hook যা functional component এ state ব্যবহারের সুযোগ দেয়।

### Syntax

```jsx
const [state, setState] = useState(initialValue);
```

### উদাহরণ

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

### এটি কীভাবে কাজ করে

1. `useState(0)` → initial value সেট করে
2. `count` → বর্তমান state
3. `setCount()` → state update করার function
4. state পরিবর্তন হলে component আবার render হয়

---

# 4. React-এ Component এর মধ্যে State কীভাবে Share করা যায়

React-এ state share করার সবচেয়ে সাধারণ পদ্ধতি হলো **Lifting State Up**।

এখানে state একটি **parent component** এ রাখা হয় এবং props এর মাধ্যমে child component গুলোতে পাঠানো হয়।

### উদাহরণ

```jsx
function Parent() {
  const [message, setMessage] = useState("Hello");

  return (
    <>
      <Child1 message={message} />
      <Child2 setMessage={setMessage} />
    </>
  );
}
```

### State Share করার অন্যান্য পদ্ধতি

- Context API
- Redux
- Zustand

---

# 5. React-এ Event Handling কীভাবে করা হয়

React-এ event handling JavaScript-এর মতো হলেও কিছু নিয়ম আলাদা।

### গুরুত্বপূর্ণ বিষয়

- Event name **camelCase** হয়
- Function `{}` এর মধ্যে লেখা হয়

### উদাহরণ

```jsx
function Button() {
  function handleClick() {
    alert("Button Clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Arrow Function ব্যবহার

```jsx
<button onClick={() => console.log("Clicked")}>Click</button>
```

React একটি **Synthetic Event System** ব্যবহার করে যা browser compatibility নিশ্চিত করে।

---
