# Font Stack

| Font  | Device Targeted  |
|---|---|
| -apple-system (San Francisco)  | iOS Safari, macOS Safari, macOS Firefox  |
| BlinkMacSystemFont (San Francisco)  | macOS Chrome  |
| Segoe UI  | Windows  |
| Roboto  | Android, Chrome OS  |
| Oxygen / Oxygen-Sans  | KDE  |
| Fira Sans  | Firefox OS  |
| Droid Sans  | Older versions of Android  |
| Ubuntu  | Ubuntu  |
| Cantarell  | GNOME  |
| Helvetica Neue  | macOS versions < 10.11  |
| Arial  | Any  |
| sans-serif  | Any  |


## Examples

Wordpress 4.6:
```CSS
body {  
   font-family: -apple-system, 
                BlinkMacSystemFont, 
                "Segoe UI", 
                Roboto, 
                Oxygen-Sans, 
                Ubuntu, 
                Cantarell, 
                "Helvetica Neue", 
                sans-serif;
}
```

Medium:
```CSS
body {  
  font-family: -apple-system, 
               BlinkMacSystemFont, 
               "Segoe UI", 
               Roboto, 
               Oxygen,
               Ubuntu,
               Cantarell,
               "Open Sans",
               "Helvetica Neue", 
               sans-serif;
}
```

GitHub:
```CSS
body {  
  font-family: -apple-system, 
               BlinkMacSystemFont, 
               "Segoe UI", 
               Roboto, 
               Helvetica,
               Arial,
               sans-serif,
               "Apple Color Emoji",  /* Emojis*/
               "Segoe UI Emoji", /* Emojis*/
               "Segoe UI Symbol"; /* Emojis*/
}
```