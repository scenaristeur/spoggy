[Demo](http://spoggy0.firebaseapp.com) , en mode solo, non synchronisé, fonctionnalités réduites.

[Documentation](http://smag0.blogspot.fr/2017/11/avec-spoggy-prenez-des-notes-et.html)

Disponible :

Import : commande /i

Export : commande /e

[exemples de fichiers exportés depuis spoggy](https://github.com/scenaristeur/smag0-connaissance/tree/master/meet-up_conf)


Le code source de l'application SPOGGY sera bientôt disponible.
Pour être informé de sa sortie,
cliquez sur "Watch" en haut à droite
ou abonnez-vous à la newsletter du blog. [http://smag0.blogspot.fr/2017/08/smagyun-comment-acceder-aux.html?m=0](http://smag0.blogspot.fr/2017/08/smagyun-comment-acceder-aux.html?m=0)


installation :
```
git clone https://github.com/scenaristeur/spoggy.git
cd spoggy
npm install && cd public/ && bower install && cd .. && node .

```

```
* NODE DEPENDENCIES
"dependencies": {
  "express": "^4.16.1",
  "level": "^1.7.0",
  "levelgraph": "^2.1.1",
  "polymer-cli": "^1.5.5",
  "socket.io": "^2.0.3"
}

* BOWER_COMPONENTS
"dependencies": {
  "polymer": "Polymer/polymer#^2.0.0",
  "socket.io": "^2.0.3",
  "paper-input": "^2.0.2",
  "paper-button": "^2.0.0",
  "iron-swipeable-pages": "^1.2.9",
  "paper-tabs": "^2.0.0",
  "iron-component-page": "^3.0.1",
  "paper-fab": "^2.0.0",
  "iron-icons": "^2.0.1",
  "vis": "^4.20.1",
  "paper-slider": "^2.0.2"
},


ajouter les fonctions de spogrdf

test de EyeReasoner http://127.0.0.1:3000/browser/demo/demo.html

## adaptation style color-picker :
dans /bower-components/color-picker/color-picker.html
.alpha {
  font-size: 0.6em;
  margin-left: 6px;
  font-style: italic;
  height: 100%;
}
supprimer la ligne font-size: 0.6em

et
modifiez les lignes  
 height: 4em;
  width: 4em;
dans
input[type="color"].native {
  height: 1.5em;
  width: 2em;
  padding: 0.5em;
  box-sizing: content-box;
  cursor: pointer;
  margin: 0;
  @apply --color-input;
}
