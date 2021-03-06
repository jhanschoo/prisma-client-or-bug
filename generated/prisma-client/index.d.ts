// Code generated by Prisma (prisma@1.23.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  macGuffin: (where?: MacGuffinWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  macGuffin: (where: MacGuffinWhereUniqueInput) => MacGuffinPromise;
  macGuffins: (
    args?: {
      where?: MacGuffinWhereInput;
      orderBy?: MacGuffinOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<MacGuffin>;
  macGuffinsConnection: (
    args?: {
      where?: MacGuffinWhereInput;
      orderBy?: MacGuffinOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => MacGuffinConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createMacGuffin: (data: MacGuffinCreateInput) => MacGuffinPromise;
  updateMacGuffin: (
    args: { data: MacGuffinUpdateInput; where: MacGuffinWhereUniqueInput }
  ) => MacGuffinPromise;
  upsertMacGuffin: (
    args: {
      where: MacGuffinWhereUniqueInput;
      create: MacGuffinCreateInput;
      update: MacGuffinUpdateInput;
    }
  ) => MacGuffinPromise;
  deleteMacGuffin: (where: MacGuffinWhereUniqueInput) => MacGuffinPromise;
  deleteManyMacGuffins: (where?: MacGuffinWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  macGuffin: (
    where?: MacGuffinSubscriptionWhereInput
  ) => MacGuffinSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MacGuffinOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type MacGuffinWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  macGuffins_every?: MacGuffinWhereInput;
  macGuffins_some?: MacGuffinWhereInput;
  macGuffins_none?: MacGuffinWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface MacGuffinWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  owners_every?: UserWhereInput;
  owners_some?: UserWhereInput;
  owners_none?: UserWhereInput;
  AND?: MacGuffinWhereInput[] | MacGuffinWhereInput;
  OR?: MacGuffinWhereInput[] | MacGuffinWhereInput;
  NOT?: MacGuffinWhereInput[] | MacGuffinWhereInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface MacGuffinCreateInput {
  owners?: UserCreateManyWithoutMacGuffinsInput;
}

export interface UserCreateManyWithoutMacGuffinsInput {
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
}

export interface MacGuffinUpdateInput {
  owners?: UserUpdateManyWithoutMacGuffinsInput;
}

export interface UserUpdateManyWithoutMacGuffinsInput {
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput;
}

export interface UserScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  AND?: UserScalarWhereInput[] | UserScalarWhereInput;
  OR?: UserScalarWhereInput[] | UserScalarWhereInput;
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput;
}

export interface UserCreateInput {
  macGuffins?: MacGuffinCreateManyWithoutOwnersInput;
}

export interface MacGuffinCreateManyWithoutOwnersInput {
  connect?: MacGuffinWhereUniqueInput[] | MacGuffinWhereUniqueInput;
}

export interface UserUpdateInput {
  macGuffins?: MacGuffinUpdateManyWithoutOwnersInput;
}

export interface MacGuffinUpdateManyWithoutOwnersInput {
  delete?: MacGuffinWhereUniqueInput[] | MacGuffinWhereUniqueInput;
  connect?: MacGuffinWhereUniqueInput[] | MacGuffinWhereUniqueInput;
  disconnect?: MacGuffinWhereUniqueInput[] | MacGuffinWhereUniqueInput;
  deleteMany?: MacGuffinScalarWhereInput[] | MacGuffinScalarWhereInput;
}

export interface MacGuffinScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  AND?: MacGuffinScalarWhereInput[] | MacGuffinScalarWhereInput;
  OR?: MacGuffinScalarWhereInput[] | MacGuffinScalarWhereInput;
  NOT?: MacGuffinScalarWhereInput[] | MacGuffinScalarWhereInput;
}

export interface MacGuffinSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: MacGuffinWhereInput;
  AND?: MacGuffinSubscriptionWhereInput[] | MacGuffinSubscriptionWhereInput;
  OR?: MacGuffinSubscriptionWhereInput[] | MacGuffinSubscriptionWhereInput;
  NOT?: MacGuffinSubscriptionWhereInput[] | MacGuffinSubscriptionWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface MacGuffin {
  id: ID_Output;
}

export interface MacGuffinPromise extends Promise<MacGuffin>, Fragmentable {
  id: () => Promise<ID_Output>;
  owners: <T = FragmentableArray<User>>(
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface MacGuffinSubscription
  extends Promise<AsyncIterator<MacGuffin>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  owners: <T = Promise<AsyncIterator<UserSubscription>>>(
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface User {
  id: ID_Output;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  macGuffins: <T = FragmentableArray<MacGuffin>>(
    args?: {
      where?: MacGuffinWhereInput;
      orderBy?: MacGuffinOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  macGuffins: <T = Promise<AsyncIterator<MacGuffinSubscription>>>(
    args?: {
      where?: MacGuffinWhereInput;
      orderBy?: MacGuffinOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface MacGuffinConnection {
  pageInfo: PageInfo;
  edges: MacGuffinEdge[];
}

export interface MacGuffinConnectionPromise
  extends Promise<MacGuffinConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<MacGuffinEdge>>() => T;
  aggregate: <T = AggregateMacGuffinPromise>() => T;
}

export interface MacGuffinConnectionSubscription
  extends Promise<AsyncIterator<MacGuffinConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<MacGuffinEdgeSubscription>>>() => T;
  aggregate: <T = AggregateMacGuffinSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface MacGuffinEdge {
  node: MacGuffin;
  cursor: String;
}

export interface MacGuffinEdgePromise
  extends Promise<MacGuffinEdge>,
    Fragmentable {
  node: <T = MacGuffinPromise>() => T;
  cursor: () => Promise<String>;
}

export interface MacGuffinEdgeSubscription
  extends Promise<AsyncIterator<MacGuffinEdge>>,
    Fragmentable {
  node: <T = MacGuffinSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateMacGuffin {
  count: Int;
}

export interface AggregateMacGuffinPromise
  extends Promise<AggregateMacGuffin>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateMacGuffinSubscription
  extends Promise<AsyncIterator<AggregateMacGuffin>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface MacGuffinSubscriptionPayload {
  mutation: MutationType;
  node: MacGuffin;
  updatedFields: String[];
  previousValues: MacGuffinPreviousValues;
}

export interface MacGuffinSubscriptionPayloadPromise
  extends Promise<MacGuffinSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = MacGuffinPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = MacGuffinPreviousValuesPromise>() => T;
}

export interface MacGuffinSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<MacGuffinSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = MacGuffinSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = MacGuffinPreviousValuesSubscription>() => T;
}

export interface MacGuffinPreviousValues {
  id: ID_Output;
}

export interface MacGuffinPreviousValuesPromise
  extends Promise<MacGuffinPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
}

export interface MacGuffinPreviousValuesSubscription
  extends Promise<AsyncIterator<MacGuffinPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "MacGuffin",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
