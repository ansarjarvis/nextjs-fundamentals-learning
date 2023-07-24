let handler = (req, res) => {
  if (req.method === "POST") {
    let { email } = req.body;
    if (!email || !email.includes("@")) {
      req.status(400).json({ message: "Invalid email" });
    }
    console.log(email);
    res.status(200).json({ message: "Singed up" });
  }
};

export default handler;
