const { projects, clients} = require('../sampleData.js')
const { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
} = require('graphql') 


// client type
const ClientType =new GraphQLObjectType({
    name: 'Client',
    fields: ()=>({
        id: { type:GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone:{type: GraphQLString},
    })
});
const RootQuery =new GraphQLObjectType({

    name: 'RootQueryType',
    fields: {
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args) {
              return Client.find();
            },
          },
        client: {
            type: ClientType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return clients.find(client => client.id === args.id)
            }
        }
    } 
});
module.exports = new GraphQLSchema({
    query: RootQuery
});