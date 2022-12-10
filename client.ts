import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import {ProtoGrpcType} from './proto/random'
import {RandomServicesHandlers} from './proto/nodegrpc/RandomServices'
import readline from 'readline'
import { ChatResponse } from './proto/nodegrpc/ChatResponse'

const PORT = 8082

const PROTO_FILE = './proto/random.proto'

const packageDefenition = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObject = (grpc.loadPackageDefinition(packageDefenition) as unknown) as ProtoGrpcType

const client = new grpcObject.nodegrpc.RandomServices(
  `0.0.0.0:${PORT}`, grpc.credentials.createInsecure()
)

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5)
client.waitForReady(deadline, (err) => {
  if(err) {
    console.error(err)
    return
  }
  // onStreamClientRequest()
  onStreamClientBidirectional()
})

function onClientReady() {
  // client.GetPing({message: "Ping Now"}, (err, response) => {
  //   if(err) {
  //     console.error(err)
  //     return;
  //   }   

  //   console.log({messageResponse: response})
  // })

  const stream = client.GenerateRandomNumber({maxValue: 180})
  stream.on("data", (chunk) => {
    console.log({chunk})
  })

  stream.on("end", () => {
    console.log("Communication ended")
  })
}

function onStreamClientRequest() {
  const stream = client.TodoList((err: any, response: any) => {
    if(err) {
      console.error(err)
      return
    }

    console.log({response});
  })

  stream.write({title: 'Backend', status: 'Laravel'})
  stream.write({title: 'Backend', status: 'Express Js'})
  stream.write({title: 'Backend', status: 'Go Gin'})
  stream.write({title: 'Backend', status: 'Flask'})
  stream.write({title: 'Frontend', status: 'React'})
  stream.write({title: 'Frontend', status: 'Svelte'})
  stream.write({title: 'Frontend', status: 'Vue'})
  stream.write({title: 'Frontend', status: 'JQuery'})
  stream.end();
}

function onStreamClientBidirectional() {
  const IOReadline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const username = process.argv[2];
  console.log("PROCESS ARGV", process.argv)
  
  if(!username) { 
    console.error("No username, can't join chat")
    process.exit()
  }

  const metadata = new grpc.Metadata()
  metadata.set("username", username)
  const call = client.Chat(metadata)

  call.write({
    message: "register"
  })

  call.on("data", (chunk: ChatResponse) => {
    console.log(`${chunk.username} ==> ${chunk.message}`)
  })

  IOReadline.on("line", (line: any) => {
    if(line === 'quit') {
      call.end();
      return
    }
    else {
      call.write({
        message: line
      })
    }
  })
}