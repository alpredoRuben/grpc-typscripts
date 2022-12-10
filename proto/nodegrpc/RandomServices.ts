// Original file: proto/random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ChatRequest as _nodegrpc_ChatRequest, ChatRequest__Output as _nodegrpc_ChatRequest__Output } from '../nodegrpc/ChatRequest';
import type { ChatResponse as _nodegrpc_ChatResponse, ChatResponse__Output as _nodegrpc_ChatResponse__Output } from '../nodegrpc/ChatResponse';
import type { NumberRequest as _nodegrpc_NumberRequest, NumberRequest__Output as _nodegrpc_NumberRequest__Output } from '../nodegrpc/NumberRequest';
import type { NumberResponse as _nodegrpc_NumberResponse, NumberResponse__Output as _nodegrpc_NumberResponse__Output } from '../nodegrpc/NumberResponse';
import type { PingRequest as _nodegrpc_PingRequest, PingRequest__Output as _nodegrpc_PingRequest__Output } from '../nodegrpc/PingRequest';
import type { PingResponse as _nodegrpc_PingResponse, PingResponse__Output as _nodegrpc_PingResponse__Output } from '../nodegrpc/PingResponse';
import type { TodoRequest as _nodegrpc_TodoRequest, TodoRequest__Output as _nodegrpc_TodoRequest__Output } from '../nodegrpc/TodoRequest';
import type { TodoResponse as _nodegrpc_TodoResponse, TodoResponse__Output as _nodegrpc_TodoResponse__Output } from '../nodegrpc/TodoResponse';

export interface RandomServicesClient extends grpc.Client {
  Chat(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_nodegrpc_ChatRequest, _nodegrpc_ChatResponse__Output>;
  Chat(options?: grpc.CallOptions): grpc.ClientDuplexStream<_nodegrpc_ChatRequest, _nodegrpc_ChatResponse__Output>;
  chat(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_nodegrpc_ChatRequest, _nodegrpc_ChatResponse__Output>;
  chat(options?: grpc.CallOptions): grpc.ClientDuplexStream<_nodegrpc_ChatRequest, _nodegrpc_ChatResponse__Output>;
  
  GenerateRandomNumber(argument: _nodegrpc_NumberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_nodegrpc_NumberResponse__Output>;
  GenerateRandomNumber(argument: _nodegrpc_NumberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_nodegrpc_NumberResponse__Output>;
  generateRandomNumber(argument: _nodegrpc_NumberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_nodegrpc_NumberResponse__Output>;
  generateRandomNumber(argument: _nodegrpc_NumberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_nodegrpc_NumberResponse__Output>;
  
  GetPing(argument: _nodegrpc_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_nodegrpc_PingResponse__Output>): grpc.ClientUnaryCall;
  GetPing(argument: _nodegrpc_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_nodegrpc_PingResponse__Output>): grpc.ClientUnaryCall;
  GetPing(argument: _nodegrpc_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_nodegrpc_PingResponse__Output>): grpc.ClientUnaryCall;
  GetPing(argument: _nodegrpc_PingRequest, callback: grpc.requestCallback<_nodegrpc_PingResponse__Output>): grpc.ClientUnaryCall;
  getPing(argument: _nodegrpc_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_nodegrpc_PingResponse__Output>): grpc.ClientUnaryCall;
  getPing(argument: _nodegrpc_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_nodegrpc_PingResponse__Output>): grpc.ClientUnaryCall;
  getPing(argument: _nodegrpc_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_nodegrpc_PingResponse__Output>): grpc.ClientUnaryCall;
  getPing(argument: _nodegrpc_PingRequest, callback: grpc.requestCallback<_nodegrpc_PingResponse__Output>): grpc.ClientUnaryCall;
  
  TodoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_nodegrpc_TodoResponse__Output>): grpc.ClientWritableStream<_nodegrpc_TodoRequest>;
  TodoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_nodegrpc_TodoResponse__Output>): grpc.ClientWritableStream<_nodegrpc_TodoRequest>;
  TodoList(options: grpc.CallOptions, callback: grpc.requestCallback<_nodegrpc_TodoResponse__Output>): grpc.ClientWritableStream<_nodegrpc_TodoRequest>;
  TodoList(callback: grpc.requestCallback<_nodegrpc_TodoResponse__Output>): grpc.ClientWritableStream<_nodegrpc_TodoRequest>;
  todoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_nodegrpc_TodoResponse__Output>): grpc.ClientWritableStream<_nodegrpc_TodoRequest>;
  todoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_nodegrpc_TodoResponse__Output>): grpc.ClientWritableStream<_nodegrpc_TodoRequest>;
  todoList(options: grpc.CallOptions, callback: grpc.requestCallback<_nodegrpc_TodoResponse__Output>): grpc.ClientWritableStream<_nodegrpc_TodoRequest>;
  todoList(callback: grpc.requestCallback<_nodegrpc_TodoResponse__Output>): grpc.ClientWritableStream<_nodegrpc_TodoRequest>;
  
}

export interface RandomServicesHandlers extends grpc.UntypedServiceImplementation {
  Chat: grpc.handleBidiStreamingCall<_nodegrpc_ChatRequest__Output, _nodegrpc_ChatResponse>;
  
  GenerateRandomNumber: grpc.handleServerStreamingCall<_nodegrpc_NumberRequest__Output, _nodegrpc_NumberResponse>;
  
  GetPing: grpc.handleUnaryCall<_nodegrpc_PingRequest__Output, _nodegrpc_PingResponse>;
  
  TodoList: grpc.handleClientStreamingCall<_nodegrpc_TodoRequest__Output, _nodegrpc_TodoResponse>;
  
}

export interface RandomServicesDefinition extends grpc.ServiceDefinition {
  Chat: MethodDefinition<_nodegrpc_ChatRequest, _nodegrpc_ChatResponse, _nodegrpc_ChatRequest__Output, _nodegrpc_ChatResponse__Output>
  GenerateRandomNumber: MethodDefinition<_nodegrpc_NumberRequest, _nodegrpc_NumberResponse, _nodegrpc_NumberRequest__Output, _nodegrpc_NumberResponse__Output>
  GetPing: MethodDefinition<_nodegrpc_PingRequest, _nodegrpc_PingResponse, _nodegrpc_PingRequest__Output, _nodegrpc_PingResponse__Output>
  TodoList: MethodDefinition<_nodegrpc_TodoRequest, _nodegrpc_TodoResponse, _nodegrpc_TodoRequest__Output, _nodegrpc_TodoResponse__Output>
}
