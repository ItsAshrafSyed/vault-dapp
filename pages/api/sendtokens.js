export default function handler(req, res) {
	if (req.method === "GET") {
		res.status(200).send("successful");
	}
	if (req.method === "POST") {
		const { address } = req.body;
		res.status(200).json({
			message: "successful",
			method: "POST",
			address,
			value: 1,
		});
	}
}
