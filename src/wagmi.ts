import { 
  createConfig, 
  http, 
  cookieStorage, 
  createStorage 
} from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { injected, metaMask, walletConnect } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors:[
    injected(),
    walletConnect({ projectId: 'bd4997ce3ede37c95770ba10a3804dad', showQrModal: false }),
    metaMask({ preferDesktop: true })
  ],
  storage: createStorage({  
    storage: cookieStorage, 
  }),
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
