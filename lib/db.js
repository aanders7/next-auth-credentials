import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://capstoneProject:capstone@capstonecluster.4wpyb.mongodb.net/test?retryWrites=true&w=majority";
export async function connectToDatabase() {
	const client = await MongoClient.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	
	return client;
}


