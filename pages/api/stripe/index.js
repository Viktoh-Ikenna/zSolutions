import Stripe from "stripe";
const live ="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";
const text="sk_test_51KIsNHE8nc1TqU8XPUMcuDjmSmTmTqZ9d5GHLXL8cATT68hixpqAS9f3iwshIoy1EoF4EOaNKNdZAgX6xxbTMBao007A7ahL8K"
const stripe = new Stripe(live);

const url = "http://localhost:3000";
const handle = async (req, res) => {
  const { body, method } = req;
  switch (method) {
    case "POST":
      try {
        const session = await stripe.checkout.sessions.create({
          success_url: `${url}/checkout/passed`,
          cancel_url: `${url}/checkout/failed`,
          line_items: [
            {
              price: body.priceId,
              quantity: 1,
              currency: "GBP",
              amount: body.amount,
              name:'Enterprize',
            },
          ],
          payment_method_types: ["card"],
          mode: "payment",
        });
        // console.log("successfule payment");
        // console.log(session)
        res.status(200).json(session);
      } catch (err) {
        // console.log("error in payment", err);

        res.status(500).json({ status: false, message: err.message });
      }
      break;
    default:
      res.status(404).json({ message: `${method} not found` });
  }
};

export default handle;
