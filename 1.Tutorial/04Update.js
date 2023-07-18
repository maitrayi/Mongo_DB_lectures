db.inventoryupdateOne(
    {item: "paper"},
    {
        $set: {"size.uom": "cm", status:"p"},
        $currentDate: { lastModified: true}
    }
)

db.inventory.find(
    {item: "paper" }
)