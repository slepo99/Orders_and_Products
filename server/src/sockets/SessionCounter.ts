import socketIo from "socket.io";

let io: socketIo.Server;
let activeSessionsCount: number = 0;

export function initializeWebSocketCounter(
  socketServer: socketIo.Server
): void {
  io = socketServer;

  io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("joinSession", () => {
      activeSessionsCount++;
      updateActiveSessionsCount();
    });

    socket.on("leaveSession", () => {
      if (activeSessionsCount > 0) {
        activeSessionsCount--;
        updateActiveSessionsCount();
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
      if (activeSessionsCount > 0) {
        activeSessionsCount--;
        updateActiveSessionsCount();
      }
    });
  });
}

function updateActiveSessionsCount(): void {
  io.emit("activeSessionsCount", activeSessionsCount);
}

export function getActiveSessionsCount(): number {
  return activeSessionsCount;
}
