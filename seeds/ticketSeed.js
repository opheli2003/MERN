require("../config/db");
const Ticket = require("../models/ticket.model");
const mongoose = require("mongoose");

const ticketSeed = [
	{
		title: "pbm de connection",
		comment: "la connection semble défaillante",
	},
	{
		title: "mdp",
		comment: "je ne peux pas recevoir un nouveau mot de passe",
	},
	{
		title: "images",
		comment: "les images ne chargent pas",
	},
	{
		title: "langue",
		comment: "peux-on faire des commentaires en anglais",
	},
	{
		title: "pseudo",
		comment: "je n'arrive plus à me connecter avec mon pseudo",
	},
	{
		title: "compte bloqué",
		comment: "pourquoi mon compte est bloqué",
	},
	{
		title: "connection via téléphone",
		comment: "je n'arrive pas à accéder à l'app via mon téléphone",
	},
];

const seedDB = async () => {
	await Ticket.deleteMany();
	await Ticket.insertMany(ticketSeed);
};

seedDB()
	.then(() => {
		console.log(`There has been ${ticketSeed.length} tickets inserted`);
		mongoose.connection.close();
	})
	.catch((err) => console.log("Failed to connect to mongoDb", err));
