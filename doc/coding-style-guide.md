#### JSON: `must be sorted`.
  Should use plugin `sort JSON`


#### Naming

##### Folder: kebab-case

    src/component/button-navigation

##### Class File: PascalCase and jsx

    src/component/login/index.js
    src/component/login/LoginForm.jsx
    src/component/login/LoginForm.styles.js
    src/component/login/LoginForm.handlers.js
    src/component/login/LoginForm.utils.js

#### Handle event

When defining props, should name as `onEvent`, when implementing, should name as `handleEvent`

    <Button onClick={handleClick} />
    handleClick = () => {}

#### Components
must have the `propTypes` and `defaultProps` for using props

#### Select Platform
When defining a constant base on Android or iOS, should use `Platform.select`, `do not use` Platform.OS === 'ios' for this case.

    const message = Platform.select({
      ios: "message for iOS",
      android: "message for Android",
    });