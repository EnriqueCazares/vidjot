if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb+srv://Enrique:sho0ter42561@vidjot-prod-lb7f9.mongodb.net/test?retryWrites=true&w=majority'}
}else{
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}