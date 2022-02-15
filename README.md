# Test project for IDAProject
### Product list on Vue 

- In this project list of product array `list` in *app.vue*(main Vue file) is viewed in `div id="App"` like a cards. 

- You can remove card from list by clicking on icon during hover on card, add new card by using `AddForm` component, 
sorting cards by changing `select` above cards. 

- Form for adding card has a validation on required input(*name*, *price*, *url* for image). 

- Card list has a animation for deleting and adding card.   

#### Usage
1. Clone git repository 
`git clone https://github.com/kopytian/IDAProject.git`
2. In your dir install package `vue` and `vue-cli` with `npm`
`npm install vue`
`npm install --save @vue/cli-service`
3. For the running project on local machine running  vue-cli
`npm run serve` (you can see all scripts for running in `scripts` object in *package.json*)
