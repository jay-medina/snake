/**
 * createElement is the root constructor for creating an HTMLElement.
 * Its purpose is mainly for convenience. It wraps the existing `document.createElement`
 * method. 
 * 
 * CreateElement should be as a pure function. What does this mean? If calling the function
 * with a set of parameters, it should always return back the same copy of the component without side
 * effects. This pattern is similar to how React Components or Elm views are constructed. 
 * 
 * 
 * Every component that composes a view based on createElement needs to follow this pattern:
   ```
  function create<Name>(options = {}) {
    returns {
       render() {
         
         return <html element>;
       }
    }
  }
   ```
 * Example:
 ```
  const btnComponent = createElement({
    el: button,
    innerText: 'hello world'
  });
  
  const el = btnComponent.render();
  ```
 * 
 * @param {Object} options
 * @param {string} [options.el]
 * @param {string} [options.className]
 * @param {string} [options.innerText]
 * @param {Object[]} [options.children]
 * @param {(e) => void} [options.onClick]
 */
export function createElement(options = {}) {
  const optsWithDefaults = {
    el: 'div',
    className: '',
    innerText: '',
    children: [],
    ...options,
  };

  function addEventListeners(el) {
    const { onClick } = optsWithDefaults;

    if (onClick) {
      el.addEventListener('click', onClick);
    }
  }

  function removeEventListeners(el) {
    const { onClick } = optsWithDefaults;

    if (onClick) {
      el.removeEventListener('click', onClick);
    }
  }

  function renderChildren(el) {
    const { children } = optsWithDefaults;

    children.forEach(component => {
      if (!component.render) {
        throw new Error(`${component} needs a render method`);
      }

      el.appendChild(component.render());
    });
  }

  let el = document.createElement(optsWithDefaults.el);

  return {
    render() {
      const { className, innerText } = optsWithDefaults;

      if (className) {
        el.className = className;
      }

      el.innerText = innerText;

      removeEventListeners(el);
      addEventListeners(el);
      renderChildren(el);

      return el;
    },
    update({ className = '', innerText = '', children }) {
      if (className) {
        optsWithDefaults.className = className;
      }
      if (innerText) {
        optsWithDefaults.innerText = innerText;
      }

      this.render();
    },
  };
}
