const { projects, clients} = require('../sampleData.js')
const { GraphQLObjectType} = require('graphql');  


// client type
const ClientType =new GraphQLObjectType({
    name: 'Client',
    fields: ()=>({
        id: { type:GraphQlID},
        name: {type: GraphQlString},
        email: {type: GraphQlString},
        phone:{ }


    })
})