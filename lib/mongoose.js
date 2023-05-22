import mongoose from 'mongoose';
/*
    Condicional para verificar se já existe uma conexão com o banco
    caso contrário, uma nova conexão será criada
*/
export function mongooseConnect() {
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise();
    } else {
        const uri = process.env.MONGODB_URI;
        return mongoose.connect(uri);
    }
}