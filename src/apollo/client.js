import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    // uri: 'https://api.thegraph.com/subgraphs/name/phucngh/luaswap' // Hosted services subgraph
    uri:
      'https://gateway.thegraph.com/api/734bd9ebf33a23e59cfda3aa4b4326a0/subgraphs/id/EWSHN5BRStTMZtumEH7n4q7bsWJZR7ZvqrodXR6FoWHR'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    // uri: 'https://api.thegraph.com/index-node/graphql' // Hosted services subgraph
    uri: 'https://suntzu.me/status'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks' // Hosted services subgraph
    // uri:
    //   'https://gateway.thegraph.com/api/734bd9ebf33a23e59cfda3aa4b4326a0/subgraphs/id/drD3RZMJKZyZRvAySx4wCAibs6h2rc6boCX85qmR5cs'
  }),
  cache: new InMemoryCache()
})
