const express = require("express")
const app = express();

const users = [{
	name: "sagar",
	Devices: [{
		new:false
	}]
}]
app.use(express.json())

app.get("/", function (req, res) {
	const sagarDevice = users[0].Devices;
	const noOfDevices = sagarDevice.length;
	let newDevices = 0;
	for (let i = 0; i < sagarDevice.length; i++){
		if (sagarDevice[i].new) {
			newDevices+=1
		}
	}
	const OldDevices = noOfDevices - newDevices;
	res.json({
		noOfDevices,
		newDevices,
		OldDevices

	})
})
app.post("/", function (req, res) {
	const isNew = req.body.isNew;
	users[0].Devices.push({
		new: isNew
	})
	res.json({
		msg:"Done!"
	})
})

app.put("/", function (req, res) {
	for (let i = 0; i < users[0].Devices.length; i++){
		users[0].Devices[i].new = true;
	}
	res.json({})
})

app.listen(3000)