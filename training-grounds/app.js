/* =========================================================
   BONUS MISSION I: THE ROYAL SUPPLY TRIAL

   The Royal Supply System contains THREE bugs.
   Repair them without rewriting the entire program.
   ========================================================= */

const royalSupplies = ['Sword', 'Shield', 'Potion']

function addSupply(supply) {
  royalSupplies.push(supply)
}

function countSupplies() {
 return royalSupplies.length
}

addSupply('Map')

console.log(
  `⚔️ The royal inventory contains ${countSupplies()} supplies.`
)

/* ⭐ BONUS QUEST
   Use a loop to display every item with the 📦 icon.
*/
for(let box of royalSupplies){
  console.log(`📦 ${box}`)
}