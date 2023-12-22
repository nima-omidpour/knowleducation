// src/server.js
import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    routes() {
      this.get("/api/courses", () => {
        return [
          {
            image: "https://picsum.photos/id/237/200/300",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          },
          {
            image: "https://picsum.photos/seed/picsum/200/300",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          },
          {
            image: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          },
          {
            image: "https://picsum.photos/id/237/200/300",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          },
          {
            image: "https://picsum.photos/seed/picsum/200/300",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          },
          {
            image: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          },
          {
            image: "https://picsum.photos/id/237/200/300",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          },
          {
            image: "https://picsum.photos/seed/picsum/200/300",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          },
          {
            image: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          },
          {
            image: "https://picsum.photos/id/237/200/300",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          },
          {
            image: "https://picsum.photos/seed/picsum/200/300",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          },
          {
            image: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          },
        ];
      });
    },
  });

  return server;
}
