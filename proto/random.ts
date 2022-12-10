import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { RandomServicesClient as _nodegrpc_RandomServicesClient, RandomServicesDefinition as _nodegrpc_RandomServicesDefinition } from './nodegrpc/RandomServices';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  nodegrpc: {
    ChatRequest: MessageTypeDefinition
    ChatResponse: MessageTypeDefinition
    NumberRequest: MessageTypeDefinition
    NumberResponse: MessageTypeDefinition
    PingRequest: MessageTypeDefinition
    PingResponse: MessageTypeDefinition
    PongRequest: MessageTypeDefinition
    RandomServices: SubtypeConstructor<typeof grpc.Client, _nodegrpc_RandomServicesClient> & { service: _nodegrpc_RandomServicesDefinition }
    TodoRequest: MessageTypeDefinition
    TodoResponse: MessageTypeDefinition
  }
}

