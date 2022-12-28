const { projects, clients} = require('../sampleData.js')
const { GraphQLObjectType} = require('graphql');  


// client type
const ClientType =new GraphQLObjectType({
    name: 'Client',
    fields: ()=>({
        id: { type:GraphQlID},
        name: {type: GraphQlString},
        email: {type: GraphQlString},
        phone:{type: GraphQlString},
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