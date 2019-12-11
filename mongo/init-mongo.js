db.createUser(
    {
        user: "root",
        pwd: "dummy1234",
        roles: [
            {
                role: "readWrite",
                db: "playstation"
            }
        ]
    }
)
