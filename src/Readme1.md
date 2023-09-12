Render Props - Class based component

Higher Order Component - Class based component

customHooks - Functional component

- These were not specifically react features
- These were just the pattern that were identified by the developers when
  they started to use react
- These pattern were more popular with class based components
- Functional Components has customHooks
  use + FetchData - This is mandatory

User
ProfileCard
Login
Signup

Higher Order Component

- It is a function
- It accepts a React Component as argument
- It return an enhanced version of same component
- Naming Convention that HOC should start with "with"
  withErrorHandling - This is not mandatory

Usage:

- You can write the common logic with HOC
- In HOC you can also get access to the lifecycle hooks

function withErrorHandling(Component) {
return (
<>  
 {error ? <>There is an error</> : <Component/>}
</>
)
}

Custom Hooks

- They are used with Functional Components. You cant use them with class based
  components
- They are just functions.
- Naming Convention. It start with "use" keyword. Something like useFetch
- You can call any other hook within the custom hook: useState, useEffect
- Inbuild hooks in React
- The hook should follow the Rule of Hooks.

Hooks can only be called at top level of component.
It shouldnt be called in: if else conditions, ternary, within loops,
inside nested function

useState
useEffect
useContext
useRef
useMemo
useCallback
useReducer
