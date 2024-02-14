import {createServer} from "miragejs";

createServer({
    routes() {
        this.namespace = "react-server/api/1.0/"

        this.get("/news", () => {
            return {
                data: [
                    {
                        id: 1,
                        imageUrl: "/assets/image/blog/01.png",
                        category: "guides",
                        title: "The rising cost of fuel in the UAE and how to avoid it",
                        text: "Accumsan sit amet nulla facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar neque laoreet suspendisse interdum consectetur."
                    },
                    {
                        id: 2,
                        imageUrl: "/assets/image/blog/02.png",
                        category: "news",
                        title: "These new EV pick up trucks are about to be all the rage",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    },
                    {
                        id: 3,
                        imageUrl: "/assets/image/blog/03.png",
                        category: "guides",
                        title: "The rising cost of fuel in the UAE and how to avoid it",
                        text: "Platea dictumst quisque sagittis purus sit amet volutpat consequat. Porta nibh venenatis cras sed felis eget."
                    }
                ]
            }
        })
        this.get("/comments", () => {
            return {
                data: [
                    {
                        id: 1,
                        avatar: "/assets/image/about/01.png",
                        fullName: "Robert Fox",
                        model: "BMW M850",
                        comment: "Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies lacus. Nisi porta lorem mollis aliquam ut porttitor leo. Venenatis cras sed felis eget. Duis ultricies lacus sed turpis tincidunt. Interdum varius sit amet mattis. Libero justo laoreet sit amet cursus sit amet dictum sit. Consequat interdum varius sit amet mattis vulputate enim nulla.",
                        rating: 3
                    },
                    {
                        id: 2,
                        avatar: "/assets/image/about/02.png",
                        fullName: "Cody Fisher",
                        model: "Mercedes-Benz C 63 AMG",
                        comment: "Id ornare arcu odio ut sem nulla. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Velit dignissim sodales ut eu sem integer vitae justo. A erat nam at lectus urna duis convallis convallis. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Risus ultricies tristique nulla aliquet enim tortor. Consectetur a erat nam at.",
                        rating: 5
                    },
                    {
                        id: 3,
                        avatar: "/assets/image/about/03.png",
                        fullName: "Wade Warren",
                        model: "Lexus LS 460",
                        comment: "Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar neque laoreet suspendisse interdum consectetur. Accumsan lacus vel facilisis volutpat est velit egestas dui id.",
                        rating: 5
                    },
                    {
                        id: 4,
                        avatar: "/assets/image/about/01.png",
                        fullName: "Adam Thomson",
                        model: "Lexus LS 460",
                        comment: "Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar neque laoreet suspendisse interdum consectetur. Accumsan lacus vel facilisis volutpat est velit egestas dui id.",
                        rating: 5
                    },
                    {
                        id: 5,
                        avatar: "/assets/image/about/01.png",
                        fullName: "Rui Vitoria",
                        model: "Lexus LS 460",
                        comment: "Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar neque laoreet suspendisse interdum consectetur. Accumsan lacus vel facilisis volutpat est velit egestas dui id.",
                        rating: 4
                    },
                    {
                        id: 6,
                        avatar: "/assets/image/about/01.png",
                        fullName: "Derek Bill",
                        model: "Lexus LS 460",
                        comment: "Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar neque laoreet suspendisse interdum consectetur. Accumsan lacus vel facilisis volutpat est velit egestas dui id.",
                        rating: 4
                    }
                ]

            }
        })
    },
})
