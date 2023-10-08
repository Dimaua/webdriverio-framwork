class DataGenerator{
    generateRandString(){
return Math.random().toString(36).substring(2);
}
}
export default new DataGenerator();