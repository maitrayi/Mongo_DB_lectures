//insert one 

db.inventory.insertOne(
    { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
 )

 //insert  2 
 db.inventory.insertMany(
    [{ item: "canvas1", qty: 50, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } },
    { item: "canvas2", qty: 100, tags: ["jute"], size: { h: 28, w: 35.5, uom: "cm" } },
    { item: "canvas3", qty: 10, tags: ["copper"], size: { h: 44, w: 35.5, uom: "cm" } },
    { item: "canvas4", qty: 100, tags: ["Aluminium"], size: { h: 28, w: 35.5, uom: "cm" } },
    { item: "canvas5", qty: 40, tags: ["Zinc"], size: { h: 9, w: 35.5, uom: "cm" } }]
 )
