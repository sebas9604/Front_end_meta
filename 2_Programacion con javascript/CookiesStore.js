//StoreManager
var storeManagerMovement = 4;
var storeManagerSocialSkills = 50;
var storeManagerStreetSmarts = 50;
var storeManagerHealth = 30;

var storeManager = {}
storeManager.rangeTilesPerTurn = 4;
storeManager.socialSkills = 50;
storeManager.streetSmarts = 50;
storeManager.health = 30;
storeManager.specialAbility = "finding business opportunities";
storeManager.greeting = "Let's make some money";


var assistantManager = {
    movement: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40
}

console.log(storeManager.health, assistantManager.health)


//Notacion de corchetes
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}