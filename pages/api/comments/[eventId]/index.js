let handler = (req, res) => {
  let { eventId } = req.query;
  let client;
  if (req.method === "POST") {
    let { email, name, text } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === " " ||
      !text ||
      text.trim() === " "
    ) {
      res.status(400).json({ message: "invalid input" });
      //   client.close();
      //   return;
    }
    console.log(email, name, text);
    res.status(200).json({ message: "created comment" });
  }
  if (req.method === "GET") {
    let dummyList = [
      { id: "c1", name: "jarvis", text: "great comment" },
      { id: "c2", name: "homer", text: "homer dont comment" },
      { id: "c3", name: "david", text: "let me show you some action" },
    ];
    res.status(200).json({ comments: dummyList });
  }
};
export default handler;
