const {model, Schema} = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true
		},
		campus: {
			type: String,
			enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "Mexico", "Sao Paulo"],
			required: true
		},
		course: {
			type: String,
			enum: ["WebDev", "UX/UI", "Data Analytics"],
			required: true
		},
		image: {
			type: String,
			default: "https://ischool.illinois.edu/sites/default/files/styles/normal_square/public/images/empty-avatar-01_1.jpg"
		}
	},
	{
		versionKey: false,
		timestamps: true
	}
);

userSchema.plugin(PLM);

module.exports = model("User", userSchema);
