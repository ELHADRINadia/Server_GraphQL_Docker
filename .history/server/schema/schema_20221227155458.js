const { projects, clients} = require('../sampleData.js')
const { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
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
        client: {
            type: ClientType,
            args: {id: {type: GraphQlID}},
            resolve(parent, args){
                return clients.find(client => client.id === args.id)
            }
        }
    } 
});
module.exports = new GraphQLSchema({
    query: RootQuery
});