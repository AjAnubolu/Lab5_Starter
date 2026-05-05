# Expand

**1) Why is it important to put thought into your IDs & Classes when it comes to technology intersections?**

IDs and classes are the shared vocabulary between HTML, CSS, and JavaScript. CSS uses them to style (`#horn-select`, `.hidden`), and JavaScript uses them to query and manipulate (`getElementById`, `querySelector`). Vague or duplicated names — like `#main` or `.box` — collide easily, make refactors painful, and quietly break selectors when markup changes. Good naming (BEM, scoped prefixes, semantic names like `#volume-controls`) keeps each layer independently editable: a designer can restyle without breaking JS, and a developer can rewire behavior without breaking styles.

**2) What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?**

Data attributes are custom HTML attributes prefixed with `data-`, like `<button data-horn="party">`. They let you embed arbitrary metadata on an element without polluting standard attributes, and JS reads them via the `dataset` property (`button.dataset.horn === "party"`). They're ideal for stashing per-element state that JS needs but CSS/screen readers don't care about. The implication for microdata (Schema.org, search engine semantics) is that `data-*` is *not* indexed — it's invisible to crawlers. For SEO-meaningful info, use proper microdata attributes (`itemprop`, `itemscope`) instead.

**3) What is a DOM fragment? Why are they powerful?**

A `DocumentFragment` is a lightweight, in-memory container that holds DOM nodes without being part of the live document. You build up a tree (append children, set attributes), then insert the whole fragment into the DOM in one shot. The power: each insertion into the live DOM triggers reflow and repaint, which is expensive. Building inside a fragment means only one reflow when you finally append it — huge perf win when adding many elements (rendering a list, populating a dropdown).

**4) What is the point of a "Virtual DOM"? What do you gain? What do you lose?**

A virtual DOM is a JS object tree that mirrors the real DOM. Frameworks like React keep a virtual copy, diff the old vs. new version on each render, and apply only the minimal set of real DOM mutations needed. **Gain:** you write declarative code (`render(state)` produces UI), the framework handles efficient updates, and reasoning about UI becomes a function of state instead of imperative DOM patches. **Lose:** an extra abstraction layer, runtime overhead from diffing, larger bundle, and cases where direct DOM access (animations, focus management, third-party widgets) becomes awkward and requires escape hatches like refs.

**5) In JavaScript, usually you can reference every attribute of an element with a dot selector followed by the attribute name, except for the class attribute, which is className. Why is this so?**

`class` is a **reserved word** in JavaScript (used for ES6 class declarations). The DOM API was designed before ES6, but to keep JS forward-compatible they couldn't expose the property as `element.class`. The workaround: `element.className` returns the class attribute as a string. Modern code prefers `element.classList`, which gives a `DOMTokenList` with helpful methods (`add`, `remove`, `toggle`, `contains`) so you don't have to manually parse space-separated strings.

**6) What is the difference between using addEventListener() and something like onClick()? What are the advantages / disadvantages of both?**

`onclick = fn` is a single property assignment — only **one** handler can be attached per event, and reassigning overwrites the previous one. `addEventListener('click', fn)` registers the handler in a list; you can attach **multiple** handlers, capture vs. bubble phases, use `{ once: true }`, and remove handlers individually with `removeEventListener`.

- **`onclick` advantages:** terse, easy to read, simple cases.
- **`onclick` disadvantages:** silently overwrites, can't have multiple listeners, no fine-grained control.
- **`addEventListener` advantages:** composable, supports modern options (capture, passive, once), and is the modern standard.
- **`addEventListener` disadvantages:** slightly more verbose, and you need to keep a reference to the function to remove it later.

In modern code, prefer `addEventListener` everywhere. `onclick` is fine for trivial inline cases but doesn't scale.
