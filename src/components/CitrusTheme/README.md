The `CitrusThemeProvider` provides a [Styled Components](https://www.styled-components.com/) theme provider that is able to leverage [Styled System](https://styled-system.com/).

## Usage

```javascript
import CitrusThemeProvider from 'citrus-react'

function Layout(props) {
  return <CitrusThemeProvider>{props.children}</CitrusThemeProvider>
}
```

Child components then can access the theme values as documented by the [Styled Components](https://www.styled-components.com/docs/advanced) team.
