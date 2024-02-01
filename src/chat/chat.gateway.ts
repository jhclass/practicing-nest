//chat.gateway.ts
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage("joinRoom")
  handleJoinRoom(
    @MessageBody() data: { roomId: string },
    @ConnectedSocket() client: Socket,
  ): void {
    client.join(data.roomId);
  }
  @SubscribeMessage("chat")
  handleChat(
    @MessageBody() data: { roomId: string; message: string },
    //@ConnectedSocket() client: Socket,
  ): void {
    // console.log(
    //   "연결확인연결확인연결확인연결확인연결확인연결확인연결확인연결확인연결확인연결확인연결확인연결확인연결확인",
    // );
    this.server.to(data.roomId).emit("chat", data);
  }
  @SubscribeMessage("leaveRoom")
  handleLeaveRoom(
    @MessageBody() data: { roomId: string },
    @ConnectedSocket() client: Socket,
  ): void {
    client.leave(data.roomId);
  }
}
