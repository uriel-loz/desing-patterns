import AdFactory from "./factories/ad.factory";

class Main {
    run(): void{
        const factory = AdFactory.getInstance();
        const billboard = factory.create("billboard");
        const wall = factory.create("wall");
        const route = factory.create("route");

        billboard.setInfo({
            id: "1",
            name: "Billboard 1",
            description: "Billboard 1 description",
            type: "billboard",
            status: "active",
            createdAt: new Date(),
            updatedAt: new Date()
        });

        wall.setInfo({
            id: "2",
            name: "Wall 1",
            description: "Wall 1 description",
            type: "wall",
            status: "active",
            createdAt: new Date(),
            updatedAt: new Date()
        });

        route.setInfo({
            id: "3",
            name: "Route 1",
            description: "Route 1 description",
            type: "route",
            status: "active",
            createdAt: new Date(),
            updatedAt: new Date()
        });

        console.log("Billboard Ads: ", billboard.getAds());
        console.log("Wall Ads: ", wall.getAds());
        console.log("Route Ads: ", route.getAds());
    }   
}

const main = new Main();
main.run();