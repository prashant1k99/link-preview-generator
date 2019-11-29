Link Preview Node
=================

It is the Node implementation for creating Link Preview...

Remix the [Glitch Project here...]{https://glitch.com/~peaceful-headphones}

[Demo]{https://peaceful-headphones.glitch.me?url=https%3A%2F%2Fgithub.com%2Fprashant1k99}

Response from Server
------------
```json
[
   {
      "type":"Simple",
      "title":"prashant1k99 (Prashant Singh) · GitHub",
      "description":"I am Owner of NerdyACE, and with passion and skills, I am a Web-Developer, an SEO Expert and most of important of all, I am a Machine Learning Expert... - prashant1k99",
      "icon":"https://github.githubassets.com/favicon.ico"
   },
   {
      "type":"OG",
      "title":"prashant1k99 - Overview",
      "description":"I am Owner of NerdyACE, and with passion and skills, I am a Web-Developer, an SEO Expert and most of important of all, I am a Machine Learning Expert... - prashant1k99",
      "image":"https://avatars3.githubusercontent.com/u/41435180?s=400&v=4"
   },
   {
      "type":"Twitter Card"
   }
]
```
It returns data as 3 different Objects in a single Array:
- type: Simple,
  It is the normal data,
  
- type: OG,
  It is the Data used by OpenGraph for Instagram and Facebook
  
- type: Twitter Card,
  It is the data used to create Twitter Cards

Request:
-------------------
User can request for the data by passing the param as ```url```
example:
```url
https://peaceful-headphones.glitch.me?url=https%3A%2F%2Fgithub.com%2Fprashant1k99
```

\ ゜o゜)ノ
