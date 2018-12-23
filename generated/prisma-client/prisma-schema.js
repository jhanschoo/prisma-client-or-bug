module.exports = {
        typeDefs: /* GraphQL */ `type AggregateMacGuffin {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type MacGuffin {
  id: ID!
  owners(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type MacGuffinConnection {
  pageInfo: PageInfo!
  edges: [MacGuffinEdge]!
  aggregate: AggregateMacGuffin!
}

input MacGuffinCreateInput {
  owners: UserCreateManyWithoutMacGuffinsInput
}

input MacGuffinCreateManyWithoutOwnersInput {
  connect: [MacGuffinWhereUniqueInput!]
}

type MacGuffinEdge {
  node: MacGuffin!
  cursor: String!
}

enum MacGuffinOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MacGuffinPreviousValues {
  id: ID!
}

input MacGuffinScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [MacGuffinScalarWhereInput!]
  OR: [MacGuffinScalarWhereInput!]
  NOT: [MacGuffinScalarWhereInput!]
}

type MacGuffinSubscriptionPayload {
  mutation: MutationType!
  node: MacGuffin
  updatedFields: [String!]
  previousValues: MacGuffinPreviousValues
}

input MacGuffinSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MacGuffinWhereInput
  AND: [MacGuffinSubscriptionWhereInput!]
  OR: [MacGuffinSubscriptionWhereInput!]
  NOT: [MacGuffinSubscriptionWhereInput!]
}

input MacGuffinUpdateInput {
  owners: UserUpdateManyWithoutMacGuffinsInput
}

input MacGuffinUpdateManyWithoutOwnersInput {
  delete: [MacGuffinWhereUniqueInput!]
  connect: [MacGuffinWhereUniqueInput!]
  disconnect: [MacGuffinWhereUniqueInput!]
  deleteMany: [MacGuffinScalarWhereInput!]
}

input MacGuffinWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  owners_every: UserWhereInput
  owners_some: UserWhereInput
  owners_none: UserWhereInput
  AND: [MacGuffinWhereInput!]
  OR: [MacGuffinWhereInput!]
  NOT: [MacGuffinWhereInput!]
}

input MacGuffinWhereUniqueInput {
  id: ID
}

type Mutation {
  createMacGuffin(data: MacGuffinCreateInput!): MacGuffin!
  updateMacGuffin(data: MacGuffinUpdateInput!, where: MacGuffinWhereUniqueInput!): MacGuffin
  upsertMacGuffin(where: MacGuffinWhereUniqueInput!, create: MacGuffinCreateInput!, update: MacGuffinUpdateInput!): MacGuffin!
  deleteMacGuffin(where: MacGuffinWhereUniqueInput!): MacGuffin
  deleteManyMacGuffins(where: MacGuffinWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  macGuffin(where: MacGuffinWhereUniqueInput!): MacGuffin
  macGuffins(where: MacGuffinWhereInput, orderBy: MacGuffinOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MacGuffin]!
  macGuffinsConnection(where: MacGuffinWhereInput, orderBy: MacGuffinOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MacGuffinConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  macGuffin(where: MacGuffinSubscriptionWhereInput): MacGuffinSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  macGuffins(where: MacGuffinWhereInput, orderBy: MacGuffinOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MacGuffin!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  macGuffins: MacGuffinCreateManyWithoutOwnersInput
}

input UserCreateManyWithoutMacGuffinsInput {
  connect: [UserWhereUniqueInput!]
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  macGuffins: MacGuffinUpdateManyWithoutOwnersInput
}

input UserUpdateManyWithoutMacGuffinsInput {
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  deleteMany: [UserScalarWhereInput!]
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  macGuffins_every: MacGuffinWhereInput
  macGuffins_some: MacGuffinWhereInput
  macGuffins_none: MacGuffinWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    