import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import {ProtoGrpcType} from './proto/random'
import {RandomServicesHandlers} from './proto/nodegrpc/RandomServices'
import { TodoResponse } from './proto/nodegrpc/TodoResponse'
import { TodoRequest } from './proto/nodegrpc/TodoRequest'
import { ChatRequest } from './proto/nodegrpc/ChatRequest'
import { ChatResponse } from './proto/nodegrpc/ChatResponse'

const PORT = 8082

const PROTO_FILE = './proto/random.proto'


const packageDefenition = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObject = (grpc.loadPackageDefinition(packageDefenition) as unknown) as ProtoGrpcType
const nodegrpcPackage = grpcObject.nodegrpc


function main() {
  const server = getServer()
  server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, res) => {
    if(err) {
      console.error(err);
      return
    }

    console.log(`Your server started on port ${res}`, res)
    server.start();
  })
}

let todoList : TodoResponse = {todo: []};
const callObjectByUsername = new Map<string, grpc.ServerDuplexStream<ChatRequest, ChatResponse>>()

function getServer() {
  const server = new grpc.Server();
  server.addService(nodegrpcPackage.RandomServices.service, {
    "GetPing": (req: any, res: any) => {
      console.log("Request Data", req.request)
      res(null, {message: "Welcome to send grpc message"})
    },
    "GenerateRandomNumber": (call: any) => {
      const {maxValue = 10} = call.request;
      console.log({requestValue: call.request})
      let runCount = 0;
      const id = setInterval(() => {
        runCount = ++runCount;
        call.write({numValue: Math.floor(Math.random() * maxValue)})
        if(runCount >= 10) {
          clearInterval(id)
          call.end();
        }
      }, 500)
    },

    "TodoList": (call: any, callback: any) => {
      call.on("data", (chunk: TodoRequest) => {
        todoList.todo?.push(chunk)
        console.log({chunk});
      });

      call.on("end", () => {
        callback(null, {todo: todoList.todo})
      })
    },

    "Chat": (call: any) => {
      call.on("data", (req: any) => {
        const username = call.metadata.get("username")[0] as string
        const msg = req.message;
        console.log(`${username} : ${msg}`)

        for(let [user, usersCall] of callObjectByUsername) {
          if(username !== user) {
            usersCall.write({
              username: username,
              message: msg
            })
          }
        }

        if(callObjectByUsername.get(username) === undefined) {
          callObjectByUsername.set(username, call)
        }
      })
      
      call.on("end", () => {
        const username = call.metadata.get("username")[0] as string
        callObjectByUsername.delete(username);

        for(let [user, usersCall] of callObjectByUsername) {
          if(username !== user) {
            usersCall.write({
              username: username,
              message: "Has Left the Chat!"
            })
          }
        }
        call.write({username: "Server", message: `See you later ${username}`})

        call.end();
      })
    }
  } as unknown as RandomServicesHandlers)

  return server;
}


main();