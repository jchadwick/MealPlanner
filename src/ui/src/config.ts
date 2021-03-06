declare var process: any;

export enum Environment {
    Development,
    Production
}

const DefaultEnvironment = Environment.Development;
let envStr: string = process.env.NODE_ENV || Environment[DefaultEnvironment];
let environment: Environment = Environment[envStr];

export default {
    environment: environment,
    recipeSearch: {
        apiKey: "GblRs77oAvjy4IieaIYaFGaZteFRSXFSV5EBu/H1rMCieVquQl7C6g=="
    },
    sentryIo: {
        dsn: 'https://215e82e55ba5439eada48d4a21c2d457@sentry.io/165870',
        options: {
            environment: Environment[environment].toLowerCase()
        }
    },
    firebase: {
        apiKey: "AIzaSyAf5Vb7N3nF0Nxb1Qy_A2ojYQWZHihziKQ",
        authDomain: "buffetbot-1733f.firebaseapp.com",
        databaseURL: "https://buffetbot-1733f.firebaseio.com",
        projectId: "buffetbot-1733f",
        storageBucket: "buffetbot-1733f.appspot.com",
        messagingSenderId: "971436743545"
    }
};