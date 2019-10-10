# heart-beat

## a pulsating heart lwc 

### API / Attribute
```size```
  - large
  - medium
  - small

### Consuming

use in another component:

```html
<c-heart-lwc size="small"></c-heart-lwc>  
```

there is also a demo lwc included, used w/ lwc local dev server

### Example

putting below in component:

```html
written with <c-heart-lwc size="small"></c-heart-lwc> by <i>jamie smith</i>
```

would result in below (with the heart animated)

<img src="resource/Screenshot from 2019-10-10 01-51-41.png"></img>

---

cleaning out old repos, i came across old polymer project i had forked https://github.com/janantala/love-heart

so converted, added size attribute for a little dynamo, etc