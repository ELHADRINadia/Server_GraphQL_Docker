const { projects, clients} = require('../sampleData.js')
const { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
} = require('graphql') 

// Project type
const ProjectType =new GraphQLObjectType({
    name: 'Project',
    fields: ()=>({
        id: { type:GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        status:{type: GraphQLString},
    })
});
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      projects: {
        type: new GraphQLList(ProjectType),
        resolve(parent, args) {
          return Project.find();
        },
      },
      project: {
        type: ProjectType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Project.findById(args.id);
        },
      },

    },
// client type
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
              return clients;
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