import { Server } from "socket.io"

let io: Server | null = null

export function initSocket(server: any) {

  if (io) return io

  io = new Server(server, {
    cors: {
      origin: "*"
    }
  })

  io.on("connection", (socket) => {

    console.log("device connected", socket.id)

    socket.on("device-online", (data) => {
      io?.emit("device-status", data)
    })

    socket.on("device-stream", (data) => {
      io?.emit("stream-update", data)
    })

    socket.on("device-gps", (data) => {
      io?.emit("gps-update", data)
    })

  })

  return io
}